
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
         ]},
         senior_assistant:{type:[
          {sr_no:'1',emp_no:'3',emp_name:'Dattatrya Baban Gore',post_name:'Senior Assistant'},
          {sr_no:'2',emp_no:'4',emp_name:'Pravin Bhagwan Jadhav',post_name:'Senior Assistant'},
          {sr_no:'2',emp_no:'5',emp_name:'Vidya Rohidas Roundale',post_name:'Senior Assistant'},
          {sr_no:'2',emp_no:'6',emp_name:'Pravin Bhagwanrao Giramkar',post_name:'Senior Assistant'}
        ]},
        senior_clerk:{type:[
          {sr_no:'1',emp_no:'1',emp_name:'Narendra Kashinath Wagh',post_name:'Office Superintendent'},
          {sr_no:'2',emp_no:'2',emp_name:'Mrunalini Sunil Baviskar',post_name:'Office Superintendent'}
        ]},
        storekeeper:{type:[
          {sr_no:'1',emp_no:'1',emp_name:'Narendra Kashinath Wagh',post_name:'Office Superintendent'},
          {sr_no:'2',emp_no:'2',emp_name:'Mrunalini Sunil Baviskar',post_name:'Office Superintendent'}
        ]},
        junior_clerk:{type:[
          {sr_no:'1',emp_no:'1',emp_name:'Narendra Kashinath Wagh',post_name:'Office Superintendent'},
          {sr_no:'2',emp_no:'2',emp_name:'Mrunalini Sunil Baviskar',post_name:'Office Superintendent'}
        ]},
        laboratory_technician:{type:[
          {sr_no:'1',emp_no:'1',emp_name:'Narendra Kashinath Wagh',post_name:'Office Superintendent'},
          {sr_no:'2',emp_no:'2',emp_name:'Mrunalini Sunil Baviskar',post_name:'Office Superintendent'}
        ]},
        ecg_technician:{type:[
          {sr_no:'1',emp_no:'1',emp_name:'Narendra Kashinath Wagh',post_name:'Office Superintendent'},
          {sr_no:'2',emp_no:'2',emp_name:'Mrunalini Sunil Baviskar',post_name:'Office Superintendent'}
        ]},
        dental_teachnician:{type:[
          {sr_no:'1',emp_no:'1',emp_name:'Narendra Kashinath Wagh',post_name:'Office Superintendent'},
          {sr_no:'2',emp_no:'2',emp_name:'Mrunalini Sunil Baviskar',post_name:'Office Superintendent'}
        ]},
        laboratory_assistant:{type:[
          {sr_no:'1',emp_no:'1',emp_name:'Narendra Kashinath Wagh',post_name:'Office Superintendent'},
          {sr_no:'2',emp_no:'2',emp_name:'Mrunalini Sunil Baviskar',post_name:'Office Superintendent'}
        ]},
        lady_superintendent:{type:[
          {sr_no:'1',emp_no:'1',emp_name:'Narendra Kashinath Wagh',post_name:'Office Superintendent'},
          {sr_no:'2',emp_no:'2',emp_name:'Mrunalini Sunil Baviskar',post_name:'Office Superintendent'}
        ]}
       }
    }
  }
<<<<<<< HEAD

  render() {
    return (
      <div   id='mainBody'>
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
=======
  render(){
    return (<div ><Navbar/>
    <i style={{fontSize:'30px'}} class='fa fa-bars burger' onClick={sidenavbar}></i>
      <section class="New_Department row">
        <nav class="side_navigation col-lg-3 mysidenavbar">
        
            <ul class="list-group sidenav_list">
                <li><a class="list-group-item list-group-item-action active" data-toggle="list" href="#Info1">Office Superintendent</a></li>
                <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info2">Senior Assistant</a></li>
                <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3">Senior Clerk</a></li>
                <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3">Storekeeper</a></li>
                <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3">Junior Clerk</a></li>
                <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3">Laboratory Technician</a></li>
                <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3">E.C.G. Technician</a></li>
                <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3">Dental Technician</a></li>
                <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3">Laboratory Assistant</a></li>
                
            </ul>
        </nav>
        <article class="col-lg-9">
          <header id="article_heading">Non-Teaching Staff</header>
          <br/>
          <h3>B. J. Government Medical College, Pune</h3>
          <br/>
          <div class="tab-content">
            <div div class="tab-pane fade show active " id="Info1" >
              <div class="row">
                <div class="col-lg-12 details order-2 order-lg-1">
                  
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
>>>>>>> 21e240480bc20a179c77e4eb59ad9f48450d6ad4
              </div>
            </div>
            
            <div div class="tab-pane fade" id="Info2" >
              <div class="row">
                <div class="col-lg-12 details order-2 order-lg-1">
                  
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
                      this.state.show.senior_assistant.type.map(r=>{
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
            <div div class="tab-pane fade" id="Info3" >
            <div class="row">
                <div class="col-lg-12 details order-2 order-lg-1">
                  
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
                      this.state.show.senior_clerk.type.map(r=>{
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
        </article>
       
      </section>
      <Footer/>
    </div>
    
    
    )
  }
}

export default nonTeaching_staff
