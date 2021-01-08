import React from 'react'
import '../css/Homepage_Department.css'
import image from "../right_arrow_big.png";
import {Link} from 'react-router-dom';

export default class New_Department extends React.Component
{
    render()
    {
       return(
        <div id="homepage_dept_body">
            <div id="setMargin">
            <div id="pageTitle">Hospital Departments</div>
            <div class="row content">
             <div class="col-lg-6 col-md-6">
             <Link to="/department"><div class="strips">Pre-Clinical Department<img class="arrow" src={image}></img> </div></Link>
             <Link to="/department"><div class="strips">Parar-Clinical Department<img class="arrow" src={image}></img></div></Link>
             <Link to="/department"><div class="strips">Medical Specialties<img class="arrow" src={image}></img></div></Link>
             <Link to="/department"><div class="strips">Medical Super Specialties<img class="arrow" src={image}></img></div></Link>
                </div>
                <div class="col-lg-6 col-md-6">
                <Link to="/department"><div class="strips">Surgical Specialities<img class="arrow" src={image}></img></div></Link>
                <Link to="/department"><div class="strips">Surgical Super Specialities<img class="arrow" src={image}></img></div></Link>
                <Link to="/department"><div class="strips">Allied Services<img class="arrow" src={image}></img></div></Link>
                <Link to="/department"><div class="strips">HIV AIDS<img class="arrow" src={image}></img></div></Link>
                </div>
            </div>
            </div>
        </div>
        )
    }



}
