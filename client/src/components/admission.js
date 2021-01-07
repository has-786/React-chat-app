import Navbar from './navbar';
import React from 'react';
import url from './url';
import '../css/Department_css.css';
import '../css/Homepage_Department.css';
import Header from './header';
import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';

import Footer from './footer';
import {Link} from 'react-router-dom';

export default class Admission extends React.Component
{
    constructor(props){
      super(props);
    //  this.searchbar=this.debounce();
    //  this.shooting=this.throttle();

      this.state={ user:"",
                ug:{
                  type:[{name:'MBBS Course',
                  desc:'There are 200 admissions to MBBS course every year in the college. The admissions are on the basis of merit of All India NEET with constitutional reservations, done by the centralised process by Govt. of Maharashtra. The breakup of seats is 15% by DGHS GOI, of the remaining seats, 30% for State Level and 70% for Development board area (Rest of Maharashtra). There are about 1000 medical students studying in B. J. Govt. Medical College.'
                        },
                              {name:'Internship',
                              desc:'Organised by department of PSM'
                            },
                          {
                            name:'Nursing course',
                            desc:'Every year 50 candidates are admitted to the B.Sc. Nursing course, which is of 3 and half years duration.'
                            }]
                  ,other:[{name:'Sanctioned intake capacity of various courses UG by the MCI',desc:'M.B.B.S. = 200 (MCI & MUHS).\nB.P.M.T. = 092 (M.U.H.S.).'},
                            {name:'University Affiliation and its Vice-Chancellor and registrar.',desc:'Maharashtra University of Health Science, Nahsik.\nV.C -Prof. Dr. Deelip Mhaisekar\nRegistrar - Dr. Kalidas D. Chavan'},
                            {name:'Status of recognition of all the courses.',desc:'MBBS - Recognized by MCI & MUHS.\nBPMT -  Recognized by MUHS.'},
                            {name:'Deputy Dean\n(in charge of Undergraduates)',desc:'Name  : Dr. Arun N. Kowale\nQualification : M. B. B. S. , M.D.(Physiology)\nTel: 020 26102296\n 020 26123872\nCell: 9960762233\nFax (Office) : 020-26126868\n020-26130991\nE-mail Id : ugbjgmcpune@gmail.com'},
                            {name:'Hostel Facilities',desc:''},
                            {name:'Total accommodation',desc:'(A) Boys hostel 208 rooms\n(B) Girls hostel 220 rooms'},
                            {name:'(A) At Girls hostel',desc:'1 Senior UG per room\n2 Junior UG per room'},
                            {name:'(B) At Boys hostel',desc:'2 Senior UG per room\n3 Junior UG per room'},
                            {name:'No. of Students (Capacity)',desc:'(A) Girls hostel: 302, (B) Boys hostel: 524'}

                          ]




                  },
                pg:{type:[{name:'MD/MS Courses',desc:"This college has postgraduate facilities in all major branches. Every year around 144 students are admitted for PG courses (MD/MS/Diploma). The distribution of seats is 25% by All India entrance exam, 25% in service Medical officer's quota and remaining by State Level Enterance Exam."},
                {name:'DM/M.Ch. Super Speciality',desc:'it is availbale in cardiophoric surgery. Annual admissions is 1, through all India competitive exam.'},
                {name:'DMLT COURSE',desc:'The College conducts DMLT course for training technicians. There are 10+6 seats and the duration of course is one and half years.'},
                {name:'INDIRA GANDHI NATIONAL OPEN UNIVERSITY (IGNOU) COURSES',desc:''},
                {name:'PGDMCH- PG Diploma in Maternal & Child Health',desc:''},
                {name:'PGDGM- PG Diploma in Geriatric Medicine',desc:''}]
                  ,other:[{name:'Anatomy',appeared:1,passed:0,pass_per:0},
                      {name:'Biochemistry',appeared:4,passed:4,pass_per:100},
                      {name:'Physiology',appeared:4,passed:3,pass_per:75},
                      {name:'Microbiology',appeared:4,passed:4,pass_per:100},
                      {name:'Dip. Anatomy',appeared:1,passed:0,pass_per:0},
                          {name:'Dip. Biochemistry',appeared:4,passed:4,pass_per:100},
                          {name:'Dip. Physiology',appeared:4,passed:3,pass_per:75},
                          {name:'Dip. Microbiology',appeared:4,passed:4,pass_per:100}]
                  },

                  show:{
                    ug:{type:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                    {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                    ,other:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                              {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                    },
                    pg:{type:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                    {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                    ,other:[
                      {name:'Anatomy',appeared:1,passed:0,pass_per:0},
                          {name:'Biochemistry',appeared:4,passed:4,pass_per:100},
                          {name:'Physiology',appeared:4,passed:3,pass_per:75},
                          {name:'Microbiology',appeared:4,passed:4,pass_per:100},
                          {name:'Dip. Anatomy',appeared:1,passed:0,pass_per:0},
                              {name:'Dip. Biochemistry',appeared:4,passed:4,pass_per:100},
                              {name:'Dip. Physiology',appeared:4,passed:3,pass_per:75},
                              {name:'Dip. Microbiology',appeared:4,passed:4,pass_per:100}
                        ]
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




    /*     debounce()
         {
              let timer=0,count=0;
              return function(){
                  ++count;
                  clearTimeout(timer);
                  timer=setTimeout(()=>{
                            console.log('debounce',count);
                        },1000);
                }
          }

          throttle(){
            let flag=true,count=0;
            return function(){
              ++count;
              if(flag)
              {
                flag=false;
                console.log('throttle',count);
                setTimeout(()=>{  flag=true;},1000);
              }
            }
          }
*/



componentDidMount(){
  window.scrollTo(0,0);
  this.setState({show:{ug:this.state.ug,pg:this.state.pg}});
fetch(url+'/api/admission',{ method:'GET'})
       .then(response=>{ return response.json()})
       .then((body)=>{
              this.setState({ug:body.ug});
              this.setState({pg:body.pg});
              this.setState({show:{ug:body.ug,pg:body.pg}})
                //alert(body.msg);
              //  dispatch({type:'add_video',payload:body.video});
        })
       .catch(err=>{});


}

render(){
	return <div   id='mainBody'>
   <div>
      <Header />
			 <Navbar />



        <section class="New_Department row">
        <i style={{fontSize:'30px'}} class='fa fa-bars burger' onClick={sidenavbar}></i>

                <nav class="side_navigation col-lg-3 mysidenavbar">

                 <ul class='list-group sidenav_list' >
                   <li>
                     <Link class='list-group-item list-group-item-action active' data-toggle='list' href="#" onClick={this.allClick.bind(this)}>
                      <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;All
                     </Link>
                   </li>
                   <li>
                    <Link class='list-group-item list-group-item-action' data-toggle='list' href="#" onClick={this.ugClick.bind(this)}>
                      <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;UG
                    </Link>
                   </li>
                   <li>
                   <a style={{marginLeft:'1px',paddingLeft:'30px',backgroundColor:'white'}} href="#demo1"  class='list-group-item list-group-item-action' data-toggle='list' data-toggle="collapse" class="dropdown-toggle">
                            Select
                      </a>
                   </li>
                        {
                          this.state.ug.type.map((res,ind)=>{
                            return  <li id='demo1' class='collapse'>
                                      <Link href='#' style={{paddingLeft:'30px'}} class="list-group-item list-group-item-action" data-toggle="list"  onClick={this.ugOneClick.bind(this,ind)} >
                                        <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;{res.name}
                                      </Link>
                                    </li>
                          })
                        }
                    <li >
                      <Link style={{paddingLeft:'30px'}} class='list-group-item list-group-item-action' data-toggle="list" href="#"  onClick={this.ugotherClick.bind(this)}>
                        <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;Important Details
                      </Link>
                    </li>

                    <li>
                      <Link href='#' class="list-group-item list-group-item-action" data-toggle="list" onClick={this.pgClick.bind(this)}>
                        <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;PG
                      </Link>
                     </li>
                    <li>
                    <a style={{marginLeft:'1px',paddingLeft:'30px',backgroundColor:'white'}} href="#demo2"  class='list-group-item list-group-item-action' data-toggle='list' data-toggle="collapse" class="dropdown-toggle">
                                   Select
                        </a>
                    </li>
                        {
                              this.state.pg.type.map((res,ind)=>{
                                      return <li id="demo2" class="collapse">
                                              <Link href='#'style={{paddingLeft:'30px'}} class="list-group-item list-group-item-action" data-toggle="list" onClick={this.pgOneClick.bind(this,ind)} >
                                                <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;{res.name}
                                              </Link>
                                             </li>
                                    })
                        }
                      <li >
                        <Link  style={{paddingLeft:'30px'}} href="#" class='list-group-item list-group-item-action' data-toggle="list"   onClick={this.pgotherClick.bind(this)}>
                          <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;Exam Statistics
                        </Link>
                      </li>
                    </ul>
                  </nav>
         <article class='col-lg-9' >
         <header id="article_heading">Admission</header>

           <div id='ug'  style={{border:'2px solid #003a9b',borderRadius:'10px',padding:'5px',marginBottom:'15px'}}>
           <center><h3 style={{color:'black'}}>UG</h3></center>
             <br></br>

             <div id='ugtype'>
              <h5 style={{float:'left',color:"#003a9b"}}> Available admissions</h5>
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
            <div id='ugother'>
            <h5 style={{float:'left',color:"#003a9b"}}>Important Details</h5>
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

            <div id='pg' style={{border:'2px solid green',borderRadius:'10px',padding:'5px'}}>
            <center><h3 style={{color:'black'}}>PG</h3></center>
              <br></br>
              <div id='pgtype'>
                <h5 style={{float:'left',color:"green"}}>Available admissions</h5>
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
              <div id='pgother'>
               <h5 style={{float:'left',color:"green"}}>Exam Statistics</h5>
               <div class="table-responsive">
                 <table class="table table-bordered">
                   <thead>
                      <tr>
                        <th>Subject</th>
                        <th>No. appeared</th>
                        <th>No. passed</th>
                        <th>College Pass %</th>

                      </tr>
                   </thead>
                   <tbody>
                      {
                        this.state.show.pg.other.map(r=>{
                           return <tr>
                              <td>{r.name}</td>
                              <td>{r.appeared}</td>
                              <td>{r.passed}</td>
                              <td>{r.pass_per}</td>
                            </tr>
                        })
                      }
                   </tbody>
                </table>
                </div>
               </div>
               </div>

          </article>
          </section>


      <Footer/>

      </div>
	</div>
}


}
