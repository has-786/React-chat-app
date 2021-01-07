import React,{useState,useEffect} from 'react';
import './Hospital2.pdf'
import Navbar from './navbar';
import Footer from './footer';
import Header from './header';
import url from './url';
const Hospital = () => {
  const [hospital,setHospital]=useState("./Hospital2.pdf");

    useEffect(()=>{
      window.scrollTo(0,0);

      fetch(url+'/api/hospital',{ method:'GET'})
           .then(response=>{ return response.json()})
           .then((body)=>{
                setHospital(url+body.hospital);
              })
           .catch(err=>{});

    },[]);
    return(
      <div   id='mainBody'>
      <Header />

         <Navbar/>
      <section id="departments" class="departments">
        <div class="container">
            <div class="section-title">
              <h2>Hospital</h2>
              <p>Get all the details of Hospital here</p>
            </div>
            <div>
              <iframe src={hospital} id="datamain" title="pdf" style={{width:"70%" ,height:"600px" ,frameborder: "0", allowtransparency:"true" ,marginLeft:"15%", marginRight:"15%", hspace:"0", vspace:"0" ,scrolling:"No"}}></iframe>
            </div>
          </div>
         </section>
         <Footer/>
        </div>
    )
}
export default Hospital;
