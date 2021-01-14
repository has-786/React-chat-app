import Navbar from './navbar';
import React from 'react';
import url from './url';
import {Link} from 'react-router-dom';
import '../css/home.css';
import Footer from './footer';
import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';
import Header from './header';
import '../css/Department_css.css';

export default class Result extends React.Component
{
    constructor(props){
      super(props);

      this.state={ user:"",
                  arr:[{type:'UG',link:'/uploads/UGresults.zip'},{type:'PG',link:'/uploads/UGresults.zip'},
                {type:'BSC IN PMT Result Winter 2018',link:"/uploads/BSC%20IN%20PMT%20Result%20Winter%202018.pdf"},
                {type:'Result MBBS Winter 2018',link:"/uploads/Result%20MBBS%20Winter%202018.pdf"}],
                  show:{type:"",link:""}
                }

    }


    componentDidMount(){
      window.scrollTo(0,0);

      this.sidenavbar=sidenavbar;
     fetch(url+'/api/result',{ method:'GET'})
           .then(response=>{ return response.json()})
           .then((body)=>{
                  this.setState({arr:body});
                    //alert(body.msg);
                  //  dispatch({type:'add_video',payload:body.video});
            })
           .catch(err=>{});

      this.setState({show:{type:this.state.arr[0].type,link:this.state.arr[0].link}});
    }




     linkOneClick(ind){
       if(this.state.arr[ind]){
       this.setState({show:{type:this.state.arr[ind].type,link:this.state.arr[ind].link}});
       }
     }

render(){
	return <div   id='mainBody'>
  <Header />

			 <Navbar />


               <section class="New_Department row" onClick={sidenavbar}>
               <i style={{fontSize:'30px'}} class='fa fa-bars burger' ></i>

                 <nav class="side_navigation col-lg-3 mysidenavbar">

                        <ul class='list-group sidenav_list' >
                        {
                            this.state.arr.map((res,ind)=>{
                             return  <li>
                                      <a href='#' class='list-group-item list-group-item-action' data-toggle='list'  onClick={this.linkOneClick.bind(this,ind)} >
                                        <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;{res.type}
                                      </a>
                                     </li>
                           })
                         }
                         </ul>
                    </nav>
               <article class='col-lg-9' >
                <header id="article_heading">Results</header>

               <section class='jumbotron'>
                     <div class="container">
                        <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                            <p class="lead mb-0" style={{fontSize:'30px',fontWeight:"bold"}}>Click on the link below to check your result</p><br></br><br></br>
                            <center><a href={url+this.state.show.link} target="_blank" class='btn btn-primary'> Results of {this.state.show.type}</a></center>
                        </div>
                      </div>
              </section>
            </article>
      </section>
      <Footer/>
	</div>
}

}
