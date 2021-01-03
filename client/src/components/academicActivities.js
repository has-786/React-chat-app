import Navbar from './navbar';
import React from 'react';
import url from './url';
import '../css/home.css';
import '../css/teaching_staff.css';
import {Link} from 'react-router-dom';
import Footer from './footer';
import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';
import '../css/Department_css.css';


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
        window.scrollTo(0,0);
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
	return <div   id='mainBody'>
			 <Navbar />
       <i style={{fontSize:'30px'}} class='fa fa-bars burger' onClick={sidenavbar}></i>


               <section class="New_Department row">
                       <nav class="side_navigation col-lg-3 mysidenavbar">

                        <ul class='list-group sidenav_list' >

            <li ><Link  href="#" class='list-group-item list-group-item-action active' data-toggle='list' onClick={this.allClick.bind(this)}>All</Link></li>
            <li><Link  href="#" class='list-group-item list-group-item-action' data-toggle='list' onClick={this.deptClick.bind(this)}>By Departments</Link></li>
            <li >
              <a href="#demo1" class='list-group-item list-group-item-action' data-toggle='list' data-toggle="collapse" class="dropdown-toggle">
              Select
              <div id="demo1" class="collapse">
              <ul class='list-group-item list-group-item-action' >
               {
                  this.state.deptsData.map((res,ind)=>{
                   return  <li ><Link href='#'  onClick={this.deptOneClick.bind(this,ind)} >{res.name}</Link></li>
                 })
               }
               </ul>
               </div>
               </a>
             </li>

             <li><Link  href='#' class='list-group-item list-group-item-action' data-toggle='list' onClick={this.guestClick.bind(this)}>By Guests</Link></li>
              <li>
              <a href="#demo2" class='list-group-item list-group-item-action' data-toggle='list' data-toggle="collapse" class="dropdown-toggle">
              Select
                <div id="demo2" class="collapse">
                 <ul class='list-group-item list-group-item-action'  >
                 {
                 this.state.guestsData.map((res,ind)=>{
                     return <li><Link href='#' onClick={this.guestOneClick.bind(this,ind)} >{res.name}</Link></li>
                 })
                }
                 </ul>
                 </div>
               </a>
               </li>
               <li><Link href="#" class='list-group-item list-group-item-action' data-toggle='list' onClick={this.otherClick.bind(this)}>Other Activities</Link></li>
            </ul>
          </nav>


          <div class='col-lg-9'>
          <div class="section-title">
            <h2>Academic Activities</h2>
            <p>Academic activities in the Sassoon Hospital and College</p>
          </div>
          <div id='dept'  style={{border:'2px solid blue',borderRadius:'10px',padding:'5px'}}>
          <center><button class='btn btn-primary'>By Departments</button></center>
             <div>
                 { this.state.show.deptsData.map((res)=>{
                  return <div>
                  <h5 style={{float:'left',color:'blue'}}>{res.name}</h5>
                        <div class="table-responsive">
                          <table class="table table-bordered">
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
                               <h5 style={{float:'left',color:'green'}}>{res.name}</h5>
                               <div class="table-responsive">
                                 <table class="table table-bordered">
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
                         <table class="table table-bordered">
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


        </section>


    <Footer/>


	</div>
}

}
