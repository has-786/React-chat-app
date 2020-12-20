import '../css/header.css';
import {Link} from 'react-router-dom';

export default function Header(props)
{
  return <div id='body'>

<div class="topnav" id="myTopnav" style={{marginTop:'-10px'}}>
   <Link to='/'  >Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to='/about' >About</Link>&nbsp;&nbsp;&nbsp;&nbsp;
   <div class="dropdown">
     <Link to='/academics' class='dropbtn'>Academics</Link>
     <div class="dropdown-content">
       <a href="#">Link 1</a>
       <a href="#">Link 2</a>
       <a href="#">Link 3</a>
     </div>
   </div>
   <Link to='/hospital' >Hospital</Link>&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to='/depts'>Departments</Link>&nbsp;&nbsp;&nbsp;&nbsp;

   <Link to='/research' >Research & Resources</Link>&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to='/recognition' >Recognition</Link>&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to='/people' >People</Link>&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to='/gallery' >Gallery</Link>&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to='/contact' >Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to='/archives' >Archives</Link>&nbsp;&nbsp;&nbsp;&nbsp;
   <a  href="javascript:void(0);" class="icon" onClick={()=>myFunction()}>
     <i class="fa fa-bars"></i>
   </a>
  </div>

</div>


}


function myFunction(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav")x.className += " responsive";
    else x.className = "topnav";
}
