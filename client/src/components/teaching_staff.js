import React from 'react';
import Navbar from './navbar'
import "../css/New_Department.css"
import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';
import {Link} from 'react-router-dom';
import Header from './header';
import '../css/teaching_staff.css';

export default class New_Department extends React.Component {
    constructor(props){
        super(props);

        this.state={ user:"",

              AnatomyDept:[
                  {
                      name:'Professor',
                      events:[
                          {sr_No : "1", officer_name:"Dr. B. H. Baheti", designation:"Professor and HOD",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "2", officer_name:"Dr.  A.D.Patil", designation:"Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9423572970"},

                      ]
                  },
                  {
                      name:'Associate Professor',
                      events:[
                          {sr_No : "1", officer_name:"Dr.A.P.Gaikwad", designation:"Associate Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9422084905"},
                          {sr_No : "2", officer_name:"Dr.S.A.Rokade", designation:"Associate Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "3", officer_name:"Dr.Vaishali M Paranjape", designation:"Associate Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "4", officer_name:"Dr Mahesh Taru", designation:"Associate Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},

                      ]
                      },
                      {
                      name:'Assistant Professor',
                      events:[
                          {sr_No : "1", officer_name:"Dr. Swati  Pandhre", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "2", officer_name:"Dr.  Reshma Shinde", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "3", officer_name:"Dr. Pratima Ahire", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "4", officer_name:"Dr. Sarika Kate", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "5", officer_name:"Dr. Sonali Khankare", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "6", officer_name:"Dr. Sneha M. Jadhav", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "7", officer_name:"Dr. Smita  Nomulwar", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"}

                          ]
                      }
              ],
              PhysiologyDept:[
                  {
                      name:'Professor',
                      events:[
                          {sr_No : "1", officer_name:"Dr. Shweta  Pandhre", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "2", officer_name:"Dr.  Reshma Shinde", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "3", officer_name:"Dr. Pratima Ahire", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "4", officer_name:"Dr. Sarika Kate", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "5", officer_name:"Dr. Sonali Khankare", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "6", officer_name:"Dr. Sneha M. Jadhav", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "7", officer_name:"Dr. Smita  Nomulwar", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"}

                      ]
                  },
                  {
                      name:'Associate Professor',
                      events:[
                          {sr_No : "1", officer_name:"Dr. Swati  Pandhre", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "2", officer_name:"Dr.  Reshma Shinde", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "3", officer_name:"Dr. Pratima Ahire", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "4", officer_name:"Dr. Sarika Kate", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "5", officer_name:"Dr. Sonali Khankare", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "6", officer_name:"Dr. Sneha M. Jadhav", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "7", officer_name:"Dr. Smita  Nomulwar", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"}

                      ]
                      },
                      {
                      name:'Assistant Professor',
                      events:[
                          {sr_No : "1", officer_name:"Dr. Swati  Pandhre", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "2", officer_name:"Dr.  Reshma Shinde", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "3", officer_name:"Dr. Pratima Ahire", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "4", officer_name:"Dr. Sarika Kate", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "5", officer_name:"Dr. Sonali Khankare", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "6", officer_name:"Dr. Sneha M. Jadhav", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
                          {sr_No : "7", officer_name:"Dr. Smita  Nomulwar", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"}

                          ]
                      },

        ],
        show:{
          AnatomyDept:[{name:'',events:[{head:'',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'}]}],
          PhysiologyDept:[{name:'',events:[{subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'}]}],

        }
      }
  }

        componentDidMount(){
          window.scrollTo(0,0);

          this.setState({show:{AnatomyDept:this.state.AnatomyDept,PhysiologyDept:this.state.PhysiologyDept}})

        /*  fetch(url+'/api/academicActivities',{ method:'GET'})
               .then(response=>{ return response.json()})
               .then((body)=>{
                      this.setState({deptsData:body.deptsData});
                      this.setState({guestsData:body.guestsData});
                      this.setState({otherData:body.otherData});
                      this.setState({show:{deptsData:this.state.deptsData,guestsData:this.state.guestsData,otherData:this.state.otherData}});

                        //alert(body.msg);
                      //  dispatch({type:'add_video',payload:body.video});
                })
               .catch(err=>alert(JSON.stringify(err)));
  */



        }

       anatomyClick(){
         this.setState({show:{AnatomyDept:this.state.AnatomyDept,PhysiologyDept:[{name:null,events:[]}]}});
         document.getElementById('anatomy').style.display='block';
         document.getElementById('physiology').style.display='none';

         sidenavbar();

        }

       anatomyOneClick(ind){
         this.setState({show:{AnatomyDept:[this.state.AnatomyDept[ind]],PhysiologyDept:[{name:null,events:[]}]}});
         document.getElementById('anatomy').style.display='block';
         document.getElementById('physiology').style.display='none';

         sidenavbar();
       }

       physiologyClick(){
         this.setState({show:{PhysiologyDept:this.state.PhysiologyDept,AnatomyDept:[{name:null,events:[]}]}});
         document.getElementById('anatomy').style.display='none';
         document.getElementById('physiology').style.display='block';

         sidenavbar();
       }

       physiologyOneClick(ind){
         this.setState({show:{PhysiologyDept:[this.state.PhysiologyDept[ind]],AnatomyDept:[{name:null,events:[]}]}});
         document.getElementById('anatomy').style.display='none';
         document.getElementById('physiology').style.display='block';

      //   this.closeNav();
           sidenavbar();
       }



        allClick(){
          this.setState({show:{PhysiologyDept:this.state.PhysiologyDept,AnatomyDept:this.state.AnatomyDept}});
          document.getElementById('anatomy').style.display='block';
          document.getElementById('physiology').style.display='block';

      //    this.closeNav();
        }
    render(){
        return (<div id='mainBody'>

          <Header />
          <Navbar/>
          <i style={{fontSize:'30px'}} class='fa fa-bars burger' onClick={sidenavbar}></i>
          <i style={{fontSize:'10px',opacity:0}} class='fa fa-bars burger'  onClick={sidenavbar}></i>

                      <section class="New_Department row">

                <nav class="side_navigation col-lg-3 mysidenavbar">

                    <ul class="list-group sidenav_list">
                        <li><Link  class='list-group-item list-group-item-action active' data-toggle='list' href="#" onClick={this.allClick.bind(this)}>All</Link></li>
                        <li><Link  class='list-group-item list-group-item-action' data-toggle='list' href="#" onClick={this.anatomyClick.bind(this)}>Department of Anatomy</Link></li>
                        <li>
                            <a  style={{paddingLeft:'30px'}} href="#demo1" class='list-group-item list-group-item-action' data-toggle='list' data-toggle="collapse" class="dropdown-toggle">
                                Select Category
                                <div id="demo1"  class="collapse">
                                    <ul class="list-group-item list-group-item-action" >
                                    {
                                        this.state.AnatomyDept.map((res,ind)=>{
                                        return  <li><Link href='#' onClick={this.anatomyOneClick.bind(this,ind)} >{res.name}</Link></li>
                                        })
                                    }
                                    </ul>
                                </div>
                            </a>
                        </li>

                        <li><Link  class='list-group-item list-group-item-action' data-toggle="list" href="#" onClick={this.physiologyClick.bind(this)}>Department of Physiology</Link></li>
                         <li>
                            <a style={{paddingLeft:'30px'}} href="#demo" class='list-group-item list-group-item-action' data-toggle='list' data-toggle="collapse" class="dropdown-toggle">
                                Select Category
                                <div id="demo"  class="collapse">
                                    <ul class="list-group-item list-group-item-action" >
                                    {
                                        this.state.PhysiologyDept.map((res,ind)=>{
                                        return <li><Link href='#' class='nav-link' onClick={this.physiologyOneClick.bind(this,ind)} >{res.name}</Link></li>})
                                    }
                                    </ul>
                                </div>
                            </a>

                        </li>

                    </ul>
                </nav>
                <div class="col-lg-9">
                    <header id="article_heading">Teaching Staff</header>
                    <br/>
                  <h3>B. J. Government Medical College, Pune</h3>
                  <br/>
                    <center>

                        <br></br>
                        <div class="tab-content">
                            <div id="anatomy"  >
                            <header id="article_heading">Department of Anatomy</header>
                                 <br></br>

                                <div>
                                {
                                    this.state.show.AnatomyDept.map((res)=>{
                                        return <div>
                                            <h5 style={{color:'blue'}}>{res.name}</h5>
                                            <div class="table-responsive">
                                                <table class="table table-bordered table-hover table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Sr.No.</th>
                                                            <th>Name</th>
                                                            <th>Designation</th>
                                                            <th>Location</th>
                                                            <th>Contact</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        res.events.map(r=>{
                                                        return    <tr>
                                                            <td>{r.sr_No}</td>
                                                            <td>{r.officer_name}</td>
                                                            <td>{r.designation}</td>
                                                            <td>{r.location}</td>
                                                            <td>{r.contact}</td>
                                                            </tr>
                                                        })
                                                    }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    })
                                }
                                </div>
                            </div>
                        </div>

                        <div id='physiology' >
                        <header id="article_heading">Department of Physiology</header>
                            <div>
                                {
                                    this.state.show.PhysiologyDept.map((res)=>{
                                        return <div>
                                            <h5 style={{color:'green'}}>{res.name}</h5>
                                            <div class="table-responsive">
                                                <table class="table table-bordered table-hover table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Sr.No.</th>
                                                            <th>Name</th>
                                                            <th>Designation</th>
                                                            <th>Location</th>
                                                            <th>Contact</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        res.events.map(r=>{
                                                        return <tr>
                                                            <td>{r.sr_No}</td>
                                                            <td>{r.officer_name}</td>
                                                            <td>{r.designation}</td>
                                                            <td>{r.location}</td>
                                                            <td>{r.contact}</td>
                                                            </tr>
                                                        })
                                                    }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>


                        </div>


                    </center>
                </div>
        </section>



        </div>)
    }
}
