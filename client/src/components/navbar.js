import '../css/navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar(props)
{
  return <div>

  <nav>
    <label for="drop" class="toggle" style={{marginTop:'0px'}}>Menu</label>
    <input type="checkbox" id="drop" />
    <ul class="menu">
          <li><Link name='single' to="/">Home</Link></li>
      <li><Link  name='single' to="/about">About</Link></li>
      <li><Link  name='single' to="/hospital">Hospital</Link></li>
      <li><Link  name='single' to="/department">Departments</Link></li>
      <li>
      <label for="drop-2" class="toggle">Academics&nbsp; <i style={{color:'green'}} class='fas fa-angle-down'></i></label>
      <Link to="#">Academics&nbsp;<i style={{color:'green'}} class='fas fa-angle-down'></i></Link>
      <input type="checkbox" id="drop-2"/>
      <ul>
        <li><Link to="/university">University</Link></li>
        <li><Link to="/admission">Admission</Link></li>
        <li><Link to="/result">Results</Link></li>
        <li><Link to="/academicActivities">Academic Activities</Link></li>
      </ul>
      </li>
      <li><Link  name='single' to="/research">Research & Resources</Link></li>
      <li>
      <label for="drop-4" class="toggle">Achievements &nbsp;<i style={{color:'green'}} class='fas fa-angle-down'></i></label>
      <Link to="#">Achievements &nbsp;<i style={{color:'green'}} class='fas fa-angle-down'></i></Link>
      <input type="checkbox" id="drop-4"/>
      <ul>
        <li><Link to="#">Recognition</Link></li>
        <li><Link to="#">Awards & Achievements</Link></li>
      </ul>
      </li>
      <li>
      <label for="drop-5" class="toggle">Staffs&nbsp;<i style={{color:'green'}} class='fas fa-angle-down'></i></label>
      <Link to="#">Staffs&nbsp;<i style={{color:'green'}} class='fas fa-angle-down'></i></Link>
      <input type="checkbox" id="drop-5"/>
      <ul>
        <li><Link to="/cdean">Dean</Link></li>
        <li><Link to="/superintendent">Superintendent</Link></li>
        <li><Link to="/teaching_staff">Teaching Staff</Link></li>
        <li><Link to="/nonTeaching_staff">Non-Teaching Staff</Link></li>
      </ul>
      </li>
      <li><Link  name='single' to="/gallery">Gallery</Link></li>
      <li><Link  name='single' to="/archives">Archives</Link></li>
      <li><Link  name='single' to="/analytics">Analytics</Link></li>

    </ul>
  </nav>
  <div class="chat_on" style={{position:'fixed',bottom:0,right:5,zIndex:1}}>
         <div id='chat' style={{display:'none'}}>
            <iframe
            allow="microphone;"
            width="350"
            height="350"
            src="https://console.dialogflow.com/api-client/demo/embedded/950e1d1f-af06-4760-abd1-fbec695161b5">
            </iframe>
         </div>
         <span class="chat_on_icon"><i id='chat_icon' style={{float:'right',color:'#003a9b',fontSize:'50px'}} class="fa fa-comments" aria-hidden="true" onClick={(evt)=>chatbot()}></i></span>
  </div>
</div>
}


function chatbot(){

  if(document.getElementById('chat').style.display==='none'){
    document.getElementById('chat').style.display='block';
    document.getElementById('chat_icon').className='fa fa-close';

    document.getElementById('chat_icon').style.float='left';
    document.getElementById('chat_icon').style.color='black';
    document.getElementById('chat_icon').style.fontSize='25px';


  }
  else {
    document.getElementById('chat').style.display='none';
    document.getElementById('chat_icon').className='fa fa-comments';

    document.getElementById('chat_icon').style.float='right';
    document.getElementById('chat_icon').style.color='#003a9b';
    document.getElementById('chat_icon').style.fontSize='50px';


  }


}
