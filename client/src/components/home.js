import Navbar from './navbar';
import '../css/home.css';
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import url from './url';
import Footer from './footer';
<<<<<<< HEAD
import New_Department from './Homepage_Department';
import UsefulLink from './UsefulLink';
import MainImg from './mainImg';
=======
>>>>>>> 21e240480bc20a179c77e4eb59ad9f48450d6ad4

export default function Home(props)
{
  const [usefulLink,setUsefulLink]=useState([]);
  const [newsUpdate,setNewsUpdate]=useState([]);

  useEffect(()=>{
    fetch(url+'/api/getDataForHome',{ method:'GET'})
         .then(response=>{ return response.json()})
         .then((body)=>{
                setUsefulLink(body.usefulLink);
                setNewsUpdate(body.newsUpdate);
          })
         .catch(err=>alert(JSON.stringify(err)));
  },[])

   return (  <div id="mainBody">
            <MainImg/>
         <Navbar/>
<div>
<section>
            <div class="row">
              <div class='col-lg-6 ' style={{paddingLeft:'20px',marginBottom:'20px'}} >
              <span style={{fontSize:'25px'}}>Useful links</span>
              <br></br><br></br>
{/*}                  <button  class='btn btn-success dropdown-toggle' data-toggle="collapse" data-target="#demo1"  style={{width:'100%'}}>Useful Links</button>
                  <div id="demo1" class="collapse" >*/}
                <div class='usefulLinks'>
                {/*
                        <a href="B.Sc. in PMT 1st Merit list13102020174055.pdf" target="new"><i class='fas fa-angle-right' style={{color:'green'}}></i>Merit- cum- Selection list for B.Sc. in Paramedical Technology course A.Y. 2020-21</a><br></br><br></br>
                        <a   href="B. Sc. in PMT Provisional Merit list 2020-21.pdf" target="new"><i class='fas fa-angle-right' style={{color:'green'}}></i>Provisional merit list of B. Sc. in PMT Merit list for A. Y. 2020-21</a><br></br><br></br>
                        <a   href="New Doc 2020-09-28.pdf" target="new"><i class='fas fa-angle-right' style={{color:'green'}}></i>PG DMLT Admission 2020 - 21</a><br></br><br></br>
                        <span id='more'>
                          <a  href="new doc 2020-03-24 14.41.59-20200324144406.pdf" target="new"><i class='fas fa-angle-right' style={{color:'green'}}></i>बै. जी. शासकीय वैद्यकीय महाविद्यालय व ससून सर्वोपचार रुग्णालय, पुणे - शरीररचनाशास्त्र विभाग - देहदनाविषयी सविस्तर माहिती</a><br></br><br></br>
                          <a   href="2nd list B.Sc in PMT.pdf" target="new"><i class='fas fa-angle-right' style={{color:'green'}}></i>2nd - Merit- cum- Selection list for B.Sc. in Paramedical Technology course A.Y. 2020-21</a><br></br><br></br>
                          <a   href="B.Sc. in PMT 1st Merit list13102020174055.pdf" target="new"><i class='fas fa-angle-right' style={{color:'green'}}></i>Merit- cum- Selection list for B.Sc. in Paramedical Technology course A.Y. 2020-21</a><br></br><br></br>
                          <a  href="B. Sc. in PMT Provisional Merit list 2020-21.pdf" target="new"><i class='fas fa-angle-right' style={{color:'green'}}></i>Provisional merit list of B. Sc. in PMT Merit list for A. Y. 2020-21</a><br></br><br></br>
                          <a href="New Doc 2020-09-28.pdf" target="new"><i class='fas fa-angle-right' style={{color:'green'}}></i>PG DMLT Admission 2020 - 21</a><br></br><br></br>
                          <a  href="new doc 2020-03-24 14.41.59-20200324144406.pdf" target="new"><i class='fas fa-angle-right' style={{color:'green'}}></i>बै. जी. शासकीय वैद्यकीय महाविद्यालय व ससून सर्वोपचार रुग्णालय, पुणे - शरीररचनाशास्त्र विभाग - देहदनाविषयी सविस्तर माहिती</a><br></br><br></br>
                          <a  href="2nd list B.Sc in PMT.pdf" target="new"><i class='fas fa-angle-right' style={{color:'green'}}></i>2nd - Merit- cum- Selection list for B.Sc. in Paramedical Technology course A.Y. 2020-21</a><br></br><br></br>
                        </span>*/}
                        {usefulLink.slice(0,3).map(l=>{
                        return <span>
                                <a  href={l.link} ><i class='fas fa-angle-right' style={{color:'green'}}></i>&nbsp;{l.body}</a>
                                <br></br><br></br>
                               </span>
                        })}
                        <span id='more'>
                        {usefulLink.slice(3,usefulLink.length).map(l=>{
                        return   <span><a href={l.link} > <i class='fas fa-angle-right' style={{color:'green'}}></i>&nbsp;{l.body}</a>
                                        <br></br><br></br>
                                  </span>
                        })}
                        </span>
                        <br></br>

                      <button  class='seemore' onClick={()=>myFunction()} class='seemore'  id="myBtn" >See More</button>
                {/*  </div>*/}
                  </div>
              </div>

              <div class='col-lg-6 newsupdates' style={{paddingLeft:'20px'}}>
              <span style={{fontSize:'25px'}}>Upcoming news and events</span>
              <br></br><br></br>

                    <div style={{float:'left'}}>
                    {newsUpdate.slice(0,3).map(l=>{
                    return  <span>
                    <p style={{font:'Roboto(regular) 14px',color:'#666666' }}><i class='fas fa-angle-right' style={{color:'green'}}></i>&nbsp;{l.body}</p><br></br><br></br>
                            </span>
                    })}
                  <span id='more1'>
                    {newsUpdate.slice(3,newsUpdate.length).map(l=>{
                    return  <span>
                    <p style={{font:'Roboto(regular) 14px',color:'#666666' }}><i class='fas fa-angle-right' style={{color:'green'}}></i>&nbsp;{l.body}</p>
                      <br></br><br></br>
                      </span>
                    })}
                    </span>
                      <button class='seemore' onClick={()=>myFunction1()} id="myBtn1" >See More</button>
                    </div>
              </div>
            </div>
          </section>
          <UsefulLink/>

          <section id="why-us" class="why-us">
          <div style={{padding:'10px'}}>

                     <div class="icon-boxes d-flex flex-column justify-content-center">
                       <div class="row">
                         <div  class="col-lg-3 d-flex align-items-stretch">
                           <div class="icon-box mt-4 mt-xl-0">
                             <i class="fa fa-hospital"></i>
                             <h4>Hospital</h4>
                             <Link  style={{textDecoration:'underline',color:'blue'}} to='/hospital'><p style={{color:'blue'}}>Show the facilities</p></Link>
                             <Link  style={{textDecoration:'underline',color:'blue'}} to='/hospital'><p style={{color:'blue'}}>How to book bed?</p></Link>

                           </div>
                         </div>

                         <div class="col-lg-3 d-flex align-items-stretch">
                           <div class="icon-box mt-4 mt-xl-0">
                             <i class="fas fa-graduation-cap"></i>
                             <h4>Admission</h4>
                             <Link  style={{textDecoration:'underline',color:'blue'}} to='/admission'><p style={{color:'blue'}}>UG and PG admissions</p></Link>
                             <Link  style={{textDecoration:'underline',color:'blue'}} to='/academicActivities'><p style={{color:'blue'}}>Academic activities in college</p></Link>
                           </div>
                         </div>
                         <div class="col-lg-3 d-flex align-items-stretch">
                           <div class="icon-box mt-4 mt-xl-0">
                             <i class="fas fa-award"></i>
                             <h4>Results</h4>
                             <a style={{textDecoration:'underline',color:'blue'}} href="http://bjmcpune.org/UGresults.zip" target="new">Check out UG Results</a><br></br><br></br>
                             <a style={{textDecoration:'underline',color:'blue'}} href="http://bjmcpune.org/PGresults.zip" target="new">Check out PG Results</a><br></br><br></br>
                             <a style={{textDecoration:'underline',color:'blue'}} href="http://www.bjmcpune.org/BSC%20IN%20PMT%20Result%20Winter%202018.pdf" target="new"> BSC IN PMT Result Winter 2018</a><br></br><br></br>
                             <a style={{textDecoration:'underline',color:'blue'}} href="http://www.bjmcpune.org/Result%20MBBS%20Winter%202018.pdf" target="new"> Result MBBS Winter 2018</a><br></br><br></br>
                          </div>
                         </div>
                         <div class="col-lg-3 d-flex align-items-stretch">
                           <div class="icon-box mt-4 mt-xl-0">
                             <i class="fas fa-book-reader"></i>
                             <h4>Research Activities</h4>

                             <Link to='/Research'><button style={{backgroundColor:'white',border:'1px solid grey',borderRadius:'5px',padding:'5px'}}>View</button></Link>
                           </div>
                         </div>
                       </div>
                     </div>
                </div>
             </section>
	<br></br><br></br>
      <New_Department />
  <br></br><br></br>

    <Footer/>

    </div>
  </div>);
}

function myFunction() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (btnText.innerHTML === "See less") {
    btnText.innerHTML = "See more";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "See less";
    moreText.style.display = "inline";
  }
}


function myFunction1() {
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (btnText.innerHTML === "See less") {
    btnText.innerHTML = "See more";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "See less";
    moreText.style.display = "inline";
  }
}
