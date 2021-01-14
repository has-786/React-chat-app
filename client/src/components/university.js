import Navbar from './navbar';
import React from 'react';
import url from './url';
import '../css/navbar.css';
import Footer from './footer';
import Header from './header';

export default class University extends React.Component
{
    constructor(props){
      super(props);
      this.state={
        details:
        [
          {key:'Name of University of Affiliation',value:'Maharashtra University of Health Sciences, Nashik Maharashtra'},
{key:'Link of University',value:'www.muhs.ac.in/'},
{key:'Founder',value:'Government of Maharashtra'},

{key:'Founded',value:'3rd June 1998'},

{key:'Address',value:'Vani-Dindori road, Mhasrul, Nashik, Maharashtra 422003'},

{key:'Phone',value:'0253-253 9114'},

{key:'Chancellor',value:"His Excellency, Governor of Maharashtra Hon’ble Shri Chennamaneni Vidyasagar Rao"},

{key:'Pro-Chancellor',value:"Minister of Medical Education, Hon’ble Shri. Girish Mahajan"},

{key:'Vice Chancellor',value:'Prof. Dr. Deelip Mhaisekar'},

{key:'Pro Vice Chancellor',value:'Prof. Dr. Mohan Khamgaonkar'},

{key:'Registrar', value:'Dr. Kalidas Chavan'}
        ]
          /*Phone: 0253-253 9114

Chancellor: His Excellency, Governor of Maharashtra

Hon’ble Shri Chennamaneni Vidyasagar Rao

Pro-Chancellor: Minister of Medical Education,

Hon’ble Shri. Girish Mahajan

Vice Chancellor: Prof. Dr. Deelip Mhaisekar

Pro Vice Chancellor: Prof. Dr. Mohan Khamgaonkar

Registrar: Dr. Kalidas Chavan

Maharashtra University of Health Sciences, Nashik came into existence by Maharashtra University of Health Sciences Act, 1998. All Government Medical Colleges in Maharashtra were affiliated to MUHS.*/
                }

    }

    componentDidMount(){
      window.scrollTo(0,0);

    fetch(url+'/api/university',{ method:'GET'})
           .then(response=>{ return response.json()})
           .then((body)=>{
                  this.setState({details:body});
                    //alert(body.msg);
                  //  dispatch({type:'add_video',payload:body.video});
            })
           .catch(err=>{});


    }



render(){
	return <div   id='mainBody'>
  <Header />

			 <Navbar />
       <section id="departments" class="departments">
         <div class="container">

           <div class="section-title">
             <h2>University</h2>
             <p>Get all the information of our University here</p>
           </div>
       <br></br>
  <div class="table-responsive" style={{marginTop:'-10px'}}>
    <table class="table table-hover" >
      <tbody>
      {
         this.state.details.map((res,ind)=>{
              return  <tr>
                        <td>{res.key}</td>
                        <td>{res.value}</td>
                      </tr>
            })
        }
        </tbody>
      </table>
    </div>
   </div>
  </section>
        <Footer/>
	</div>
}

}
