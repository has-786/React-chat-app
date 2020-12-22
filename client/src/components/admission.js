import Navbar from './navbar';
import React from 'react';
import url from './url';
import '../css/home.css';
import {Link} from 'react-router-dom';

export default class Admission extends React.Component
{
    constructor(props){
      super(props);
      this.state={ user:"",
                ug:{type:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                          {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                  ,other:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                            {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                  },
                pg:{type:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                  ,other:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                            {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                  },

                  show:{
                    ug:{type:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                    {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                    ,other:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                              {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                    },
                    pg:{type:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                    {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                    ,other:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                              {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                    }
                  }
                }
                this.openNav=this.openNav.bind(this);
                this.closeNav=this.closeNav.bind(this);
    }



      openNav() {
       document.getElementById("mySidenav").style.width = "250px";
       document.getElementById("main").style.marginLeft = "250px";
     }

      closeNav() {
       document.getElementById("mySidenav").style.width = "0";
       document.getElementById("main").style.marginLeft= "0";
     }
     ugClick(){
       this.setState({show:{pg: {type:[],other:[]},ug: {type:this.state.ug.type,other:this.state.ug.other}}});
       document.getElementById('ug').style.display='block';
       document.getElementById('ugtype').style.display='block';
       document.getElementById('ugother').style.display='block';
       document.getElementById('pg').style.display='none';
       document.getElementById('pgtype').style.display='none';
       document.getElementById('pgother').style.display='none';
    //   this.closeNav();
     }

     ugOneClick(ind){
       this.setState({show:{pg: {type:[],other:[]},ug: {type:[this.state.ug.type[ind]],other:[]}}});
       document.getElementById('ug').style.display='block';
       document.getElementById('ugtype').style.display='block';
       document.getElementById('ugother').style.display='none';
       document.getElementById('pg').style.display='none';
    //   this.closeNav();
     }

     pgClick(){
       this.setState({show:{pg: {type:this.state.pg.type,other:this.state.pg.other},ug: {type:[],other:[]}}});
       document.getElementById('ug').style.display='none';
       document.getElementById('ugtype').style.display='none';
       document.getElementById('ugother').style.display='none';
       document.getElementById('pg').style.display='block';
       document.getElementById('pgtype').style.display='block';
       document.getElementById('pgother').style.display='block';
  //     this.closeNav();
     }

     pgOneClick(ind){
       this.setState({show:{pg: {type:[this.state.pg.type[ind]],other:[]},ug: {type:[],other:[]}}});
       document.getElementById('pg').style.display='block';
       document.getElementById('pgtype').style.display='block';
       document.getElementById('pgother').style.display='none';
       document.getElementById('ug').style.display='none';
    //   this.closeNav();
     }

     ugotherClick(){
       this.setState({show:{pg: {type:[],other:[]},ug: {type:[],other:this.state.ug.other}}});
       document.getElementById('ug').style.display='block';
       document.getElementById('ugtype').style.display='none';
       document.getElementById('ugother').style.display='block';
       document.getElementById('pg').style.display='none';
    //   this.closeNav();
     }

     pgotherClick(){
       this.setState({show:{pg: {type:[],other:this.state.pg.other},ug: {type:[],other:[]}}});
       document.getElementById('pg').style.display='block';
       document.getElementById('pgtype').style.display='none';
       document.getElementById('pgother').style.display='block';
       document.getElementById('ug').style.display='none';
  //     this.closeNav();
     }


      allClick(){
        this.setState({show:{pg: {type:this.state.pg.type,other:this.state.pg.other},ug: {type:this.state.pg.type,other:this.state.pg.other}}});
        document.getElementById('ug').style.display='block';
        document.getElementById('ugtype').style.display='block';
        document.getElementById('ugother').style.display='block';
        document.getElementById('pg').style.display='block';
        document.getElementById('pgtype').style.display='block';
        document.getElementById('pgother').style.display='block';
    //    this.closeNav();
      }


componentDidMount(){
/*  fetch(url+'/api/admission',{ method:'GET'})
       .then(response=>{ return response.json()})
       .then((body)=>{
              this.setState({ug:body.ug});
              this.setState({pg:body.pg});
              this.setState({show:{ug:body.ug,pg:body.pg}})
                //alert(body.msg);
              //  dispatch({type:'add_video',payload:body.video});
        })
       .catch(err=>alert(JSON.stringify(err)));
*/

}

render(){
	return <div>
   <div id="mainBody">

			 <Navbar />


       <section id="departments" class="departments">
         <div class="container">

           <div class="section-title">
             <h2>Admission</h2>
             <p>Get all the details related to admissions here</p>
           </div>
       <div class='row'>
         <div class='col-lg-2'>
         <ul class='nav nav-tabs flex-column'>
           <li class='nav-item'><Link class="nav-link"  href="#" onClick={this.allClick.bind(this)}>All</Link></li>
           <li class="nav-item"><Link class="nav-link" href="#" onClick={this.ugClick.bind(this)}>UG</Link></li>
           <li class="nav-item">
             <Link href="#demo1" data-toggle="collapse" class="dropdown-toggle nav-link">
               <ul class="dropdown-menu nav nav-tabs flex-column"  id="demo1" class="collapse" >
                {
                  this.state.ug.type.map((res,ind)=>{
                    return  <li class="nav-item"><Link class="nav-link" href='#' onClick={this.ugOneClick.bind(this,ind)} >{res.name}</Link></li>
                  })
                }
                </ul>
             </Link>
            </li>
            <li>
              <ul>
              <li class="nav-item"><Link href="#" class="nav-link" onClick={this.ugotherClick.bind(this)}>Other Facilities</Link></li>
              </ul>
            </li>
               <li class="nav-item"><Link href='#' class="nav-link" onClick={this.pgClick.bind(this)}>PG</Link></li>
                     <li class="nav-item">
                     <a href="#demo2" data-toggle="collapse" class="dropdown-toggle nav-link">
                       <ul class="dropdown-menu nav nav-tabs flex-column"  id="demo2" class="collapse" >
                          {
                          this.state.pg.type.map((res,ind)=>{
                              return <li><Link href='#' class="nav-link" onClick={this.pgOneClick.bind(this,ind)} >{res.name}</Link></li>
                          })
                           }
                       </ul>
                     </a>
                     </li>
                     <li>
                    <ul>
                     <li  class="nav-item"><Link href="#" class="nav-link" onClick={this.pgotherClick.bind(this)}>Other Facilities</Link></li>
                    </ul>
                    </li>
              </ul>
         </div>

         <div class='col-lg-10'>
           <div id='ug'  style={{backgroundColor:'beige',border:'2px solid blue',borderRadius:'10px',padding:'5px'}}>
           <center><button class='btn btn-primary'>UG</button></center>
             <br></br>
             <div id='ugtype'>
              <h5 style={{color:"blue"}}> Available admissions</h5>
              <div class="table-responsive">
                <table class="table table-bordered table-hover table-striped">
                  <thead>
                     <tr>
                       <th>Course Name</th>
                       <th>Details</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                       this.state.show.ug.type.map(r=>{
                          return <tr>
                             <td>{r.name}</td>
                             <td>{r.desc}</td>
                           </tr>
                       })
                     }
                  </tbody>
               </table>
               </div>
            </div>
            <br></br>
            <div id='ugother'>
            <h5 style={{color:"blue"}}>Other Facilities</h5>
            <div class="table-responsive">
              <table class="table table-bordered table-hover">
                <thead>
                   <tr>
                     <th>Name</th>
                     <th>Details</th>
                   </tr>
                </thead>
                <tbody>
                   {
                     this.state.show.ug.other.map(r=>{
                        return <tr>
                           <td>{r.name}</td>
                           <td>{r.desc}</td>
                         </tr>
                     })
                   }
                </tbody>
             </table>
             </div>
            </div>
          </div>


            <br></br><br></br><br></br><br></br>
            <div id='pg' style={{backgroundColor:'beige',border:'2px solid green',borderRadius:'10px',padding:'5px'}}>
            <center><button class='btn btn-success'>PG</button></center>
              <br></br>
              <div id='pgtype'>
                <h5 style={{color:"green"}}>Available admissions</h5>
                <div class="table-responsive">
                  <table class="table table-bordered table-hover table-striped">
                    <thead>
                       <tr>
                         <th>Course Name</th>
                         <th>Details</th>
                       </tr>
                    </thead>
                    <tbody>
                       {
                         this.state.show.pg.type.map(r=>{
                            return <tr>
                               <td>{r.name}</td>
                               <td>{r.desc}</td>
                             </tr>
                         })
                       }
                    </tbody>
                 </table>
                 </div>
              </div>
              <br></br><br></br>
              <div id='pgother'>
               <h5 style={{color:"green"}}>Other Facilities</h5>
               <div class="table-responsive">
                 <table class="table table-bordered table-hover table-striped">
                   <thead>
                      <tr>
                        <th>Name</th>
                        <th>Details</th>
                      </tr>
                   </thead>
                   <tbody>
                      {
                        this.state.show.pg.other.map(r=>{
                           return <tr>
                              <td>{r.name}</td>
                              <td>{r.desc}</td>
                            </tr>
                        })
                      }
                   </tbody>
                </table>
                </div>
               </div>
            </div>



         </div>

       </div>
       </div>
       </section>






    </div>

	</div>
}

}
