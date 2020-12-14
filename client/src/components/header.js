import '../css/header.css';
import {Link} from 'react-router-dom';

export default function Header(props)
{
  return  <div>
   
   <div class="topnav" id="myTopnav" style={{marginTop:'-10px'}}>
		<Link to='/' >Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
		<Link to='/about' >About</Link>&nbsp;&nbsp;&nbsp;&nbsp;
		<Link to='/academics'>Academics</Link>&nbsp;&nbsp;&nbsp;&nbsp;
		<Link to='/hospital' >Hospital</Link>&nbsp;&nbsp;&nbsp;&nbsp;
		<Link to='/depts'>Departments</Link>&nbsp;&nbsp;&nbsp;&nbsp;
		<Link to='/recognition' >Research & Resources</Link>&nbsp;&nbsp;&nbsp;&nbsp;
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
