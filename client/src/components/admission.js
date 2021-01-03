import Navbar from './navbar';
import React from 'react';
import url from './url';
import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';
import '../css/Department_css.css';
import Footer from './footer';
import {Link} from 'react-router-dom';

export default class Admission extends React.Component
{
    constructor(props){
      super(props);
      this.state={ user:"",
                ug:{
                  type:[{name:'MBBS',
                  desc:'There are 200 admissions to MBBS course every year in the college. The admissions are on the basis of merit of All India NEET with constitutional reservations, done by the centralised process by Govt. of Maharashtra. The breakup of seats is 15% by DGHS GOI, of the remaining seats, 30% for State Level and 70% for Development board area (Rest of Maharashtra).There are about 1000 medical students studying in B. J. Govt. Medical College.'

                          },
                              {name:'Internship',
                              desc:'There are 200 admissions to MBBS course every year in the college. The admissions are on the basis of merit of All India NEET with constitutional reservations, done by the centralised process by Govt. of Maharashtra. The breakup of seats is 15% by DGHS GOI, of the remaining seats, 30% for State Level and 70% for Development board area (Rest of Maharashtra).There are about 1000 medical students studying in B. J. Govt. Medical College.'

                            },
                                    {name:'MBBS',
                                    desc:'There are 200 admissions to MBBS course every year in the college. The admissions are on the basis of merit of All India NEET with constitutional reservations, done by the centralised process by Govt. of Maharashtra. The breakup of seats is 15% by DGHS GOI, of the remaining seats, 30% for State Level and 70% for Development board area (Rest of Maharashtra).There are about 1000 medical students studying in B. J. Govt. Medical College.'
                                  },
                          {name:'MBBS',
                          desc:'There are 200 admissions to MBBS course every year in the college. The admissions are on the basis of merit of All India NEET with constitutional reservations, done by the centralised process by Govt. of Maharashtra. The breakup of seats is 15% by DGHS GOI, of the remaining seats, 30% for State Level and 70% for Development board area (Rest of Maharashtra).There are about 1000 medical students studying in B. J. Govt. Medical College.'
                        },
                                {name:'MBBS',
                                desc:'There are 200 admissions to MBBS course every year in the college. The admissions are on the basis of merit of All India NEET with constitutional reservations, done by the centralised process by Govt. of Maharashtra. The breakup of seats is 15% by DGHS GOI, of the remaining seats, 30% for State Level and 70% for Development board area (Rest of Maharashtra).There are about 1000 medical students studying in B. J. Govt. Medical College.'

                            },
                                      {name:'MBBS',
                                      desc:'There are 200 admissions to MBBS course every year in the college. The admissions are on the basis of merit of All India NEET with constitutional reservations, done by the centralised process by Govt. of Maharashtra. The breakup of seats is 15% by DGHS GOI, of the remaining seats, 30% for State Level and 70% for Development board area (Rest of Maharashtra).There are about 1000 medical students studying in B. J. Govt. Medical College.'

                                          }]
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
    }

     ugClick(){
       this.setState({show:{pg: {type:[],other:[]},ug: {type:this.state.ug.type,other:this.state.ug.other}}});
       document.getElementById('ug').style.display='block';
       document.getElementById('ugtype').style.display='block';
       document.getElementById('ugother').style.display='block';
       document.getElementById('pg').style.display='none';
       document.getElementById('pgtype').style.display='none';
       document.getElementById('pgother').style.display='none';
       sidenavbar();

     }

     ugOneClick(ind){
       this.setState({show:{pg: {type:[],other:[]},ug: {type:[this.state.ug.type[ind]],other:[]}}});
       document.getElementById('ug').style.display='block';
       document.getElementById('ugtype').style.display='block';
       document.getElementById('ugother').style.display='none';
       document.getElementById('pg').style.display='none';
       sidenavbar();
     }

     pgClick(){
       this.setState({show:{pg: {type:this.state.pg.type,other:this.state.pg.other},ug: {type:[],other:[]}}});
       document.getElementById('ug').style.display='none';
       document.getElementById('ugtype').style.display='none';
       document.getElementById('ugother').style.display='none';
       document.getElementById('pg').style.display='block';
       document.getElementById('pgtype').style.display='block';
       document.getElementById('pgother').style.display='block';
       sidenavbar();
     }

     pgOneClick(ind){
       this.setState({show:{pg: {type:[this.state.pg.type[ind]],other:[]},ug: {type:[],other:[]}}});
       document.getElementById('pg').style.display='block';
       document.getElementById('pgtype').style.display='block';
       document.getElementById('pgother').style.display='none';
       document.getElementById('ug').style.display='none';
       sidenavbar();
     }

     ugotherClick(){
       this.setState({show:{pg: {type:[],other:[]},ug: {type:[],other:this.state.ug.other}}});
       document.getElementById('ug').style.display='block';
       document.getElementById('ugtype').style.display='none';
       document.getElementById('ugother').style.display='block';
       document.getElementById('pg').style.display='none';
       sidenavbar();
     }

     pgotherClick(){
       this.setState({show:{pg: {type:[],other:this.state.pg.other},ug: {type:[],other:[]}}});
       document.getElementById('pg').style.display='block';
       document.getElementById('pgtype').style.display='none';
       document.getElementById('pgother').style.display='block';
       document.getElementById('ug').style.display='none';
       sidenavbar();
     }


      allClick(){
        this.setState({show:{pg: {type:this.state.pg.type,other:this.state.pg.other},ug: {type:this.state.pg.type,other:this.state.pg.other}}});
        document.getElementById('ug').style.display='block';
        document.getElementById('ugtype').style.display='block';
        document.getElementById('ugother').style.display='block';
        document.getElementById('pg').style.display='block';
        document.getElementById('pgtype').style.display='block';
        document.getElementById('pgother').style.display='block';
        sidenavbar();


      }

componentDidMount(){
  window.scrollTo(0,0);


  /*fetch(url+'/api/admission',{ method:'GET'})
       .then(response=>{ return response.json()})
       .then((body)=>{
              this.setState({ug:body.ug});
              this.setState({pg:body.pg});
              this.setState({show:{ug:body.ug,pg:body.pg}})
                //alert(body.msg);
              //  dispatch({type:'add_video',payload:body.video});
        })
       .catch(err=>alert(JSON.stringify(err)));*/


}

render(){
	return <div   id='mainBody'>
   <div>

			 <Navbar />

       <i style={{fontSize:'30px'}} class='fa fa-bars burger' onClick={sidenavbar}></i>

        <section class="New_Department row">
                <nav class="side_navigation col-lg-3 mysidenavbar">

                 <ul class='list-group sidenav_list' >
                   <li><Link class='list-group-item list-group-item-action active' data-toggle='list' href="#" onClick={this.allClick.bind(this)}>All</Link></li>
                   <li><Link class='list-group-item list-group-item-action' data-toggle='list' href="#" onClick={this.ugClick.bind(this)}>UG</Link></li>
                   <li>
                     <a href="#demo1" class='list-group-item list-group-item-action' data-toggle='list' data-toggle="collapse" class="dropdown-toggle">
                        Select
                      <div id="demo1"  class="collapse">
                       <ul class='list-group-item list-group-item-action'>
                        {
                          this.state.ug.type.map((res,ind)=>{
                            return  <li><Link  href='#' onClick={this.ugOneClick.bind(this,ind)} >{res.name}</Link></li>
                          })
                        }
                        </ul>
                        </div>
                      </a>
                    </li>
                    <li><Link class='list-group-item list-group-item-action' data-toggle="list" href="#"  onClick={this.ugotherClick.bind(this)}>Other Facilities</Link></li>
                       <li><Link href='#' class="list-group-item list-group-item-action" data-toggle="list" onClick={this.pgClick.bind(this)}>PG</Link></li>

                             <li><Link href="#" class='list-group-item list-group-item-action' data-toggle="list"   onClick={this.pgotherClick.bind(this)}>Other Facilities</Link></li>
                             <li>
                                   <a href="#demo" class='list-group-item list-group-item-action' data-toggle='list' data-toggle="collapse" class="dropdown-toggle">
                                   Select
                                   <div id="demo"  class="collapse">
                                     <ul class='list-group-item list-group-item-action'>
                                        {
                                        this.state.pg.type.map((res,ind)=>{
                                            return <li ><Link href='#' onClick={this.pgOneClick.bind(this,ind)} >{res.name}</Link></li>
                                        })
                                         }
                                     </ul>
                                    </div>
                                   </a>
                                   </li>

                      </ul>
                  </nav>
         <div class='col-lg-9' >
         <div class="section-title">
           <h2>Admission</h2>
           <p>Get all the details related to admissions here</p>
         </div>
         <center>

           <div id='ug'  style={{border:'2px solid blue',borderRadius:'10px',padding:'5px'}}>
           <center><button class='btn btn-primary'>UG</button></center>
             <br></br>

             <div id='ugtype'>
              <h5 style={{float:'left',color:"blue"}}> Available admissions</h5>
              <div class="table-responsive" >
                <table class="table table-bordered">
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
            <h5 style={{float:'left',color:"blue"}}>Other Facilities</h5>
            <div class="table-responsive">
              <table class="table table-bordered">
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
            <div id='pg' style={{border:'2px solid green',borderRadius:'10px',padding:'5px'}}>
            <center><button class='btn btn-success'>PG</button></center>
              <br></br>
              <div id='pgtype'>
                <h5 style={{color:"green"}}>Available admissions</h5>
                <div class="table-responsive">
                  <table class="table table-bordered">
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
               <h5 style={{float:'left',color:"green"}}>Other Facilities</h5>
               <div class="table-responsive">
                 <table class="table table-bordered">
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
            </center>

            </div>

       </section>




      <Footer/>

      </div>
	</div>
}


}
