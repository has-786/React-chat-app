
import Navbar from './navbar'
import '../css/teaching_staff.css'
import Footer from './footer';
import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';
import React, { Component } from 'react';

export default class teaching_staff extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
       user:"",
       show:{
         anatomy_prof:{type:[
           {sr_No : "1", officer_name:"Dr. B. H. Baheti", designation:"Professor and HOD",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
           {sr_No : "2", officer_name:"Dr.  A.D.Patil", designation:"Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9423572970"},
           ]},
          anatomy_associateProf:{type:[
            {sr_No : "1", officer_name:"Dr.A.P.Gaikwad", designation:"Associate Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9422084905"},
            {sr_No : "2", officer_name:"Dr.S.A.Rokade", designation:"Associate Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
            {sr_No : "3", officer_name:"Dr.Vaishali M Paranjape", designation:"Associate Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
            {sr_No : "4", officer_name:"Dr Mahesh Taru", designation:"Associate Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
            ]},
          anatomy_assistantProf:{type:[
            {sr_No : "1", officer_name:"Dr. Swati  Pandhre", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
            {sr_No : "2", officer_name:"Dr.  Reshma Shinde", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
            {sr_No : "3", officer_name:"Dr. Pratima Ahire", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
            {sr_No : "4", officer_name:"Dr. Sarika Kate", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
            {sr_No : "5", officer_name:"Dr. Sonali Khankare", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
            {sr_No : "6", officer_name:"Dr. Sneha M. Jadhav", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"},
            {sr_No : "7", officer_name:"Dr. Smita  Nomulwar", designation:"Assistant Professor",location:"Department of Anatomy , B. J. Govt. Medical College Pune", contact:"9850126982"}

          ]}
       }
    }
  }

  render() {
    return (
      <div  id='mainBody'>
      <div>
        <Navbar/>
      </div>
      <section id="departments" class="departments">
        <div class="container">
          <div class="section-title">
            <h2>Teaching Staff</h2>
          </div>

        <div class="row">
          <div class="col-lg-3">
          <i style={{fontSize:'30px'}} class='fa fa-bars burger'
           onClick={sidenavbar}></i>

            <ul class="nav nav-tabs flex-column mysidenavbar">
            <li class="nav-item">
                <a class="nav-link active show" data-toggle="tab" href="#tab-1" onClick={sidenavbar}>Department  of Anatomy</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={sidenavbar}>Department  of Physiology</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-3" onClick={sidenavbar}>Department  of Bio-Chemistry</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-4" onClick={sidenavbar}>Department of Pathology</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-5" onClick={sidenavbar}>Department of Orthopaedic</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-6" onClick={sidenavbar}>Department of Microbiology</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-7"onClick={sidenavbar}>Department of Pharmacology</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-8" onClick={sidenavbar}>Department of  Preventive & Social Medicine (PSM)</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-9"onClick={sidenavbar}>Department of Forensic Medicine (FMT)</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-10"onClick={sidenavbar}>Department of Medicine</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-11" onClick={sidenavbar}>Department of Paediatric</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-12"onClick={sidenavbar}>Department of Tuberculosis (TB)</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-13"onClick={sidenavbar}>Department of Psychiatry</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-14"onClick={sidenavbar}>Department of Skin & V.B.</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-15"onClick={sidenavbar}>Department of Surgery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-16"onClick={sidenavbar}>Department of Ophthalmology</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-17" onClick={sidenavbar}>Department of E.N.T.</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-18"onClick={sidenavbar}>Department of Gynaecology</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-19"onClick={sidenavbar}> Department of Anaesthesiology</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-20" onClick={sidenavbar}>Department of Radio-Diagnosis</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-21" onClick={sidenavbar}>Department of Dental</a>
              </li>
            </ul>
          </div>


          <div class="col-lg-9 mt-4 mt-lg-0">
        <div class="tab-content">
          <div class="tab-pane active show" id="tab-1">
            <div class="row">
              <div class="col-lg-12 details order-2 order-lg-1">
                <h3>Department of Anatomy</h3>
                <div class="container">
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" style={{backgroundColor:'#2c4964', color:'white', display:'block',fontSize:'20px', fontWeight:'normal'}}>Professor </a>

                            </h4>
                        </div>
                        <div id="collapse1" class="panel-collapse collapse in">
                            <div class="panel-body">
                            <table>
                              <thead>
                              <tr>
                                        <th>Sr. No.</th>
                                        <th>Name of Officer</th>
                                        <th>Designation</th>
                                        <th>Location/Office Address</th>
                                        <th>Contact</th>
                                      </tr>
                              </thead>
                              <tbody>
                                  {
                                    this.state.show.anatomy_prof.type.map(r=>{
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
                        </div>
                        <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"style={{backgroundColor:'#2c4964', color:'white', display:'block',fontSize:'20px', fontWeight:'normal'}}>Associate Professor</a>
                            </h4>
                        </div>
                        <div id="collapse2" class="panel-collapse collapse in">
                            <div class="panel-body">
                            <table>
                            <thead>
                              <tr>
                                        <th>Sr. No.</th>
                                        <th>Name of Officer</th>
                                        <th>Designation</th>
                                        <th>Location/Office Address</th>
                                        <th>Contact</th>
                                      </tr>
                              </thead>
                              <tbody>
                                  {
                                    this.state.show.anatomy_associateProf.type.map(r=>{
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
                        </div>
                        <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" style={{backgroundColor:'#2c4964', color:'white', display:'block',fontSize:'20px', fontWeight:'normal'}}>Assistant Professor</a>
                            </h4>
                        </div>
                        <div id="collapse3" class="panel-collapse collapse in">
                            <div class="panel-body">
                            <table>
                            <thead>
                              <tr>
                                        <th>Sr. No.</th>
                                        <th>Name of Officer</th>
                                        <th>Designation</th>
                                        <th>Location/Office Address</th>
                                        <th>Contact</th>
                                      </tr>
                              </thead>
                              <tbody>
                                  {
                                    this.state.show.anatomy_assistantProf.type.map(r=>{
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
                        </div>

                    </div>
                    </div>
                    </div>

            </div>
          </div>
          <div class="tab-pane" id="tab-2">
            <div class="row">
              <div class="col-lg-8 details order-2 order-lg-1">
                <h3>Physiology</h3>
                <div class="container">
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Professor</a>
                            </h4>
                        </div>
                        <div id="collapse1" class="panel-collapse collapse in">
                            <div class="panel-body">Table 1</div>
                        </div>
                        </div>
                        <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Assisstant Professor</a>
                            </h4>
                        </div>
                        <div id="collapse2" class="panel-collapse collapse">
                            <div class="panel-body">Table 2</div>
                        </div>
                        </div>

                    </div>
                    </div></div>

            </div>
          </div>
          <div class="tab-pane" id="tab-3">
            <div class="row">
              <div class="col-lg-8 details order-2 order-lg-1">
                <h3>Bio-Chemistry</h3>
                <div class="container">
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Professor</a>
                            </h4>
                        </div>
                        <div id="collapse1" class="panel-collapse collapse in">
                            <div class="panel-body">Table 1</div>
                        </div>
                        </div>
                        <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Assisstant Professor</a>
                            </h4>
                        </div>
                        <div id="collapse2" class="panel-collapse collapse">
                            <div class="panel-body">Table 2</div>
                        </div>
                        </div>

                    </div>
                    </div></div>

            </div>
          </div>
          <div class="tab-pane" id="tab-4">
            <div class="row">
              <div class="col-lg-8 details order-2 order-lg-1">
                <h3>Pathology</h3>
                <div class="container">
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Professor</a>
                            </h4>
                        </div>
                        <div id="collapse1" class="panel-collapse collapse in">
                            <div class="panel-body">Table 1</div>
                        </div>
                        </div>
                        <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Assisstant Professor</a>
                            </h4>
                        </div>
                        <div id="collapse2" class="panel-collapse collapse">
                            <div class="panel-body">Table 2</div>
                        </div>
                        </div>

                    </div>
                    </div></div>

            </div>
          </div>
          <div class="tab-pane" id="tab-5">
            <div class="row">
              <div class="col-lg-8 details order-2 order-lg-1">
                <h3>Orthopaedic</h3>
                <div class="container">
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Professor</a>
                            </h4>
                        </div>
                        <div id="collapse1" class="panel-collapse collapse in">
                            <div class="panel-body">Table 1</div>
                        </div>
                        </div>
                        <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Assisstant Professor</a>
                            </h4>
                        </div>
                        <div id="collapse2" class="panel-collapse collapse">
                            <div class="panel-body">Table 2</div>
                        </div>
                        </div>

                    </div>
                    </div></div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
    </section>
    <Footer/>
    </div>
    )
  }
}
