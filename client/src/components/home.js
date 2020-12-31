import Navbar from './navbar';
import '../css/home.css';
import React from 'react';
import {Link} from 'react-router-dom';
import url from './url';
import Footer from './footer';
export default function Home(props)
{
   return (  <div id="mainBody">
         <Navbar/>

    <div>
	<section id="doctors" class="doctors">
        <div class="container">

          <div class="row">
            <div class="col-lg-6">
              <div class="member d-flex align-items-start">
                <div class='pic'><img src="assets/img/doctors/gandhi.jpg"  class="img-fluid" style={{zIndex:-1}} alt="" /></div>
                <div class="member-info">
                  <h4>MAHATMA GANDHI</h4>
                  <span>( October 2, 1869 – January 30, 1948)</span>
                  <p>Mahatma Gandhiji Was Operated for Appendicectomy on 12th January 1924</p>

                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-4 mt-lg-0">
              <div class="member d-flex align-items-start">
                <div class="pic"><img src="assets/img/doctors/david.jpg" class="img-fluid" style={{zIndex:-1}} alt="" /></div>
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


  <section id="why-us" class="why-us">
       <div class="container">

         <div class="row">
           <div class="col-lg-4 d-flex align-items-stretch">
             <div class="content">
               <h3>Know about us?</h3>
               <p>
                  Sassoon General Hospitals is a large state-run hospital in Pune, India with 1296 beds. It is affiliated to the B. J. Medical College and a Nurses training School.
               </p>
               <div class="text-center">
                 <Link to='/history' class="more-btn">Learn More <i class="bx bx-chevron-right"></i></Link>
               </div>
             </div>
           </div>
           <div class="col-lg-8 d-flex align-items-stretch">
             <div class="icon-boxes d-flex flex-column justify-content-center">
               <div class="row">
                 <div class="col-xl-4 d-flex align-items-stretch">
                   <div class="icon-box mt-4 mt-xl-0">
                     <i class="fa fa-hospital"></i>
                     <h4><Link  style={{color:'black'}} to='/hospital'>Hospital</Link></h4>
                     <p class="lead mb-0" style={{fontWeight:"bold"}}>See the details of Hospital</p>
                   </div>
                 </div>
                 <div class="col-xl-4 d-flex align-items-stretch">
                   <div class="icon-box mt-4 mt-xl-0">
                     <i class="fas fa-graduation-cap"></i>
                     <h4><Link style={{color:'black'}} to='/admission'>Admission</Link></h4>
                     <p>Get an admission here</p>
                   </div>
                 </div>
                 <div class="col-xl-4 d-flex align-items-stretch">
                   <div class="icon-box mt-4 mt-xl-0">
                     <i class="fas fa-book-reader"></i>
                     <h4><Link style={{color:'black'}} to='/research'>Research Activities</Link></h4>
                     <p>Check out the Research Activities done by us</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>

       </div>
     </section>

      <section id="services" class="services">
          <div class="container">
            <div class="row">
              <div class='col-lg-6' style={{marginBottom:'40px'}}>
              <p style={{ width:"100%",backgroundColor:'#2c4964',color:'white'}}>USEFUL LINKS</p>

{/*}                  <button  class='btn btn-success dropdown-toggle' data-toggle="collapse" data-target="#demo1"  style={{width:'100%'}}>Useful Links</button>
                  <div id="demo1" class="collapse" >*/}
                  <div id='links'>
                      <p ><a class='usefulLinks' href="B.Sc. in PMT 1st Merit list13102020174055.pdf" target="new">Merit- cum- Selection list for B.Sc. in Paramedical Technology course A.Y. 2020-21</a></p><br></br>
                      <p><a class='usefulLinks'  href="B. Sc. in PMT Provisional Merit list 2020-21.pdf" target="new">Provisional merit list of B. Sc. in PMT Merit list for A. Y. 2020-21</a></p><br></br>
                      <p><a class='usefulLinks'  href="New Doc 2020-09-28.pdf" target="new">PG DMLT Admission 2020 - 21</a></p><br></br>
                      <span id='more'>
                        <p><a class='usefulLinks'  href="new doc 2020-03-24 14.41.59-20200324144406.pdf" target="new">बै. जी. शासकीय वैद्यकीय महाविद्यालय व ससून सर्वोपचार रुग्णालय, पुणे - शरीररचनाशास्त्र विभाग - देहदनाविषयी सविस्तर माहिती</a></p><br></br>
                        <p><a class='usefulLinks'  href="2nd list B.Sc in PMT.pdf" target="new">2nd - Merit- cum- Selection list for B.Sc. in Paramedical Technology course A.Y. 2020-21</a></p><br></br>
                        <p><a class='usefulLinks'  href="B.Sc. in PMT 1st Merit list13102020174055.pdf" target="new">Merit- cum- Selection list for B.Sc. in Paramedical Technology course A.Y. 2020-21</a></p><br></br>
                        <p><a class='usefulLinks'  href="B. Sc. in PMT Provisional Merit list 2020-21.pdf" target="new">Provisional merit list of B. Sc. in PMT Merit list for A. Y. 2020-21</a></p><br></br>
                        <p><a class='usefulLinks'  href="New Doc 2020-09-28.pdf" target="new">PG DMLT Admission 2020 - 21</a></p>
                        <p><a class='usefulLinks'  href="new doc 2020-03-24 14.41.59-20200324144406.pdf" target="new">बै. जी. शासकीय वैद्यकीय महाविद्यालय व ससून सर्वोपचार रुग्णालय, पुणे - शरीररचनाशास्त्र विभाग - देहदनाविषयी सविस्तर माहिती</a></p><br></br>
                        <p><a class='usefulLinks'  href="2nd list B.Sc in PMT.pdf" target="new">2nd - Merit- cum- Selection list for B.Sc. in Paramedical Technology course A.Y. 2020-21</a></p><br></br>
                      </span>
                      <center><button class='btn btn-sm btn-secondary' onClick={()=>myFunction()} id="myBtn" style={{marginRight:'5px'}}>Read More</button></center>

                {/*  </div>*/}
                  </div>
              </div>

              <div class='col-lg-6'>
                <center>
                  <div>
                    <p style={{ width:"100%",backgroundColor:'#2c4964',color:'white'}}>UPCOMING NEWS & EVENTS</p>
                    <div id='links' style={{overflowY:'auto',height:'310px'}}>
                      <p>This is a sample scrolling text that has scrolls in the upper direction</p><br></br>
                      <p>This is a sample scrolling text that has scrolls in the upper direction</p><br></br>
                      <p>This is a sample scrolling text that has scrolls in the upper direction</p><br></br>
                      <p>This is a sample scrolling text that has scrolls in the upper direction</p><br></br>
                      <p>This is a sample scrolling text that has scrolls in the upper direction</p><br></br>
                      <p>This is a sample scrolling text that has scrolls in the upper direction</p><br></br>
                      <p>This is a sample scrolling text that has scrolls in the upper direction</p><br></br>
                      <p>This is a sample scrolling text that has scrolls in the upper direction</p><br></br>
                      <p>This is a sample scrolling text that has scrolls in the upper direction</p><br></br>
                    </div>
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
                <div class="pic"><img src="http://bjmcpune.org/dean2.jpg" class="img-fluid"/></div><br/>
                  <h5>Dr Ajay S. Chandanwale Dean</h5>
                </div>
              </div>

            <div class="col-lg-2 col-md-6 d-flex align-items-stretch">
                <div class="icon-box">
                <div class="pic"><img src="http://bjmcpune.org/index.4.jpg" class="img-fluid" alt="" /></div><br/>
                  <h5>Dr Rajesh Karyakarte Dy. Dean (UG)</h5>
                </div>
              </div>

              <div class="col-lg-2 col-md-6 d-flex align-items-stretch">
                <div class="icon-box">
                <div class="pic"><img src="http://bjmcpune.org/index.5.jpg" class="img-fluid" alt="" /></div><br/>
                  <h5>Dr. S. V. Joshi Dy. Dean (PG)</h5>
                </div>
              </div>

              <div class="col-lg-2 col-md-6 d-flex align-items-stretch">
                <div class="icon-box">
                <div class="pic"><img src="http://bjmcpune.org/tambe.jpg" class="img-fluid" alt="" /></div><br/>
                  <h5>Dr. M. P. Tambe Dy. Dean (Administration)</h5>
                </div>
              </div>

            <div class="col-lg-2 col-md-6 d-flex align-items-stretch">
                <div class="icon-box">
                <div class="pic"><img src="http://bjmcpune.org/Medical-Superintendent.jpg" class="img-fluid" alt="" /></div><br/>
                  <h5>Dr. Ajay A. Taware Medical Superintendent</h5>
                </div>
              </div>

              <div class="col-lg-2 col-md-6 d-flex align-items-stretch">
                <div class="icon-box">
                <div class="pic"><img src="http://bjmcpune.org/vj.jpg" class="img-fluid" alt="" /></div><br/>
                  <h5>Dr. Vijay Jadhav Dy. Medical Superintendent</h5>
                </div>
              </div>

          </div>
        </div>
      </section>
		<br></br><br></br>

    <Footer/>

    </div>
  </div>);
}

function myFunction() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (btnText.innerHTML === "Read less") {
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
