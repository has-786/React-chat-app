import Navbar from './navbar';
import React from 'react';
import url from './url';
import {Link} from 'react-router-dom';
import '../css/home.css';
import Footer from './footer';

export default class Result extends React.Component
{
    constructor(props){
      super(props);
      this.state={ user:"",
                  arr:[{type:'UG',link:'https://ug'},{type:'PG',link:'https://pg'}
                ,{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'}
              ,{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'}
            ,{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'}],
                  show:{type:"",link:""}
                }
                this.openNav=this.openNav.bind(this);
                this.closeNav=this.closeNav.bind(this);
    }


    componentDidMount(){
    /*  fetch(url+'/api/result',{ method:'GET'})
           .then(response=>{ return response.json()})
           .then((body)=>{
                  this.setState({arr:body});
                    //alert(body.msg);
                  //  dispatch({type:'add_video',payload:body.video});
            })
           .catch(err=>alert(JSON.stringify(err)));
*/
      this.setState({show:{type:this.state.arr[0].type,link:this.state.arr[0].link}});
    }


      openNav() {
       document.getElementById("mySidenav").style.width = "250px";
       document.getElementById("main").style.marginLeft = "250px";
     }

      closeNav() {
       document.getElementById("mySidenav").style.width = "0";
       document.getElementById("main").style.marginLeft= "0";
     }



     linkOneClick(ind){
       this.setState({show:{type:this.state.arr[ind].type,link:this.state.arr[ind].link}});
       //this.closeNav();
     }

render(){
	return <div>
			 <Navbar />

       <section id="departments" class="departments">
         <div class="container">

           <div class="section-title">
             <h2>Results</h2>
             <p>Check out the results</p>
           </div>

       <div class='row'>
            <div class='col-lg-2'>
              <ul class='nav nav-tabs flex-column'>
               {
                  this.state.arr.map((res,ind)=>{
                   return  <li class='nav-item'><Link href='#' class='nav-link' onClick={this.linkOneClick.bind(this,ind)} >{res.type}</Link></li>
                 })
               }
               </ul>
            </div>

            <div class='col-lg-10'>
               <section class='jumbotron'>
                     <div class="container">
                        <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                            <p class="lead mb-0" style={{fontSize:'30px',fontWeight:"bold"}}>Click on the link below to check your result</p><br></br><br></br>
                            <center><a href={this.state.show.link} target="_blank" class='btn btn-primary'> Results of {this.state.show.type}</a></center>
                        </div>
                      </div>
                </section>
              </div>
          </div>
        </div>
      </section>
      <Footer/>
	</div>
}

}
