import React from 'react';
import Navbar from './navbar';

const superintendent = () => {
    return(<div id='mainBody'>
      <>
        <Navbar/>
        <div className="team-section">
        <div class="section-title">
        <h2>Superintendent</h2>
      </div>
        
        <span className="border"></span>
        <div className="ps">
          <a href="#"></a>
        </div>

        <div className="faculty-about">
          <span> 
            Dr. Satyanarayan Badrinarayan Punpale,
            MD (FMT), DCP, LLB
            Medical Superintendent
            Sassoon General Hospitals, Pune.
            <br/>
            Professor and Head, Department of Forensic Medicine and Toxicology,
            Byramjee Jeejeebhoy Government Medical College & Sassoon General Hospitals, Pune
          </span>
        </div>

        <span className="border"></span>
        <div className="faculty-details">
          <p>
            Dr. Satyanarayan Badrinarayan Punpale did his MBBS & MD in FMT (1978) of 
            Marathwada University from Government Medical College, Aurangabad. 
            Immediately thereafter he joined the public service as Lecturer and later 
            promoted as Professor at Govt. Medical College, Nanded in 2001. He is 
            currently working as Professor and Head of FMT department at this institute 
            since September 2009. He has also done Diploma in Clinical Pathology in 1985 
            from SRTR Medical College, Ambejogai and has also obtained his LLB in 1995 
            from Marathwada University. As an academician he has vast teaching experience 
            and has more than 20 research publication to his credit.
          </p>
        </div>

        <p>
            Address:<br/>
            Flat No. 201, B -9 Building,<br/>
            Bhujbal Township,<br/>
            Near Eklavya College,<br/>
            Kothrud, Pune, 411038<br/>
            Contact:<br/>
            Tel: 020 26102344<br/>
            Cell: +91 9422189531<br/><br/>

            Email: sbpunpale@gmail.com
          </p>
      </div>
      
      </>
      </div>
    )
}
 
export default superintendent;