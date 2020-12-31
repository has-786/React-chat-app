
import Navbar from './navbar'
import '../css/teaching_staff.css'
import Footer from './footer';
import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';
import React, { Component } from 'react'

export class nonTeaching_staff extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
       user:"",
       show:{
         office_superintendent:{type:[
           {sr_no:'1',emp_no:'1',emp_name:'Narendra Kashinath Wagh',post_name:'Office Superintendent'},
           {sr_no:'2',emp_no:'2',emp_name:'Mrunalini Sunil Baviskar',post_name:'Office Superintendent'}
         ]}
       }
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <section id="departments" class="departments">
          <div class="container">

            <div class="section-title">
              <h2>Non-Teaching Staff</h2>
            </div>

            <div class="row">
              <div class="col-lg-3">
              <i style={{fontSize:'30px'}} class='fa fa-bars burger'
               onClick={sidenavbar}></i>

                <ul class="nav nav-tabs flex-column mysidenavbar">
                  <li class="nav-item">
                    <a class="nav-link active show" data-toggle="tab" href="#tab-1" onClick={sidenavbar}>Office Superintendent</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={sidenavbar}>Senior Assistant</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-3" onClick={sidenavbar}>Senior Clerk</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-4" onClick={sidenavbar}>Storekeeper (Senior Clerk)</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-5" onClick={sidenavbar}>Junior Clerk</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-6" onClick={sidenavbar}>Laboratory Technician</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-7" onClick={sidenavbar}>E.C.G. Technician</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-8" onClick={sidenavbar}>Dental Technician</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-9" onClick={sidenavbar}>Laboratory Assistant</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-10" onClick={sidenavbar}>Lady Suprintendent</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-11" onClick={sidenavbar}>Photographer</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-12" onClick={sidenavbar}>Public Health Nurse</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-13" onClick={sidenavbar}>Sanitory Inspector</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-14" onClick={sidenavbar}>Social Worker</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-15" onClick={sidenavbar}>Stenographer</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-16" onClick={sidenavbar}>Artist</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-17" onClick={sidenavbar}>Telephone Operator</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-18" onClick={sidenavbar}>Assistant Librarian</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-19" onClick={sidenavbar}>Driver-cum-Cleaner</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-20"  onClick={sidenavbar}>Driver</a>
                  </li>

                </ul>
              </div>



           <div class="tab-pane" id="tab-2">
              <div class="row">
                <div class="col-lg-12 details order-2 order-lg-1">
                  <h3>Office Superintendent</h3>
                  <table>
                  <thead>
                              <tr>
                                        <th>Sr. No.</th>
                                        <th>Employee No</th>
                                        <th>Employee Name</th>
                                        <th>Post Name</th>

                                      </tr>
                              </thead>
                    <tbody>
                    {
                                    this.state.show.office_superintendent.type.map(r=>{
                                      return <tr>
                                        <td>{r.sr_no}</td>
                                        <td>{r.emp_no}</td>
                                        <td>{r.emp_name}</td>
                                        <td>{r.post_name}</td>

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


        </section>



        <Footer/>
      </div>
    )
  }
}

export default nonTeaching_staff
