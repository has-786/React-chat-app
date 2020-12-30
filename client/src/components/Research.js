import react from 'react';
import Navbar from './navbar';
import '../css/Research.css';
import Footer from './footer';
function Research() {
  return(<div >
    <Navbar />

  <div>
    <section id="departments" class="departments">
      <div class="container">
      <div class="section-title">
        <h2>Research and Resources</h2>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <ul class="nav nav-tabs flex-column">
            <li class="nav-item">
              <a class="nav-link active show" data-toggle="tab" href="#tab-1">Journals</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab-2">Useful Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab-3">Educational Videos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab-4">Resource</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab-5">Publication</a>
            </li>

          </ul>
        </div>
        <div class="col-lg-9 mt-4 mt-lg-0">
          <div class="tab-content">
            <div class="tab-pane active show" id="tab-1">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>Journals</h3>
                  <table class="table table-striped" id="deans">
                   <thead>
                    <tr>
                    <th>e-Journal Websites</th>
                    </tr>
                   </thead>
                   <tbody>
                   <tr>
                       <td>Walters Kluwer</td>
                       <td><a href={"https://www.walterskluwer.com"}  target='_blank' style={{color:"black"}}>www.walterskluwer.com</a></td>
                  </tr>
                  <tr>
                       <td>Informatic</td>
                       <td><a href={"https://www.informindia.com"}  target='_blank'style={{color:"black"}}>www.informindia.com</a></td>
                  </tr>
                  <tr>
                     <td>Globe Pub</td>
                     <td><a href={"https://www.globepub.com"}  target='_blank' style={{color:"black"}}>www.globepub.com</a></td>
                   </tr>
                  <tr>
                     <td> Cambridge Pressb</td>
                     <td><a href={"https://www.cambridgeindia.org"}  target='_blank' style={{color:"black"}}>www.cambridgeindia.org</a></td>
                 </tr>
                 <tr>
                    <td> MD Counsult</td>
                    <td><a href={"https://www.MDConsult.com"}  target='_blank' style={{color:"black"}}>www.MDConsult.com</a></td>
                </tr>
                <tr>
                    <td> National Medical Library</td>
                    <td><a href={"https://www.nmlermed.in"}  target='_blank' style={{color:"black"}}>	www.nmlermed.in</a></td>
               </tr>
               <tr>
                   <td> W.H.O.</td>
                   <td><a href={"https://www.who.int"}  target='_blank' style={{color:"black"}}>www.who.int</a></td>
              </tr>
              <tr>
                   <td> Springer Journal</td>
                   <td><a href={"https://www.springerlink.com"}  target='_blank' style={{color:"black"}}>www.springerlink.com</a></td>
              </tr>
              <tr>
                   <td> Elsevier</td>
                   <td><a href={"https://	www.elsevier.com"}  target='_blank' style={{color:"black"}}>	www.elsevier.com</a></td>
              </tr>
              <tr>
                  <td> Free Medical Journal</td>
                  <td><a href={"https://	www.freemedicaljournal.com"}  target='_blank' style={{color:"black"}}>	www.freemedicaljournal.com</a></td>
              </tr>
              <tr>
                  <td> Elsevier Medical Pub</td>
                  <td><a href={"https://www.elsevierth.com"}  target='_blank' style={{color:"black"}}>www.elsevierth.com</a></td>
              </tr>
              <tr>
                   <td> Globellist of websites</td>
                   <td><a href={"https://	www.csen.comlmedicine/"}  target='_blank' style={{color:"black"}}>	www.csen.comlmedicine/</a></td>
               </tr>
              <tr>
                  <td> Pub Med Home Med</td>
                  <td><a href={"https://	www.ncbi.nlm.nih.gov/pyb"}  target='_blank' style={{color:"black"}}>	www.ncbi.nlm.nih.gov/pyb</a></td>
             </tr>
             <tr>
                <td> Oxford Journal</td>
                <td><a href={"https://www.elsevierth.com"}  target='_blank' style={{color:"black"}}>	www.oxfordjournals.org</a></td>
            </tr>
             <tr>
                <td> Wiley Interscience Jr.</td>
                <td><a href={"https://www3.interscience.wiley.com"}  target='_blank' style={{color:"black"}}>www3.interscience.wiley.com</a></td>
            </tr>
            <tr>
                 <td>America Ass Medi</td>
                 <td><a href={"https://jama.ama.assn.org"}  target='_blank' style={{color:"black"}}>jama.ama.assn.org</a></td>
            </tr>
            <tr>
                  <td> Academic Medicine</td>
                  <td><a href={"https://www.journals.com/academicmedicine"}  target='_blank' style={{color:"black"}}>www.journals.com/academicmedicine</a></td>
           </tr>
           <tr>
                 <td>Science Direct</td>
                 <td><a href={"https://www.sciencedirect.com"}  target='_blank' style={{color:"black"}}>www.sciencedirect.com</a></td>
          </tr>
          <tr>
                 <td> Medical information Resources</td>
                 <td><a href={"https://www.patient.co.uk/showdpc/22"}  target='_blank' style={{color:"black"}}>www.patient.co.uk/showdpc/22</a></td>
          </tr>
         <tr>
                <td> Medicine website Resources</td>
                <td><a href={"https://www.similima.com"} style={{color:"black"}}>www.similima.com</a></td>
        </tr>
        <tr>
            <td> Lippincott Williams & wilkins</td>
            <td><a href={"https://www.lww.com"}  target='_blank' style={{color:"black"}}>www.lww.com</a></td>
       </tr>
      <tr>
          <td> Medicine</td>
          <td><a href={"https://www.medicinejournal.com"}  target='_blank' style={{color:"black"}}>www.medicinejournal.com</a></td>
      </tr></tbody>
  </table>
</div>
</div>
</div>


<div class="tab-pane" id="tab-2">
  <div class="row">
    <div class="col-lg-12 details order-2 order-lg-1">
      <h3>USEFUL LINKS</h3>
        <table class="table table-bordered" id="deans">
          <tr>
            <td><a href={"http://in.groups.yahoo.com/group/jamkarstudents/"}  target='_blank' style={{color:"blue"}}>http://in.groups.yahoo.com/group/jamkarstudents/</a></td>
          </tr>
          <tr>
            <td><a href={"http://jamkarstudents.blogspot.com/2004_09_01_archive.html"}  target='_blank' style={{color:"blue"}}>http://jamkarstudents.blogspot.com/2004_09_01_archive.html</a></td>
          </tr>
        </table>
     </div>
  </div>
</div>

<div class="tab-pane" id="tab-3">
  <div class="row">
    <div class="col-lg-12 details order-2 order-lg-1">
      <h3>Educational Videos</h3>
        <div class="custom-posts__holder row">
          <div className="custom-posts__item post col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
	          <div className="post-inner">
		          <div className="post-thumbnail">
                <a href="https://www.youtube.com/embed/VfT--J-MZlM?rel=0"  target='_blank' className="post-thumbnail__link">
                        <img className="post-thumbnail__img" src="assets/img/lapro.jpg"
                        alt="Laproscopic Appendectomy" style={{width:"300px" ,height:"300px" , padding:"0px",border:"5px solid black"}}/></a></div>
		          <div className="post-content-wrap">
		 	          <div className="entry-header">
				          <h6 className="entry-title">
                    <a href="https://www.youtube.com/embed/VfT--J-MZlM?rel=0" title="Laproscopic Appendectomy"  target='_blank'>Laproscopic Appendectomy</a>
                  </h6>
                </div>
			          <div className="entry-content">
				          <p>Laproscopic Appendectomy is done in which 3 small incisions are made on the abdomen through which
                     Laproscopic instruments are inserted and an enlarged image is viewed on television monitor.</p>
                </div>
			          <div className="entry-footer">
			            <div className="entry-meta"></div>
			           </div>
		          </div>
	          </div>
          </div>

          <div className="custom-posts__item post col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
	          <div className="post-inner">
		          <div className="post-thumbnail">
                <a href="https://www.youtube.com/embed/hIYgrHWJiic?rel=0" className="post-thumbnail__link"  target='_blank'>
                <img className="post-thumbnail__img" src="assets/img/ureterocoel.jpg"
                alt="ureterocoel" style={{width:"300px" ,height:"300px", padding:"0px" ,border:"5px solid black"}}/></a></div>
		            <div className="post-content-wrap">
		 	            <div className="entry-header">
				            <h6 className="entry-title">
                      <a href="https://www.youtube.com/embed/hIYgrHWJiic?rel=0" title="ureterocoel" target='_blank'>ureterocoel</a>
                    </h6>
                  </div>
			            <div className="entry-content">
				            <p>A ureterocele is a congenital abnormality found in the ureter</p>
                  </div>
			            <div className="entry-footer">
			              	<div className="entry-meta"></div>
			            </div>
		            </div>
	           </div>
            </div>
          </div>
        </div>
      </div>
  </div>

  <div class="tab-pane" id="tab-4">
            <div class="row">
              <div class="col-lg-8 details order-2 order-lg-1">
                <h3>Resource</h3>
                <table class="table table-striped" id="deans">
    <thead>
      <tr>
        <th>Resources</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><a href={"https://www.slideshare.net/rsmehta/7-1-anesthesia"}  target='_blank' style={{color:"black"}}>Anaesthesia</a></td>
      </tr>
      <tr>
       <td><a href={"https://www.slideshare.net/anneodaro/blunt-abdominal-trauma-93870723"}   target='_blank' style={{color:"black"}}>Blunt Abd Trauma</a></td>
      </tr>
      <tr>
        <td><a href={"https://www.slideshare.net/riteshgjmptw/burns-ritesh"}  target='_blank' style={{color:"black"}}>Burns Overview</a></td>
      </tr>
      <tr>
        <td><a href={"https://www.google.com"}  target='_blank'  style={{color:"black"}}>Cancer Kidney An Overview MUHS Conference</a></td>
      </tr>
      <tr>
        <td><a href={"https://www.slideshare.net/docfazalhussain/obstructive-jaundice-22191573"}  target='_blank' style={{color:"black"}}>Case Of Obstructive Jaundice</a></td>
      </tr>
      <tr>
       <td><a href={"https://www.slideshare.net/jippyjack5/fluids-and-electrolytes-balance"}  target='_blank' style={{color:"black"}}>Fluid and Electrolyte</a></td>
      </tr>
      <tr>
       <td><a href={"https://www.slideshare.net/salmanhabeebek/head-injuryppt-75238809"}  target='_blank' style={{color:"black"}}>Head Injury</a></td>
      </tr>
      <tr>
       <td><a href={"https://www.slideshare.net/manalihsolanki/head-injury-ppt"}  target='_blank' style={{color:"black"}}>Head Injury No Images</a></td>
      </tr>
      <tr>
      <td><a href={"https://www.slideshare.net/drnareshms/hiv-and-surgeons"}  target='_blank' style={{color:"black"}}>HIV and Surgeon</a></td>
      </tr>
      <tr>
      <td><a href={"https://www.slideshare.net/verdahsabih/medical-instruments-45875175"}  target='_blank' style={{color:"black"}}>Know Your Instruments</a></td>
      </tr>
      <tr>
      <td><a href={"https://www.slideshare.net/sumeryadav/wound-management-29701222"}  target='_blank' style={{color:"black"}}>Management of Wound</a></td>
      </tr>
      <tr>
      <td><a href={"https://www.slideshare.net/sadrumohamed/wounds-47466389"}  target='_blank' style={{color:"black"}}>Management of Wound No Images</a></td>
      </tr>
      <tr>
      <td><a href={"https://www.muhs.ac.in/"}  target='_blank' style={{color:"black"}}>MUHS</a></td>
      </tr>
      <tr>
        <td><a href={"https://www.muhs.ac.in/"}  target='_blank' style={{color:"black"}}>MUHS 2003</a></td>
      </tr>
      <tr>
       <td><a href={"https://www.google.com"}  target='_blank' style={{color:"black"}}>OJS</a></td>
      </tr>
      <tr>
       <td><a href={"https://www.slideshare.net/mohamedrahilalhadithy/oral-cancer-61240139"}  target='_blank' style={{color:"black"}}>ORAL CANCER</a></td>
      </tr>
      <tr>
        <td><a href={"https://www.slideshare.net/mohamedrahilalhadithy/oral-cancer-61240139"}  target='_blank' style={{color:"black"}}>ORAL CANCER No Images</a></td>
      </tr>
      <tr>
        <td><a href={"https://www.slideshare.net/Resources234/shaping-your-future-22186342"}  target='_blank' style={{color:"black"}}>Shape Your Future</a></td>
      </tr>
      <tr>
        <td><a href={"https://www.google.com"}  target='_blank'style={{color:"black"}}>Surgery Update 2008</a></td>
      </tr>
     </tbody>
  </table>
</div>
</div>
</div>
<div class="tab-pane" id="tab-5">
              <div class="row">
                <div class="col-lg-12 details order-2 order-lg-1">
                <h3>Publications</h3>

                <div>
                <iframe src="publications3.pdf" id="datamain" title="pdf" style={{width:"100%" ,height:"600px" ,frameborder: "0", allowtransparency:"true" ,marginwidth:"0", marginheight:"0", hspace:"0", vspace:"0" ,scrolling:"No"}}></iframe>
              </div>
              </div>
            </div>
          </div>



      </div>

    </div>
    </div>
    </div>
  </section>
      <Footer/>
    </div>
</div>);
 }

 export default Research;
