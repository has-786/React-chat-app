import '../css/navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar(props)
{
  return  <div>
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
          <li><a href="/">Home</a></li>
          <li>
              <label for="drop-1" class="toggle">About Us +</label>
              <a href="#">About us</a>
              <input type="checkbox" id="drop-1"/>
              <ul>
                  <li><a href="#">History</a></li>
                  <li><a href="#">Past Deans</a></li>
                  <li><a href="#">Organogram</a></li>
                  <li><a href="#">Committees</a></li>
              </ul>
          </li>
          <li><a href="#">Hospital</a></li>
          <li><a href="#">Departments</a></li>
          <li>
          <label for="drop-2" class="toggle">Academics +</label>
          <a href="#">Academics</a>
          <input type="checkbox" id="drop-2"/>
          <ul>
              <li><a href="/university">University</a></li>
              <li><a href="/admission">Admission</a></li>
              <li><a href="/result">Results</a></li>
              <li><a href="/academicActivities">Academic Activities</a></li>
          </ul>
          </li>
          <li>
          <label for="drop-3" class="toggle">Research & Resources +</label>
          <a href="#">Research & Resources</a>
          <input type="checkbox" id="drop-3"/>
          <ul>
              <li><a href="#">Recognition</a></li>
              <li><a href="#">Awards & Achievements</a></li>
          </ul>
          </li>
          <li>
          <label for="drop-4" class="toggle">Achievements +</label>
          <a href="#">Achievements</a>
          <input type="checkbox" id="drop-4"/>
          <ul>
              <li><a href="#">Journals</a></li>
              <li><a href="#">Useful Links</a></li>
              <li><a href="#">Educational Videos</a></li>
              <li><a href="#">Research Society</a></li>
              <li><a href="#">Research Publication</a></li>
          </ul>
          </li>
          <li>
          <label for="drop-5" class="toggle">Staffs +</label>
          <a href="#">Staffs</a>
          <input type="checkbox" id="drop-5"/>
          <ul>
              <li><a href="#">Dean</a></li>
              <li><a href="#">Superintendent</a></li>
              <li><a href="#">Teaching Staff</a></li>
              <li><a href="#">Non-Teaching Staff</a></li>
          </ul>
          </li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Archives</a></li>
      </ul>
  </nav>
</div>

}
