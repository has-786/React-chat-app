import React from 'react';
import './Hospital2.pdf'
import Navbar from './navbar';
import Footer from './footer';
const Hospital = () => {
    return(
      <div>
         <Navbar/>
      <section id="departments" class="departments">
        <div class="container">
            <div class="section-title">
              <h2>Hostpital</h2>
              <p>Get all the details of Hospital here</p>
            </div>
            <div>
              <iframe src="./Hospital2.pdf" id="datamain" title="pdf" style={{width:"70%" ,height:"600px" ,frameborder: "0", allowtransparency:"true" ,marginLeft:"15%", marginRight:"15%", hspace:"0", vspace:"0" ,scrolling:"No"}}></iframe>
            </div>
          </div>
         </section>
         <Footer/>
        </div>
    )
}
export default Hospital;
