import React from 'react';
import Navbar from './navbar'
import "../css/Department_css.css"
import {Level1_expansion,Level2_expansion} from './Department_javascript'
import PdfView from "./pdfView";
import image from "../right_arrow_small.png";
import Header from './header';
import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';

export default class Department extends React.Component {
  constructor(){super(); this.sidenavbar=sidenavbar;       window.scrollTo(0,0);}
  state={link:""}
  handleClick=value=>()=>{
    sidenavbar();
    this.setState({link:value});
       };
    render(){
        return (<div id='mainBody'>
          <Header />
          <Navbar/>

          <i style={{fontSize:'30px'}} class='fa fa-bars burger' onClick={sidenavbar}></i>
          <i style={{fontSize:'10px',opacity:0}} class='fa fa-bars burger'  onClick={sidenavbar}></i>
        <section class="New_Department row">

            <nav class="side_navigation col-lg-3 col-md-3 mysidenavbar">


                <ul class="list-group sidenav_list "  >
                    {/*Department 1 Level1 */}
                    <li><a class="list-group-item list-group-item-action level1" data-toggle="list" onClick={e=>Level1_expansion('preClinicalSubitem')} ><img src={image}  ></img>Pre-Clinical Departments</a></li>
                    {/*Level 2 */}
                    <li><a class="list-group-item list-group-item-action level2 preClinicalSubitem" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/ANATOMY.pdf')}>Anatomy</a></li>
                    <li><a class="list-group-item list-group-item-action level2 preClinicalSubitem" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/PHYSIOLOGY.pdf')}>Physiology</a></li>
                    <li><a class="list-group-item list-group-item-action level2 preClinicalSubitem" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/BIOCHEMISTRY.pdf')}>Biochemistry</a></li>

                    {/*Department 2 Level1 */}
                    <li><a class="list-group-item list-group-item-action level1" data-toggle="list"  onClick={e=>Level1_expansion('paraClinicalSubitem')}><img src={image}></img>Para-Clinical Department</a></li>
                    {/*Level 2 */}
                    <li><a class="list-group-item list-group-item-action level2 paraClinicalSubitem" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/MICROBIOLOGY.pdf')}>Microbiology</a></li>
                    <li><a class="list-group-item list-group-item-action level2 paraClinicalSubitem" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/FORENSIC%20MEDICINE.pdf')}>Forensic Medicine</a></li>
                    <li><a class="list-group-item list-group-item-action level2 paraClinicalSubitem" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/Website_Pharmacology_BJGMC%20Pune%202016_update_04-08-2016.pdf')}>Pharmacology</a></li>
                    <li><a class="list-group-item list-group-item-action level2 paraClinicalSubitem" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/DEPT%20OF%20COMMUNITY%20MEDICINE.pdf')}>Community Medicine</a></li>
                    <li><a class="list-group-item list-group-item-action level2 paraClinicalSubitem" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>Pathology</a></li>


                    {/*Department 3 Level1 */}
                    <li><a class="list-group-item list-group-item-action level1" data-toggle="list"  onClick={e=>Level1_expansion('clinicalSubitem')}><img src={image}></img>Clinical Departments</a></li>
                    {/*Level 2 subitem 1*/}
                    <li><a class="list-group-item list-group-item-action level2 clinicalSubitem" data-toggle="list"  onClick={e=>Level2_expansion('medicalSpecialities')}><img src={image}></img>Medical Specialties</a></li>
                    {/*Level 3*/}
                    <li><a class="list-group-item list-group-item-action level3 medicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/medicine.pdf')}>General Medicine</a></li>
                    <li><a class="list-group-item list-group-item-action level3 medicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/PEADIARICS.pdf')}>Pediatrics</a></li>
                    <li><a class="list-group-item list-group-item-action level3 medicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/CHEST%20TB.pdf')}>Tuberculosis and Chest Diseases</a></li>
                    <li><a class="list-group-item list-group-item-action level3 medicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/SKIN.pdf')}>Skin & V. D.</a></li>
                    <li><a class="list-group-item list-group-item-action level3 medicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/PSYCHIATRY.pdf')}>Psychiatry</a></li>
                    <li><a class="list-group-item list-group-item-action level3 medicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/RADIODIAGNOSIS.pdf')}>Radiology</a></li>
                    <li><a class="list-group-item list-group-item-action level3 medicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/ANAESTHESIA.pdf')}>Anesthesiology</a></li>

                    {/*Level 2 subitem 2*/}
                    <li><a class="list-group-item list-group-item-action level2 clinicalSubitem" data-toggle="list"  onClick={e=>Level2_expansion('medicalSuperSpecialities')}><img src={image}></img>Medical Super Specialties</a></li>
                     {/*Level 3*/}
                    <li><a class="list-group-item list-group-item-action level3 medicalSuperSpecialities" data-toggle="list" href="#Info1">Cardiology</a></li>
                    <li><a class="list-group-item list-group-item-action level3 medicalSuperSpecialities" data-toggle="list" href="#Info1">Neurology</a></li>
                    <li><a class="list-group-item list-group-item-action level3 medicalSuperSpecialities" data-toggle="list" href="#Info1">Nephrology</a></li>

                    {/*Level 2 subitem 3*/}
                    <li><a class="list-group-item list-group-item-action level2 clinicalSubitem" data-toggle="list"  onClick={e=>Level2_expansion('surgicalSuperSpecialities')}><img src={image}></img>Surgical Super Specialties</a></li>
                    {/*Level 3*/}
                    <li><a class="list-group-item list-group-item-action level3 surgicalSuperSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/Department%20of%20CVTS.pdf')}>Cardiovascular and Thoracic Surgery</a></li>
                    <li><a class="list-group-item list-group-item-action level3 surgicalSuperSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/NEUROSURGERY.pdf')}>Neuro-Surgery</a></li>
                    <li><a class="list-group-item list-group-item-action level3 surgicalSuperSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/PEDIATRIC%20SURGERY.pdf')}>Pediatric Surgery</a></li>
                    <li><a class="list-group-item list-group-item-action level3 surgicalSuperSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/PLASTIC%20SURGERY.pdf')}>Plastic Surgery</a></li>
                    <li><a class="list-group-item list-group-item-action level3 surgicalSuperSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/Urology.pdf')}>Urosurgery</a></li>

                    {/*Level 2 subitem 4*/}
                    <li><a class="list-group-item list-group-item-action level2 clinicalSubitem" data-toggle="list"  onClick={e=>Level2_expansion('surgicalSpecialities')}><img src={image}></img>Surgical Specialties</a></li>
                    {/*Level 3*/}
                    <li><a class="list-group-item list-group-item-action level3 surgicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/SURGERY.pdf')}>General Surgery</a></li>
                    <li><a class="list-group-item list-group-item-action level3 surgicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/ORTHOPEDICS.pdf')}>Orthopedics</a></li>
                    <li><a class="list-group-item list-group-item-action level3 surgicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/Ophthalmology.pdf')}>Ophthalmology</a></li>
                    <li><a class="list-group-item list-group-item-action level3 surgicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/ENT.pdf')}>Otorhinolaryngology</a></li>
                    <li><a class="list-group-item list-group-item-action level3 surgicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/OBSTRETICS%20AND%20GYENACOLOGY.pdf')}>Obstetrics & Gynecology</a></li>

                    {/*Level 2 subitem 5*/}
                    <li><a class="list-group-item list-group-item-action level2 clinicalSubitem" data-toggle="list"  onClick={e=>Level2_expansion('alliedServices')}><img src={image}></img>Allied Services</a></li>
                    {/*Level 3*/}
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/DENTAL.pdf')}>Dentistry</a></li>
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#Info1">Physiotherapy</a></li>
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/BLOOD%20BANK.pdf')}>Blood Bank</a></li>
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/EYE%20BANK.pdf')}>Eye Bank</a></li>
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/biomedical.pdf')}>Bio Medical Waste Management</a></li>
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#Info1">Disaster Management</a></li>
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#Info1" >Nursing</a></li>
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#Info1" >Body / Kidney / Organ donation</a></li>
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#Info1" >Institute of Nursing education</a></li>

                    {/*Level 2 subitem 6*/}
                    <li><a class="list-group-item list-group-item-action level2 clinicalSubitem" data-toggle="list"  onClick={e=>Level2_expansion('hivAids')}><img src={image}></img>HIV AIDS</a></li>
                    {/*Level 3*/}
                    <li><a class="list-group-item list-group-item-action level3 hivAids" data-toggle="list" href="#Info1">ICTC</a></li>
                    <li><a class="list-group-item list-group-item-action level3 hivAids" data-toggle="list" href="#Info1">ART</a></li>
                </ul>
            </nav>

          <article class="col-lg-8 col-md-8">
            <header id="article_heading"> Departments</header>
            <br></br>
            <div class="tab-content">
            <div class="tab-pane fade col-lg-9 " id="Info1" >
                <PdfView link={this.state.link}/>
            </div>
            </div>
        </article>

        </section>



        </div>)
    }
}
