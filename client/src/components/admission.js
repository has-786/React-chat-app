import Navbar from './navbar';
import React from 'react';
import url from './url';
import '../css/home.css';

export default class Admission extends React.Component
{
    constructor(props){
      super(props);
      this.state={ user:"",
                ug:{type:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                          {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                  ,other:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                            {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                  },
                pg:{type:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                  ,other:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                            {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                  },

                  show:{
                    ug:{type:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                    {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                    ,other:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                              {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                    },
                    pg:{type:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                    {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                    ,other:[{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},
                              {name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'},{name:'MBBS',desc:'afesfefee'}]
                    }
                  }
                }
                this.openNav=this.openNav.bind(this);
                this.closeNav=this.closeNav.bind(this);
    }



      openNav() {
       document.getElementById("mySidenav").style.width = "250px";
       document.getElementById("main").style.marginLeft = "250px";
     }

      closeNav() {
       document.getElementById("mySidenav").style.width = "0";
       document.getElementById("main").style.marginLeft= "0";
     }
     ugClick(){
       this.setState({show:{pg: {type:[],other:[]},ug: {type:this.state.ug.type,other:this.state.ug.other}}});
       document.getElementById('ug').style.display='block';
       document.getElementById('ugtype').style.display='block';
       document.getElementById('ugother').style.display='block';
       document.getElementById('pg').style.display='none';
       document.getElementById('pgtype').style.display='none';
       document.getElementById('pgother').style.display='none';
       this.closeNav();
     }

     ugOneClick(ind){
       this.setState({show:{pg: {type:[],other:[]},ug: {type:[this.state.ug.type[ind]],other:[]}}});
       document.getElementById('ug').style.display='block';
       document.getElementById('ugtype').style.display='block';
       document.getElementById('ugother').style.display='none';
       document.getElementById('pg').style.display='none';
       this.closeNav();
     }

     pgClick(){
       this.setState({show:{pg: {type:this.state.pg.type,other:this.state.pg.other},ug: {type:[],other:[]}}});
       document.getElementById('ug').style.display='none';
       document.getElementById('ugtype').style.display='none';
       document.getElementById('ugother').style.display='none';
       document.getElementById('pg').style.display='block';
       document.getElementById('pgtype').style.display='block';
       document.getElementById('pgother').style.display='block';
       this.closeNav();
     }

     pgOneClick(ind){
       this.setState({show:{pg: {type:[this.state.pg.type[ind]],other:[]},ug: {type:[],other:[]}}});
       document.getElementById('pg').style.display='block';
       document.getElementById('pgtype').style.display='block';
       document.getElementById('pgother').style.display='none';
       document.getElementById('ug').style.display='none';
       this.closeNav();
     }

     ugotherClick(){
       this.setState({show:{pg: {type:[],other:[]},ug: {type:[],other:this.state.ug.other}}});
       document.getElementById('ug').style.display='block';
       document.getElementById('ugtype').style.display='none';
       document.getElementById('ugother').style.display='block';
       document.getElementById('pg').style.display='none';
       this.closeNav();
     }

     pgotherClick(){
       this.setState({show:{pg: {type:[],other:this.state.pg.other},ug: {type:[],other:[]}}});
       document.getElementById('pg').style.display='block';
       document.getElementById('pgtype').style.display='none';
       document.getElementById('pgother').style.display='block';
       document.getElementById('ug').style.display='none';
       this.closeNav();
     }


      allClick(){
        this.setState({show:{pg: {type:this.state.pg.type,other:this.state.pg.other},ug: {type:this.state.pg.type,other:this.state.pg.other}}});
        document.getElementById('ug').style.display='block';
        document.getElementById('ugtype').style.display='block';
        document.getElementById('ugother').style.display='block';
        document.getElementById('pg').style.display='block';
        document.getElementById('pgtype').style.display='block';
        document.getElementById('pgother').style.display='block';
        this.closeNav();
      }


componentDidMount(){
  fetch(url+'/api/admission',{ method:'GET'})
       .then(response=>{ return response.json()})
       .then((body)=>{
              this.setState({ug:body.ug});
              this.setState({pg:body.pg});
              this.setState({show:{ug:body.ug,pg:body.pg}})
                //alert(body.msg);
              //  dispatch({type:'add_video',payload:body.video});
        })
       .catch(err=>alert(JSON.stringify(err)));


}

render(){
	return <div >
			 <Navbar />

       <div id="main">
         <span style={{fontSize:'30px',cursor:'pointer',float:'left'}} onClick={this.openNav.bind(this)}>&#9776; Admission</span>
       </div>

       <div id="mySidenav" class="sidenav" >
        <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
        <a  href="#" onClick={this.allClick.bind(this)}>All</a>
        <a  href="#" onClick={this.ugClick.bind(this)}>UG</a>
        <a href="#demo1" data-toggle="collapse" class="dropdown-toggle">
        <ul class="dropdown-menu"  id="demo1" class="collapse" >
         {

           this.state.ug.type.map((res,ind)=>{
             return  <li><a href='#' onClick={this.ugOneClick.bind(this,ind)} >{res.name}</a></li>
           })
         }

         </ul>
         </a>
        <ul>
         <li><a href="#" onClick={this.ugotherClick.bind(this)}>Other Facilities</a></li>
        </ul>
           <a  href='#' onClick={this.pgClick.bind(this)}>PG</a>

           <a href="#demo2" data-toggle="collapse" class="dropdown-toggle">
             <ul class="dropdown-menu"  id="demo2" class="collapse" >
             {
             this.state.pg.type.map((res,ind)=>{
                 return <li><a href='#' onClick={this.pgOneClick.bind(this,ind)} >{res.name}</a></li>
             })
            }
             </ul>
             </a>
             <ul>
             <li><a href="#" onClick={this.pgotherClick.bind(this)}>Other Facilities</a></li>
             </ul>

     </div>

<div style={{marginTop:'0px'}}>
<center><img id="MainImage" src="https://globalhealth.weill.cornell.edu/sites/default/files/styles/panopoly_image_original/public/sasoon_hospital_and_b.j._medical_college_2_0.jpeg?itok=aHVdLJh5" width="1100" height="350"/></center>
</div>
<br></br><br></br>

     <div id='ug'  style={{backgroundColor:'beige',border:'2px solid blue',borderRadius:'10px',padding:'5px'}}>
     <center><button class='btn btn-primary'>UG</button></center>
        <br></br>
        <div id='ugtype'>
          <h5 style={{color:"blue"}}> Available admissions</h5>
          <div class="table-responsive">
            <table class="table table-bordered table-hover">
              <thead>
                 <tr>
                   <th>Course Name</th>
                   <th>Details</th>
                 </tr>
              </thead>
              <tbody>
                 {
                   this.state.show.ug.type.map(r=>{
                      return <tr>
                         <td>{r.name}</td>
                         <td>{r.desc}</td>
                       </tr>
                   })
                 }
              </tbody>
           </table>
           </div>
        </div>
        <br></br>
        <div id='ugother'>
        <h5 style={{color:"blue"}}>Other Facilities</h5>
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead>
               <tr>
                 <th>Name</th>
                 <th>Details</th>
               </tr>
            </thead>
            <tbody>
               {
                 this.state.show.ug.other.map(r=>{
                    return <tr>
                       <td>{r.name}</td>
                       <td>{r.desc}</td>
                     </tr>
                 })
               }
            </tbody>
         </table>
         </div>
        </div>
      </div>


        <br></br><br></br><br></br><br></br>
        <div id='pg' style={{backgroundColor:'beige',border:'2px solid green',borderRadius:'10px',padding:'5px'}}>
        <center><button class='btn btn-success'>PG</button></center>
          <br></br>
          <div id='pgtype'>
            <h5 style={{color:"green"}}>Available admissions</h5>
            <div class="table-responsive">
              <table class="table table-bordered table-hover">
                <thead>
                   <tr>
                     <th>Course Name</th>
                     <th>Details</th>
                   </tr>
                </thead>
                <tbody>
                   {
                     this.state.show.pg.type.map(r=>{
                        return <tr>
                           <td>{r.name}</td>
                           <td>{r.desc}</td>
                         </tr>
                     })
                   }
                </tbody>
             </table>
             </div>
          </div>
          <br></br><br></br>
          <div id='pgother'>
           <h5 style={{color:"green"}}>Other Facilities</h5>
           <div class="table-responsive">
             <table class="table table-bordered table-hover">
               <thead>
                  <tr>
                    <th>Name</th>
                    <th>Details</th>
                  </tr>
               </thead>
               <tbody>
                  {
                    this.state.show.pg.other.map(r=>{
                       return <tr>
                          <td>{r.name}</td>
                          <td>{r.desc}</td>
                        </tr>
                    })
                  }
               </tbody>
            </table>
            </div>
           </div>
        </div>



	</div>
}

}
