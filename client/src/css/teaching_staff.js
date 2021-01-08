import React from 'react';
import Navbar from './navbar'
import "../css/New_Department.css"
import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';
import {Link} from 'react-router-dom';
import Header from './header';
import '../css/teaching_staff.css';
import url from './url';
export default class teaching_staff extends React.Component {
    constructor(props){
        super(props);

        this.state={  user:"",

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
                    {sr_No : "2", officer_name:"Dr.S.A.Rokade", designation:"Associate Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9623095011"},
                    {sr_No : "3", officer_name:"Dr.Vaishali M Paranjape", designation:"Associate Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9673998572"},
                    {sr_No : "4", officer_name:"Dr Mahesh Taru", designation:"Associate Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9960288940"},

                ]
                },
                {
                name:'Assistant Professor',
                events:[
                    {sr_No : "1", officer_name:"Dr. Swati  Pandhre", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9890618736"},
                    {sr_No : "2", officer_name:"Dr.  Reshma Shinde", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9545707000"},
                    {sr_No : "3", officer_name:"Dr. Pratima Ahire", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"8983774498"},
                    {sr_No : "4", officer_name:"Dr. Sarika Kate", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"8983715523"},
                    {sr_No : "5", officer_name:"Dr. Sonali Khankare", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9223414498"},
                    {sr_No : "6", officer_name:"Dr. Sneha M. Jadhav", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"8956344037"},
                    {sr_No : "7", officer_name:"Dr. Smita  Nomulwar", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"7276593212"}

                    ]
                }
        ],
        PhysiologyDept:[
            {
                name:'Professor',
                events:[
                    {sr_No : "1", officer_name:"Dr. Nila Vijay Rajan Aundhkar", designation:"Professor",location:"Department of Physiology , B. J. Govt. Medical College Pune", contact:"9823533226"},
                    {sr_No : "2", officer_name:"Dr. A. N. Kowale", designation:"Professor",location:"Department of Physiology , B. J. Govt. Medical College Pune", contact:"9960762233"},

                ]
            },
            {
                name:'Associate Professor',
                events:[
                    {sr_No : "1", officer_name:"Dr.Varsha Sarode", designation:"Associate Professor",location:"Department of Physiology , B. J. Govt. Medical College Pune", contact:"9850058980"},
                    {sr_No : "2", officer_name:"Dr.Sneha Sathe", designation:"Associate Professor",location:"Department of Physiology , B. J. Govt. Medical College Pune", contact:"9822057150"},
                    {sr_No : "3", officer_name:"Dr.Sangeeta V. Deshpande", designation:"Associate Professor",location:"Department of Physiology , B. J. Govt. Medical College Pune", contact:"9822530397"},
                    {sr_No : "4", officer_name:"Dr. Chandan Kumar Dey", designation:"Associate Professor",location:"Department of Physiology , B. J. Govt. Medical College Pune", contact:""},
                    {sr_No : "5", officer_name:"Dr.Sangeeta Gawali", designation:"Associate Professor",location:"Department of Physiology , B. J. Govt. Medical College Pune", contact:"9860005493"},
                    {sr_No : "6", officer_name:"Dr.S. U. Mungal", designation:"Associate Professor",location:"Department of Physiology , B. J. Govt. Medical College Pune", contact:""},

                ]
                },
                {
                name:'Assistant Professor',
                events:[
                    {sr_No : "1", officer_name:"Dr. Veena  Dubayya Shreeram", designation:"Assistant Professor",location:"Department of Physiology , B. J. Govt. Medical College Pune", contact:"9158983400"},
                    {sr_No : "2", officer_name:"Dr. Anil Waghmare", designation:"Assistant Professor",location:"Department of Physiology , B. J. Govt. Medical College Pune", contact:""},
                    {sr_No : "3", officer_name:"Dr.Swati Shaha", designation:"Assistant Professor",location:"Department of Physiology , B. J. Govt. Medical College Pune", contact:"8806661282"},
                    {sr_No : "4", officer_name:"Dr.Anupam Khare", designation:"Assistant Professor",location:"Department of Physiology , B. J. Govt. Medical College Pune", contact:"9890656112"},
                    {sr_No : "5", officer_name:"Dr.Harshada Kambale", designation:"Assistant Professor",location:"Department of Physiology , B. J. Govt. Medical College Pune", contact:"8554884327"},
                    {sr_No : "6", officer_name:"Dr. Ghhaya Ahire", designation:"Assistant Professor",location:"Department of Physiology , B. J. Govt. Medical College Pune", contact:"9823359126"},

                    ]
                },

  ],
  show:{
    AnatomyDept:[{name:'',events:[{sr_No:'',officer_name:'Dr. Swati',designation:'Professor',location:'20/Dept/2020',Contact:'9999'}]}],
    PhysiologyDept:[{name:'',events:[{sr_No:'',officer_name:'Dr. Swati',designation:'Professor',location:'20/Dept/2020',Contact:'9999'}]}]

  }
}

  }

        componentDidMount(){
            window.scrollTo(0,0);

            this.setState({show:{AnatomyDept:this.state.AnatomyDept,PhysiologyDept:this.state.PhysiologyDept}})

            fetch(url+'/api/teaching_staff',{ method:'GET'})
               .then(response=>{ return response.json()})
               .then((body)=>{
                      this.setState({AnatomyDept:body.AnatomyDept});
                      this.setState({PhysiologyDept:body.PhysiologyDept});
                      this.setState({show:{AnatomyDept:this.state.AnatomyDept,PhysiologyDept:this.state.PhysiologyDept}});

                        //alert(body.msg);
                      //  dispatch({type:'add_video',payload:body.video});
                })
               .catch(err=>{});



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
                        <li>

                            <Link  href="#" class='list-group-item list-group-item-action active' data-toggle='list' onClick={this.allClick.bind(this)}>
                            <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;All
                            </Link>
                        </li>
                        <li>
                            <Link  href="#" class='list-group-item list-group-item-action' data-toggle='list' onClick={this.anatomyClick.bind(this)}>
                            <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;Department of Anatomy
                            </Link>
                        </li>
                        <li>
                            <a  style={{marginLeft:'1px',paddingLeft:'30px',backgroundColor:'white'}} href="#demo1" class='dropdown-toggle' data-toggle="collapse">
                                Select Category
                            </a>
                        </li>
                                {
                                        this.state.AnatomyDept.map((res,ind)=>{
                                        return  <li id='demo1' class='collapse'>
                                            <Link href='#' style={{paddingLeft:'30px'}} class="list-group-item list-group-item-action" data-toggle="list" onClick={this.anatomyOneClick.bind(this,ind)} >
                                                <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;{res.name}
                                            </Link>
                                            </li>
                                        })
                                }

                       <li>
                           <Link href='#' class='list-group-item list-group-item-action' data-toggle='list'
                            onClick={this.physiologyClick.bind(this)}>
                           <i style={{color:'green'}}
                            class='fas fa-angle-right'>
                           </i>&nbsp;Department of Physiology
                           </Link>
                        </li>

                         <li>
                            <a style={{marginLeft:'1px',paddingLeft:'30px',backgroundColor:'white'}} href="#demo" class='list-group-item list-group-item-action' data-toggle='list' data-toggle="collapse" class="dropdown-toggle">
                                Select Category
                            </a>
                        </li>
                            {
                                        this.state.PhysiologyDept.map((res,ind)=>{
                                        return <li id="demo" class="collapse">
                                            <Link href='#' style={{paddingLeft:'30px'}} class="list-group-item list-group-item-action" data-toggle="list"  onClick={this.physiologyOneClick.bind(this,ind)} >
                                            <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;{res.name}
                                            </Link>
                                            </li>
                                            })
                                }


                    </ul>
                </nav>
                <article class="col-lg-9">

                    <header id="article_heading">Teaching Staff</header>
                    <br/>
                  <h3>B. J. Government Medical College, Pune</h3>
                  <br/>
                  <button type="button" class="btn btn-primary"  onClick={(evt)=>this.props.history.push('/deptCharts')} style={{float:"right",backgroundColor:'#003a9b'}}>
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-bar-chart-line" viewBox="0 0 16 16">
                           <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"></path>
                         </svg>
                      </button>
                    <center>

                        <br></br>

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
                </article>
        </section>



        </div>)
    }
}
