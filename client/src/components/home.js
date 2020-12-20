import Header from './header';
import Navbar from './navbar';
import '../css/home.css';
import React from 'react';
import {Link} from 'react-router-dom';

export default function Home(props)
{
   return (
    <div>

 <h4 style={{backgroundColor:"beige",fontStyle:'bold',padding:"20px",marginTop:"0%"}}>
		<img src="http://bjmcpune.org/logo.png" class='img img-square' style={{float:"left",marginTop:"-10px",marginLeft:"0%",width:"60px" ,height:"60px"}}/>
					BYRAMJEE JEEJEEBHOY GOVERNMENT MEDICAL COLLEGE AND SASSOON GENERAL HOSPITALS, PUNE
   </h4>
      <div style={{marginTop:'0px'}}>
      <img src="https://images.pexels.com/photos/1080722/pexels-photo-1080722.jpeg" width="1600" height="250"/>
      </div>
      <Navbar/>
	  	<br></br><br></br>

    <div>
	<section id="doctors" class="doctors">
        <div class="container">

          <div class="row">
            <div class="col-lg-6">
              <div class="member d-flex align-items-start">
                <div class='pic'><img src="http://bjmcpune.org/gandhi.jpg"  class="img-fluid" style={{zIndex:-1}} alt="" /></div>
                <div class="member-info">
                  <h4>MAHATMA GANDHI</h4>
                  <span>( October 2, 1869 – January 30, 1948)</span>
                  <p>Mahatma Gandhiji Was Operated for Appendicectomy on 12th January 1924</p>

                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-4 mt-lg-0">
              <div class="member d-flex align-items-start">
                <div class="pic"><img src="http://bjmcpune.org/bj.png" class="img-fluid" style={{zIndex:-1}} alt="" /></div>
                <div class="member-info">
                  <h4>David Sassoon</h4>
                  <span> (October 1792 – November 7, 1864)</span>
                  <p>David Sassoon from Mumbai made a generous donation to make the construction of the hospital possible in 1867.</p><br />

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
	<br></br><br></br>

  <section class="features-icons bg-light text-center">
    <div class="container" >
      <div class="row">
        <div class="col-lg-6" style={{padding:"50px"}}>
          <div class="features-icons-item mx-auto mb-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
			        <i class='fa fa-hospital' style={{fontSize:"40px",color:"green"}}></i>
            </div>
            <h4 ><Link to='/hospital'>Hospital</Link></h4>
            <p class="lead mb-0" style={{fontWeight:"bold"}}>See the details of Hospital</p>
          </div>
        </div>

        <div class="col-lg-6" style={{padding:"50px"}}>
          <div class="features-icons-item mx-auto mb-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
			          <i class='fas fa-graduation-cap' style={{fontSize:"40px",color:"green"}}></i>
            </div>
            <h4><Link to='/admission'>Admission</Link></h4>
            <p class="lead mb-0" style={{fontWeight:"bold"}}>Get an admission </p>
          </div>
        </div>
      </div>


      <div class="row">
        <div class="col-lg-6" style={{padding:"50px"}}>
          <div class="features-icons-item mx-auto mb-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class='fas fa-book-reader' style={{fontSize:"40px",color:"green"}}></i>
            </div>
            <h4><Link to='/researchPublication'>Research Publications</Link></h4>
            <p class="lead mb-0" style={{fontWeight:"bold"}}>See our Research Publications</p>
          </div>
        </div>

        <div class="col-lg-6" style={{padding:"50px"}}>
          <div class="features-icons-item mx-auto mb-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <center><i class='fas fa-columns' style={{fontSize:"40px",color:"green"}}></i></center>
            </div>
            <h4><Link to='/department'>Departments</Link></h4>
            <p class="lead mb-0" style={{fontWeight:"bold"}}>Check all the Departments</p>
          </div>
         </div>
      </div>
	  </div>
  </section>
  <br></br><br></br>


      <section id="services" class="services">
          <div class="container">
            <div class="row">
              <div class='col-lg-6' style={{marginBottom:'40px'}}>
                  <button  class='btn btn-success dropdown-toggle' data-toggle="collapse" data-target="#demo1"  style={{width:'100%'}}>Useful Links</button>
                  <div id="demo1" class="collapse" >
                  <div id='links'>
                      <p ><a class='usefulLinks'  href="B.Sc. in PMT 1st Merit list13102020174055.pdf" target="new">Merit- cum- Selection list for B.Sc. in Paramedical Technology course A.Y. 2020-21</a></p><br></br>
                      <p><a class='usefulLinks'   href="B. Sc. in PMT Provisional Merit list 2020-21.pdf" target="new">Provisional merit list of B. Sc. in PMT Merit list for A. Y. 2020-21</a></p><br></br>
                      <p><a  class='usefulLinks'  href="New Doc 2020-09-28.pdf" target="new">PG DMLT Admission 2020 - 21</a></p><br></br>
                      <p><a class='usefulLinks'   href="new doc 2020-03-24 14.41.59-20200324144406.pdf" target="new">बै. जी. शासकीय वैद्यकीय महाविद्यालय व ससून सर्वोपचार रुग्णालय, पुणे - शरीररचनाशास्त्र विभाग - देहदनाविषयी सविस्तर माहिती</a></p><br></br>
                      <p><a class='usefulLinks'   href="2nd list B.Sc in PMT.pdf" target="new">2nd - Merit- cum- Selection list for B.Sc. in Paramedical Technology course A.Y. 2020-21</a></p><br></br>
                      <p><a class='usefulLinks'  href="B.Sc. in PMT 1st Merit list13102020174055.pdf" target="new">Merit- cum- Selection list for B.Sc. in Paramedical Technology course A.Y. 2020-21</a></p><br></br>
                      <p><a class='usefulLinks'  href="B. Sc. in PMT Provisional Merit list 2020-21.pdf" target="new">Provisional merit list of B. Sc. in PMT Merit list for A. Y. 2020-21</a></p><br></br>
                      <p><a class='usefulLinks'  href="New Doc 2020-09-28.pdf" target="new">PG DMLT Admission 2020 - 21</a></p>
                      <p><a class='usefulLinks'  href="new doc 2020-03-24 14.41.59-20200324144406.pdf" target="new">बै. जी. शासकीय वैद्यकीय महाविद्यालय व ससून सर्वोपचार रुग्णालय, पुणे - शरीररचनाशास्त्र विभाग - देहदनाविषयी सविस्तर माहिती</a></p><br></br>
                      <p><a class='usefulLinks'  href="2nd list B.Sc in PMT.pdf" target="new">2nd - Merit- cum- Selection list for B.Sc. in Paramedical Technology course A.Y. 2020-21</a></p><br></br>
                  </div>
                  </div>
              </div>

              <div class='col-lg-6'>
                <center>
                  <div>
                    <p style={{ width:"60%",backgroundColor:'grey',color:'white'}}>UPCOMING NEWS & EVENTS</p>
                    <marquee width="60%" direction="up" height="150px" style={{backgroundColor:'lightgrey',marginTop:'-10px'}}>
                      <p>This is a sample scrolling text that has scrolls in the upper direction</p>
                      <p>This is a sample scrolling text that has scrolls in the upper direction</p>
                      <p>This is a sample scrolling text that has scrolls in the upper direction</p>
                      <p>This is a sample scrolling text that has scrolls in the upper direction</p>
                    </marquee>
                  </div>
                </center>
              </div>

            </div>
          </div>
      </section>
	<br></br><br></br>




    <section id="services" class="services">
      <div class="container">


        <div class="row">

          <div class="col-lg-2 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
            <div class="pic"><img src="http://bjmcpune.org/dean2.jpg" class="img-fluid" alt="" /></div><br/>
              <h4>Dr Ajay S. Chandanwale Dean</h4>
             </div>
          </div>

         <div class="col-lg-2 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
            <div class="pic"><img src="http://bjmcpune.org/index.4.jpg" class="img-fluid" alt="" /></div><br/>
              <h4>Dr Rajesh Karyakarte Dy. Dean (UG)</h4>
             </div>
          </div>

          <div class="col-lg-2 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
            <div class="pic"><img src="http://bjmcpune.org/index.5.jpg" class="img-fluid" alt="" /></div><br/>
              <h4>Dr. S. V. Joshi Dy. Dean (PG)</h4>
             </div>
          </div>

          <div class="col-lg-2 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
            <div class="pic"><img src="http://bjmcpune.org/tambe.jpg" class="img-fluid" alt="" /></div><br/>
              <h4>Dr. M. P. Tambe Dy. Dean (Administration)</h4>
             </div>
          </div>

         <div class="col-lg-2 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
            <div class="pic"><img src="http://bjmcpune.org/Medical-Superintendent.jpg" class="img-fluid" alt="" /></div><br/>
              <h4>Dr. Ajay A. Taware Medical Superintendent</h4>
             </div>
          </div>

          <div class="col-lg-2 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
            <div class="pic"><img src="http://bjmcpune.org/vj.jpg" class="img-fluid" alt="" /></div><br/>
              <h4>Dr. Vijay Jadhav Dy. Medical Superintendent</h4>
             </div>
          </div>

        </div>

      </div>
    </section>
		<br></br><br></br>


      <div class="container d-md-flex py-4">

<div class="mr-md-auto text-center text-md-left">
  <div class="copyright">
    &copy; Copyright <strong><span>Sassoon hospital</span></strong>. All Rights Reserved
  </div>


</div>


      </div>
    </div>
    </div>);
}
