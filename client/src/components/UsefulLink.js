import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import '../css/row.css'

class UsefulLink extends React.Component{
    render(){

        return (


        <div style={{padding:'11px'}}>
            {/* <h3>USEFUL LINKS</h3>

        <table class="table table-bordered">

            <tr>
              <td><a href={"http://in.groups.yahoo.com/group/jamkarstudents/"} style={{color:"blue"}}>http://in.groups.yahoo.com/group/jamkarstudents/</a></td>
            </tr>

            <tr>
            <td><a href={"http://jamkarstudents.blogspot.com/2004_09_01_archive.html"} style={{color:"blue"}}>http://jamkarstudents.blogspot.com/2004_09_01_archive.html</a></td>
           </tr>

          </table> */}



<div>
<div class="row " style={{textAlign:"center"}} >
     <div class="col-lg-2  col-md-6 d-md-flex justify-content-center  " style={{backgroundColor:"#1a6eff",padding:"20px"}}>
       <div class="count-box">
        <p  class='row1'>Total seats in college </p>
        <h6 >800</h6>
     </div>
</div>

<div class="col-lg-2  col-md-6 d-md-flex justify-content-center  " style={{backgroundColor:"#005eff",padding:"20px"}}>
  <div class="count-box">
       <p class='row1'>Total beds in Hospital</p>
      <h6 >1260</h6>
  </div>
</div>

<div class="col-lg-2  col-md-6 d-md-flex justify-content-center  " style={{backgroundColor:"#0054e6",padding:"20px"}}>
  <div class="count-box">
    <p class='row1'>Departments</p>
    <h6 >9</h6>
   </div>
</div>

<div class="col-lg-2  col-md-6 d-md-flex justify-content-center  " style={{backgroundColor:"#004bcc",padding:"20px"}}>
  <div class="count-box">
    <p class='row1'>Teaching Staff</p>
    <h6>266</h6>
  </div>
</div>
<div class="col-lg-2  col-md-6 d-md-flex justify-content-center  " style={{backgroundColor:"#0041b3",padding:"20px"}}>
  <div class="count-box">
     <p class='row1'>Non Teaching Staff</p>
     <h6 >252</h6>
  </div>
</div>
<div class="col-lg-2 col-md-6 d-md-flex justify-content-center  " style={{backgroundColor:"#003a9b",padding:"30px 0 0 10px"}}>

<button type="button" class="btn btn-link  border border-white" onClick={(evt)=>this.props.history.push('/analytics')} style={{color:"white",padding:"0 20px 0 20px",height:"40px"}}>See More</button>

</div>

</div>
          </div>


          </div>)



    }
}
export default withRouter(UsefulLink);
