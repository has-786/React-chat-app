import Navbar from './navbar';
import React from 'react';
import url from './url';
import '../css/home.css';

export default class University extends React.Component
{
    constructor(props){
      super(props);
      this.state={
        details:
        [
          {key:'Name of University of Affiliation',value: 'Maharashtra University of Health Sciences, Nashik Maharashtra'},
          {key:'Link of University',value:'www.muhs.ac.in/'},
          {key:'Founder',value: 'Government of Maharashtra'},
          {key:'Founded',value:'3rd June 1998'},
          {key:'Address',value:'Vani-Dindori road, Mhasrul, Nashik, Maharashtra 422003'},
          {key:'Address',value:'Vani-Dindori road, Mhasrul, Nashik, Maharashtra 422003'},
          {key:'Address',value:'Vani-Dindori road, Mhasrul, Nashik, Maharashtra 422003'},
          {key:'Address',value:'Vani-Dindori road, Mhasrul, Nashik, Maharashtra 422003'},
          {key:'Address',value:'Vani-Dindori road, Mhasrul, Nashik, Maharashtra 422003'},
          {key:'Address',value:'Vani-Dindori road, Mhasrul, Nashik, Maharashtra 422003'},
          {key:'Address',value:'Vani-Dindori road, Mhasrul, Nashik, Maharashtra 422003'}
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
      fetch(url+'/api/university',{ method:'GET'})
           .then(response=>{ return response.json()})
           .then((body)=>{
                  this.setState({details:body});
                    //alert(body.msg);
                  //  dispatch({type:'add_video',payload:body.video});
            })
           .catch(err=>alert(JSON.stringify(err)));


    }



render(){
	return <div>
			 <Navbar />
       <h2 style={{backgroundColor:"white",fontSize:"25pt",fontStyle:'bold',padding:"10px",marginTop:"0%"}}>University</h2>
       
       <br></br>
  <div class="table-responsive" style={{marginTop:'-10px'}}>
    <table class="table table-bordered table-hover">
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
}

}
