import React from 'react';
import Navbar from './navbar'
import '../css/Department_css.css'
import {Level1_expansion,Level2_expansion} from './Department_javascript'
import PdfView from "./pdfView";
export default class Department extends React.Component {
  state={link:""}
  handleClick=value=>()=>{
    this.setState({link:value});
       };
  render(){
  return (<><Navbar/>
        <section id="departments" class="departments">
          <div class="container">

            <div class="section-title">
              <h2>Departments</h2>
            </div>

            <div class="row">
              <div class="col-lg-3">
                <a href='#'>
                <ul class="nav nav-tabs flex-column ">
                  {/*Department 1 */}
                  <li class="nav-item level1" onClick={e=>Level1_expansion('preClinicalSubitem')}>
                    <a class="nav-link " data-toggle="tab" > &gt; &nbsp;Pre-Clinical Departments</a>
                  </li>

                  <li class="nav-item level2 preClinicalSubitem" >
                    <a class="nav-link " data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/ANATOMY.pdf')}>&nbsp;&nbsp;Anatomy</a>
                  </li>
                  <li class="nav-item level2 preClinicalSubitem" >
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PHYSIOLOGY.pdf')}>&nbsp;&nbsp;Physiology</a>
                  </li>
                  <li class="nav-item level2 preClinicalSubitem">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/BIOCHEMISTRY.pdf')}>&nbsp;&nbsp;Biochemistry</a>
                  </li>

                  {/* Department 2*/}
                  <li class="nav-item level1" onClick={e=>Level1_expansion('paraClinicalSubitem')}>
                    <a class="nav-link" data-toggle="tab" >&gt; &nbsp;Para-Clinical Department</a>
                  </li>
                  <li class="nav-item level2 paraClinicalSubitem">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/MICROBIOLOGY.pdf')}>&nbsp;&nbsp;Microbiology</a>
                  </li>
                  <li class="nav-item level2 paraClinicalSubitem">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/FORENSIC%20MEDICINE.pdf')}>&nbsp;&nbsp;Forensic Medicine</a>
                  </li>
                  <li class="nav-item level2 paraClinicalSubitem">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/Website_Pharmacology_BJGMC%20Pune%202016_update_04-08-2016.pdf')}>&nbsp;&nbsp;Pharmacology</a>
                  </li>
                  <li class="nav-item level2 paraClinicalSubitem">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/DEPT%20OF%20COMMUNITY%20MEDICINE.pdf')}>&nbsp;&nbsp;Community Medicine</a>
                  </li>
                  <li class="nav-item level2 paraClinicalSubitem">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;Pathology</a>
                  </li>

                  {/*Department 3 */}
                  <li class="nav-item level1" onClick={e=>Level1_expansion('clinicalSubitem')}>
                    <a class="nav-link" data-toggle="tab" >&gt; &nbsp;Clinical Departments</a>
                  </li>

                   {/*Department 3 Subitem1*/}
                  <li class="nav-item level2 clinicalSubitem" onClick={e=>Level2_expansion('medicalSpecialities')}>
                    <a class="nav-link" data-toggle="tab" >&nbsp;&nbsp;&gt;&nbsp;Medical Specialties</a>
                  </li>
                  <li class="nav-item level3 medicalSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/medicine.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;General Medicine</a>
                  </li>
                  <li class="nav-item level3 medicalSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PEADIARICS.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Pediatrics</a>
                  </li>
                  <li class="nav-item level3 medicalSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/CHEST%20TB.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Tuberculosis and Chest Diseases</a>
                  </li>
                  <li class="nav-item level3 medicalSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/SKIN.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Skin & V. D.</a>
                  </li>
                  <li class="nav-item level3 medicalSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PSYCHIATRY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Psychiatry</a>
                  </li>
                  <li class="nav-item level3 medicalSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/RADIODIAGNOSIS.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Radiology</a>
                  </li>
                  <li class="nav-item level3 medicalSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/ANAESTHESIA.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Anesthesiology</a>
                  </li>

                  {/*Department 3 Subitem2*/}
                  <li class="nav-item level2 clinicalSubitem" onClick={e=>Level2_expansion('medicalSuperSpecialities')}>
                    <a class="nav-link" data-toggle="tab" >&nbsp;&nbsp;&gt; &nbsp;Medical Super Specialties</a>
                  </li>
                  <li class="nav-item level3 medicalSuperSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Cardiology</a>
                  </li>
                  <li class="nav-item level3 medicalSuperSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Neurology</a>
                  </li>
                  <li class="nav-item level3 medicalSuperSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2"onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Nephrology</a>
                  </li>


                   {/*Department 3 Subitem3*/}
                  <li class="nav-item level2 clinicalSubitem" onClick={e=>Level2_expansion('surgicalSuperSpecialities')}>
                    <a class="nav-link" data-toggle="tab" >&nbsp;&nbsp;&gt; &nbsp;Surgical Super Specialties</a>
                  </li>
                  <li class="nav-item level3 surgicalSuperSpecialities">
                  <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Cardiovascular and Thoracic Surgery</a>
                  </li>
                  <li class="nav-item level3 surgicalSuperSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Neuro-Surgery</a>
                  </li>
                  <li class="nav-item level3 surgicalSuperSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Pediatric Surgery</a>
                  </li>
                  <li class="nav-item level3 surgicalSuperSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Plastic Surgery</a>
                  </li>
                  <li class="nav-item level3 surgicalSuperSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Urosurgery</a>
                  </li>

                  {/*Department 3 Subitem4*/}
                  <li class="nav-item level2 clinicalSubitem" onClick={e=>Level2_expansion('surgicalSpecialities')}>
                    <a class="nav-link" data-toggle="tab" >&nbsp;&nbsp;&gt; &nbsp;Surgical Specialties</a>
                  </li>
                  <li class="nav-item level3 surgicalSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;General Surgery</a>
                  </li>
                  <li class="nav-item level3 surgicalSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Orthopedics </a>
                  </li>
                  <li class="nav-item level3 surgicalSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Ophthalmology </a>
                  </li>
                  <li class="nav-item level3 surgicalSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Otorhinolaryngology (ENT)</a>
                  </li>
                  <li class="nav-item level3 surgicalSpecialities">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Obstetrics & Gynecology</a>
                  </li>

                  {/*Department 3 Subitem5*/}
                  <li class="nav-item level2 clinicalSubitem" onClick={e=>Level2_expansion('alliedServices')}>
                    <a class="nav-link" data-toggle="tab" >&nbsp;&nbsp;&gt; &nbsp;Allied Services</a>
                  </li>
                  <li class="nav-item level3 alliedServices">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Dentistry</a>
                  </li>
                  <li class="nav-item level3 alliedServices">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Physiotherapy </a>
                  </li>
                  <li class="nav-item level3 alliedServices">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Blood Bank</a>
                  </li>
                  <li class="nav-item level3 alliedServices">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Eye Bank</a>
                  </li>
                  <li class="nav-item level3 alliedServices">
                    <a class="nav-link" data-toggle="tab" href="#tab-2 " onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Bio Medical Waste Management</a>
                  </li>
                  <li class="nav-item level3 alliedServices">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Disaster Management</a>
                  </li>
                  <li class="nav-item level3 alliedServices">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Nursing</a>
                  </li>
                  <li class="nav-item level3 alliedServices">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Body / Kidney / Organ donation</a>
                  </li>
                  <li class="nav-item level3 alliedServices">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;Institute of Nursing education</a>
                  </li>


                 {/*Department 3 Subitem6*/}
                 <li class="nav-item level2 clinicalSubitem" onClick={e=>Level2_expansion('hivAids')}>
                    <a class="nav-link" data-toggle="tab"  >&nbsp;&nbsp;&gt; &nbsp;HIV AIDS</a>
                  </li>
                  <li class="nav-item level3 hivAids">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;ICTC</a>
                  </li>
                  <li class="nav-item level3 hivAids">
                    <a class="nav-link" data-toggle="tab" href="#tab-2" onClick={this.handleClick('http://www.bjmcpune.org/PATHOLOGY.pdf')}>&nbsp;&nbsp;&nbsp;&nbsp;ART </a>
                  </li>



                </ul>
                </a>
              </div>
            {/*To display pdf */}

          <div class="col-lg-9 mt-4 mt-lg-0">
            <div class="tab-content">


              <div class="tab-pane" id="tab-2">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                  <PdfView link={this.state.link}/>
                  </div>
                </div>
              </div>

        </div>
        </div>
        </div>
        </div>
        </section></>)

  }


}
