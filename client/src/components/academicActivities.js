import Navbar from './navbar';
import React from 'react';
import url from './url';
import '../css/home.css';
import '../css/teaching_staff.css';
import {Link} from 'react-router-dom';
import Footer from './footer';
import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';


export default class AcademicActivities extends React.Component
{
    constructor(props){
      super(props);

      this.state={ user:"",

                  deptsData:[
                              {
                                name:'Microbiology',
                                events:[
                                    {head:'Mr. Subhash',subject:'Ten Interdepartmental academic seminars',venue:'BJMC',date:'20/12/2020'},
                                    {head:'Mr. Nitin',subject:'Ten Interdepartmental academic seminars',venue:'BJMC',date:'20/12/2020'},
                                    {head:'Mr. Gole',subject:'Ten Interdepartmental academic seminars',venue:'BJMC',date:'20/12/2020'},
                                    {head:'Mr. Avishek',subject:'Ten Interdepartmental academic seminars',venue:'BJMC',date:'20/12/2020'},
                                    {head:'Mr. Subhash',subject:'Ten Interdepartmental academic seminars',venue:'BJMC',date:'20/12/2020'},
                                    {head:'Mr. Subhash',subject:'Ten Interdepartmental academic seminars',venue:'BJMC',date:'20/12/2020'},
                                    {head:'Mr. Subhash',subject:'Ten Interdepartmental academic seminars',venue:'BJMC',date:'20/12/2020'},
                                    {head:'Mr. Subhash',subject:'Ten Interdepartmental academic seminars',venue:'BJMC',date:'20/12/2020'},
                                    {head:'Mr. Subhash',subject:'Ten Interdepartmental academic seminars',venue:'BJMC',date:'20/12/2020'},
                                    {head:'Mr. Subhash',subject:'Ten Interdepartmental academic seminars',venue:'BJMC',date:'20/12/2020'},
                                    {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                    {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'}
                                  ]
                               },
                               {
                                 name:'ECE',
                                 events:[
                                     {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                     {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                     {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                     {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                     {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                     {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                     {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                     {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                     {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                     {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                     {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                     {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'}
                                   ]
                                },
                                {
                                  name:'IT',
                                  events:[
                                      {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                      {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                      {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                      {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                      {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                      {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                      {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                      {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                      {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                      {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                      {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                      {head:'Mr. Subhash',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'}
                                    ]
                                 }

                           ],

                           guestsData:[
                                       {
                                         name:'Guest A',
                                         events:[
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'}
                                           ]
                                        },
                                        {
                                          name:'Guest B',
                                          events:[
                                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'}
                                            ]
                                         },
                                         {
                                           name:'Guest C',
                                           events:[
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                                             {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'}
                                             ]
                                          }

                                    ],



                    otherData:[{subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'},
                            {subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'}

                            ],

                  show:{
                        deptsData:[{name:'',events:[{head:'',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'}]}],
                        guestsData:[{name:'',events:[{subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'}]}],
                        otherData:[{subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'}]
                      }
                }

    }

      componentDidMount(){
        this.setState({show:{deptsData:this.state.deptsData,guestsData:this.state.guestsData,otherData:this.state.otherData}})

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

     deptClick(){
       this.setState({show:{deptsData:this.state.deptsData,guestsData:[{name:null,events:[]}],otherData:[]}});
       document.getElementById('dept').style.display='block';
       document.getElementById('guest').style.display='none';
       document.getElementById('other').style.display='none';
       sidenavbar();

      }

     deptOneClick(ind){
       this.setState({show:{deptsData:[this.state.deptsData[ind]],guestsData:[{name:null,events:[]}],otherData:[]}});
       document.getElementById('dept').style.display='block';
       document.getElementById('guest').style.display='none';
       document.getElementById('other').style.display='none';
       sidenavbar();
     }

     guestClick(){
       this.setState({show:{guestsData:this.state.guestsData,deptsData:[{name:null,events:[]}],otherData:[]}});
       document.getElementById('dept').style.display='none';
       document.getElementById('guest').style.display='block';
       document.getElementById('other').style.display='none';
       sidenavbar();
     }

     guestOneClick(ind){
       this.setState({show:{guestsData:[this.state.guestsData[ind]],deptsData:[{name:null,events:[]}],otherData:[]}});
       document.getElementById('dept').style.display='none';
       document.getElementById('guest').style.display='block';
       document.getElementById('other').style.display='none';
    //   this.closeNav();
         sidenavbar();
     }

     otherClick(){
       this.setState({show:{guestsData:[{name:null,events:[]}],deptsData:[{name:null,events:[]}],otherData:this.state.otherData}});
       document.getElementById('dept').style.display='none';
       document.getElementById('guest').style.display='none';
       document.getElementById('other').style.display='block';
       sidenavbar();
     }


      allClick(){
        this.setState({show:{guestsData:this.state.guestsData,deptsData:this.state.deptsData,otherData:this.state.otherData}});
        document.getElementById('dept').style.display='block';
        document.getElementById('guest').style.display='block';
        document.getElementById('other').style.display='block';
    //    this.closeNav();
      }
render(){
	return <div>
			 <Navbar />
       <section id="departments" class="departments">
         <div class="container">

           <div class="section-title">
             <h2>Academic Activities</h2>
             <p>Academic activities in the Sassoon Hospital and College</p>
           </div>
        <div class='row'>
          <div class='col-lg-2'>
          <i style={{fontSize:'30px'}} class='fa fa-bars burger'
           onClick={sidenavbar}></i>

            <ul class="nav nav-tabs flex-column mysidenavbar">
            <li class='nav-item'><Link  href="#" class='nav-link' onClick={this.allClick.bind(this)}>All</Link></li>
            <li class='nav-item'><Link  href="#" class='nav-link' onClick={this.deptClick.bind(this)}>By Departments</Link></li>
            <li class='nav-item'>
              <a href="#demo1" data-toggle="collapse" class="dropdown-toggle nav-link">
              Select
              <ul class="dropdown-menu nav nav-tabs flex-column"  id="demo1" class="collapse" >
               {
                  this.state.deptsData.map((res,ind)=>{
                   return  <li class='nav-item'><Link href='#' class='nav-link' onClick={this.deptOneClick.bind(this,ind)} >{res.name}</Link></li>
                 })
               }
               </ul>
               </a>
             </li>

             <li class='nav-item'><Link  href='#' class='nav-link' onClick={this.guestClick.bind(this)}>By Guests</Link></li>
              <li class='nav-item'><a href="#demo2"  data-toggle="collapse" class="dropdown-toggle nav-link">
              Select

                 <ul class="dropdown-menu nav nav-tabs flex-column"  id="demo2" class="collapse" >
                 {
                 this.state.guestsData.map((res,ind)=>{
                     return <li class='nav-item'><Link href='#' class='nav-link' onClick={this.guestOneClick.bind(this,ind)} >{res.name}</Link></li>
                 })
                }
                 </ul>
               </a>
               </li>
               <li class='nav-item'><Link href="#" class='nav-link' onClick={this.otherClick.bind(this)}>Other Activities</Link></li>
            </ul>
          </div>


          <div class='col-lg-10'>

          <div id='dept'  style={{border:'2px solid blue',borderRadius:'10px',padding:'5px'}}>
          <center><button class='btn btn-primary'>By Departments</button></center>
             <div>
                 { this.state.show.deptsData.map((res)=>{
                  return <div>
                  <h5 style={{color:'blue'}}>{res.name}</h5>
                        <div class="table-responsive">
                          <table class="table table-bordered table-hover table-striped">
                            <thead>
                               <tr>
                                 <th>Head</th>
                                 <th>Subject</th>
                                 <th>Venue</th>
                                 <th>Date</th>
                               </tr>
                            </thead>
                            <tbody>
                               {
                                 res.events.map(r=>{
                                 return    <tr>
                                       <td>{r.head}</td>
                                       <td>{r.subject}</td>
                                       <td>{r.venue}</td>
                                       <td>{r.date}</td>
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

            <br></br>

            <div id='guest'  style={{border:'2px solid green',borderRadius:'10px',padding:'5px'}}>
               <center><button class='btn btn-success'>By Guests</button></center>
               <div>
                     {
                       this.state.show.guestsData.map((res)=>{
                         return <div>
                               <h5 style={{color:'green'}}>{res.name}</h5>
                               <div class="table-responsive">
                                 <table class="table table-bordered table-hover table-striped">
                                   <thead>
                                      <tr>
                                        <th>Subject</th>
                                        <th>Venue</th>
                                        <th>Date</th>
                                      </tr>
                                   </thead>
                                   <tbody>
                                      {
                                        res.events.map(r=>{
                                           return <tr>
                                              <td>{r.subject}</td>
                                              <td>{r.venue}</td>
                                              <td>{r.date}</td>
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
               <br></br>
           <div id='other'  style={{border:'2px solid red',borderRadius:'10px',padding:'5px'}}>
           <center><button class='btn btn-danger'>Other Activities</button></center>

                       <div class="table-responsive">
                         <table class="table table-bordered table-hover table-striped">
                           <thead>
                              <tr>
                                <th>Subject</th>
                                <th>Venue</th>
                                <th>Date</th>
                              </tr>
                           </thead>
                           <tbody>
                       {
                         this.state.show.otherData.map((res)=>{
                           return  <tr>
                                    <td>{res.subject}</td>
                                    <td>{res.venue}</td>
                                    <td>{res.date}</td>
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
}

}
