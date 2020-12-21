import Navbar from './navbar';
import React from 'react';
import url from './url';

export default class AcademicActivities extends React.Component
{
    constructor(props){
      super(props);
      this.state={ user:"",

                  deptsData:[
                              {
                                name:'CSE',
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
                this.openNav=this.openNav.bind(this);
                this.closeNav=this.closeNav.bind(this);
    }

      componentDidMount(){

        fetch(url+'/api/academicActivities',{ method:'GET'})
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




      }


      openNav() {
       document.getElementById("mySidenav").style.width = "250px";
       document.getElementById("main").style.marginLeft = "250px";
     }

      closeNav() {
       document.getElementById("mySidenav").style.width = "0";
       document.getElementById("main").style.marginLeft= "0";
     }

     deptClick(){
       this.setState({show:{deptsData:this.state.deptsData,guestsData:[{name:null,events:[]}],otherData:[]}});
       document.getElementById('dept').style.display='block';
       document.getElementById('guest').style.display='none';
       document.getElementById('other').style.display='none';

       this.closeNav();
     }

     deptOneClick(ind){
       this.setState({show:{deptsData:[this.state.deptsData[ind]],guestsData:[{name:null,events:[]}],otherData:[]}});
       document.getElementById('dept').style.display='block';
       document.getElementById('guest').style.display='none';
       document.getElementById('other').style.display='none';
       this.closeNav();
     }

     guestClick(){
       this.setState({show:{guestsData:this.state.guestsData,deptsData:[{name:null,events:[]}],otherData:[]}});
       document.getElementById('dept').style.display='none';
       document.getElementById('guest').style.display='block';
       document.getElementById('other').style.display='none';
       this.closeNav();
     }

     guestOneClick(ind){
       this.setState({show:{guestsData:[this.state.guestsData[ind]],deptsData:[{name:null,events:[]}],otherData:[]}});
       document.getElementById('dept').style.display='none';
       document.getElementById('guest').style.display='block';
       document.getElementById('other').style.display='none';
       this.closeNav();
     }

     otherClick(){
       this.setState({show:{guestsData:[{name:null,events:[]}],deptsData:[{name:null,events:[]}],otherData:this.state.otherData}});
       document.getElementById('dept').style.display='none';
       document.getElementById('guest').style.display='none';
       document.getElementById('other').style.display='block';
       this.closeNav();
     }


      allClick(){
        this.setState({show:{guestsData:this.state.guestsData,deptsData:this.state.deptsData,otherData:this.state.otherData}});
        document.getElementById('dept').style.display='block';
        document.getElementById('guest').style.display='block';
        document.getElementById('other').style.display='block';
        this.closeNav();
      }
render(){
	return <div id="mainBody">
			 <Navbar />

           <div id="main">
             <span style={{fontSize:'30px',cursor:'pointer',float:'left'}} onClick={this.openNav.bind(this)}>&#9776; Academic Activities</span>
           </div>

           <div id="mySidenav" class="sidenav" >
            <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
            <a  href="#" onClick={this.allClick.bind(this)}>All</a>
            <a  href="#" onClick={this.deptClick.bind(this)}>By Departments</a>
            <a href="#demo1" data-toggle="collapse" class="dropdown-toggle">
            <ul class="dropdown-menu"  id="demo1" class="collapse" >
             {
                this.state.deptsData.map((res,ind)=>{
                 return  <li><a href='#' onClick={this.deptOneClick.bind(this,ind)} >{res.name}</a></li>
               })
             }

             </ul>
           </a>
               <a  href='#' onClick={this.guestClick.bind(this)}>By Guests</a>

               <a href="#demo2" data-toggle="collapse" class="dropdown-toggle">
                 <ul class="dropdown-menu"  id="demo2" class="collapse" >
                 {
                 this.state.guestsData.map((res,ind)=>{
                     return <li><a href='#' onClick={this.guestOneClick.bind(this,ind)} >{res.name}</a></li>
                 })
                }
                 </ul>
               </a>
               <a href="#" onClick={this.otherClick.bind(this)}>Other Activities</a>

         </div>

         <br></br><br></br>

         <div id='dept'  style={{backgroundColor:'beige',border:'2px solid blue',borderRadius:'10px',padding:'5px'}}>
         <center><button class='btn btn-primary'>By Departments</button></center>
            <div>
                { this.state.show.deptsData.map((res)=>{
                 return <div>
                 <h5 style={{color:'blue'}}>{res.name}</h5>
                       <div class="table-responsive">
                         <table class="table table-bordered table-hover">
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

           <div id='guest'  style={{backgroundColor:'beige',border:'2px solid green',borderRadius:'10px',padding:'5px'}}>
              <center><button class='btn btn-success'>By Guests</button></center>
              <div>
                    {
                      this.state.show.guestsData.map((res)=>{
                        return <div>
                              <h5 style={{color:'green'}}>{res.name}</h5>
                              <div class="table-responsive">
                                <table class="table table-bordered table-hover">
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
          <div id='other'  style={{backgroundColor:'beige',border:'2px solid red',borderRadius:'10px',padding:'5px'}}>
          <center><button class='btn btn-danger'>Other Activities</button></center>

                      <div class="table-responsive">
                        <table class="table table-bordered table-hover">
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
}

}
