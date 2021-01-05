import Navbar from './navbar'
import '../css/teaching_staff.css'
import Footer from './footer';
import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';
import React, { Component } from 'react'
import Header from './header';

export class nonTeaching_staff extends React.Component {
  constructor(props) {
    super(props)
    this.sidenavbar=sidenavbar;
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
  render(){
    window.scrollTo(0,0);

    return (<div   id='mainBody'>
      <Header />

      <Navbar/>

      <i style={{fontSize:'30px'}} class='fa fa-bars burger' onClick={sidenavbar}></i>
      <i style={{fontSize:'10px',opacity:0}} class='fa fa-bars burger'  onClick={sidenavbar}></i>
      <section class="New_Department row">
        <nav class="side_navigation col-lg-3 mysidenavbar">

            <ul class="list-group sidenav_list">
                <li><a class="list-group-item list-group-item-action active" data-toggle="list" href="#Info1"  onClick={sidenavbar}>Office Superintendent</a></li>
                <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info2"   onClick={sidenavbar}>Senior Assistant</a></li>
                <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3"  onClick={sidenavbar}>Senior Clerk</a></li>
                <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3"  onClick={sidenavbar}>Storekeeper</a></li>
                <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3"  onClick={sidenavbar}>Junior Clerk</a></li>
                <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3"  onClick={sidenavbar}>Laboratory Technician</a></li>
                <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3"  onClick={sidenavbar}>E.C.G. Technician</a></li>
                <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3"  onClick={sidenavbar}>Dental Technician</a></li>
                <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3"  onClick={sidenavbar}>Laboratory Assistant</a></li>

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
