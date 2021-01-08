import Navbar from './navbar';
import '../css/home.css';
import React from 'react';
import {Link} from 'react-router-dom';
import url from './url';
export default function Footer(props)
{
   return (  <div className="footerClass">

<div class="mr-md-auto text-center text-md-left">
  <div class="copyright">
    &copy; 2020 <span> B. J. Medical College & Sassoon Hospital. All rights reseved. </span>
  </div>
</div>
<div class="social-links text-center text-md-right pt-3 pt-md-0">
  <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
  <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
  <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
  <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
  <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
</div>

  </div>);
}
