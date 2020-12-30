
import Navbar from './navbar'
import '../css/teaching_staff.css'
import Footer from './footer';

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
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a class="nav-link active show" data-toggle="tab" href="#tab-1">Office Superintendent</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2">Senior Assistant</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-3">Senior Clerk</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-4">Storekeeper (Senior Clerk)</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-5">Junior Clerk</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-6">Laboratory Technician</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-7">E.C.G. Technician</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-8">Dental Technician</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-9">Laboratory Assistant</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-10">Lady Suprintendent</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-11">Photographer</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-12">Public Health Nurse</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-13">Sanitory Inspector</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-14">Social Worker</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-15">Stenographer</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-16">Artist</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-17">Telephone Operator</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-18">Assistant Librarian</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-19">Driver-cum-Cleaner</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-20">Driver</a>
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

