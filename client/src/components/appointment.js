import Navbar from './navbar';
import '../css/navbar.css';
import '../css/home.css';
import React from 'react';
import {Link} from 'react-router-dom';
import url from './url';
import Footer from './footer';

export default function Appointment(props)
{
   return (
            <div id="mainBody">
            <Navbar/>
                <div>
<section id="appointment" class="appointment section-bg">
    <div class="container">


    <h2>Get an Appointment</h2><br/>

    <form action="forms/appointment.php" method="post" role="form" class="php-email-form">
        <div class="form-row">

        <div class="col-md-4 form-group">
        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
        <div class="validate"></div>
        </div>

        <div class="col-md-4 form-group">
        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
        <div class="validate"></div>
        </div>

        <div class="col-md-4 form-group">
        <input type="tel" class="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
        <div class="validate"></div>
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-4 form-group">
        <input type="datetime" name="date" class="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
        <div class="validate"></div>
        </div>
       <div class="col-md-4 form-group">
        <select name="department" id="department" class="form-control">
        <option value="">Select Department</option>
        <option value="Department 1">Cardiology</option>
        <option value="Department 2">Neurology</option>
        <option value="Department 3">Skin & V. D.</option>
        </select>
        <div class="validate"></div>
        </div>
        <div class="col-md-4 form-group">
        <select name="doctor" id="doctor" class="form-control">
        <option value="">Select Doctor</option>
        <option value="Doctor 1">Dr. B.H. Baheti</option>
        <option value="Doctor 2">Dr. A.D.Patil</option>
        <option value="Doctor 3">Dr.A.P.Gaikwad</option>
        </select>
        <div class="validate"></div>
        </div>
        </div>

        <div class="form-group">
            <textarea class="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
            <div class="validate"></div>
        </div>
            <div class="mb-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your appointment request has been sent successfully. Thank you!</div>
            </div>
        <div class="text-center"><button type="submit">Get an Appointment</button></div>
    </form>

    </div>
</section>

                </div>
                <Footer/>
            </div>

  );
}
