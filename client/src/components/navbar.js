import '../css/navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar(props)
{
  return  <div id='mainI'>
            <div id="imgBack">
              <center><img src="./assets/img/gallery/slogo.png"/></center>
              <div id="imgDiv">
                <h2>BYRAMJEE JEEJEEBHOY GOVERNMENT MEDICAL COLLEGE AND SASSOON GENERAL HOSPITALS, PUNE</h2>
              </div>
            </div>
   <nav>
  <label for="drop" class="toggle" style={{marginTop:'0px'}}>Menu</label>
  <input type="checkbox" id="drop" />
      <ul class="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="#">Hospital</Link></li>
          <li><Link to="#">Departments</Link></li>
          <li>
          <label for="drop-2" class="toggle">Academics +</label>
          <Link to="#">Academics</Link>
          <input type="checkbox" id="drop-2"/>
          <ul>
              <li><Link to="/university">University</Link></li>
              <li><Link to="/admission">Admission</Link></li>
              <li><Link to="/result">Results</Link></li>
              <li><Link to="/academicActivities">Academic Activities</Link></li>
          </ul>
          </li>
          <li>
          <label for="drop-3" class="toggle">Research & Resources +</label>
          <Link to="#">Research & Resources</Link>
          <input type="checkbox" id="drop-3"/>
          <ul>
              <li><Link to="#">Recognition</Link></li>
              <li><Link to="#">Awards & Achievements</Link></li>
          </ul>
          </li>
          <li>
          <label for="drop-4" class="toggle">Achievements +</label>
          <Link to="#">Achievements</Link>
          <input type="checkbox" id="drop-4"/>
          <ul>
              <li><Link to="#">Journals</Link></li>
              <li><Link to="#">Useful Links</Link></li>
              <li><Link to="#">Educational Videos</Link></li>
              <li><Link to="#">Research Society</Link></li>
              <li><Link to="#">Research Publication</Link></li>
          </ul>
          </li>
          <li>
          <label for="drop-5" class="toggle">Staffs +</label>
          <Link href="#">Staffs</Link>
          <input type="checkbox" id="drop-5"/>
          <ul>
              <li><Link to="#">Dean</Link></li>
              <li><Link to="#">Superintendent</Link></li>
              <li><Link to="#">Teaching Staff</Link></li>
              <li><Link to="#">Non-Teaching Staff</Link></li>
          </ul>
          </li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="#">Contact</Link></li>
          <li><Link to="#">Archives</Link></li>
      </ul>
  </nav>
</div>

}
