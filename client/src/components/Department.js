import React from 'react';
import Navbar from './navbar';
import Header from './header';
import "../css/New_Department.css"
import {Level1_expansion,Level2_expansion,menu_expansion} from './Department_javascript'
import PdfView from "./pdfView";
import image from "../right_arrow_small.png";
import url from "./url";

export default class Department extends React.Component {
    constructor(props){
        super(props);
        this.state={
            display:"",info:[

  {"name":"anatomy","link":"http://www.bjmcpune.org/ANATOMY.pdf"},
  {"name":"physiology","link":"http://www.bjmcpune.org/PHYSIOLOGY.pdf"},
  {"name":"biochemistry","link":"http://www.bjmcpune.org/BIOCHEMISTRY.pdf"},
  {"name":"microbiology","link":"http://www.bjmcpune.org/MICROBIOLOGY.pdf"},
  {"name":"forensicMedicine","link":"http://www.bjmcpune.org/FORENSIC%20MEDICINE.pdf"},
  {"name":"pharmacology","link":"http://www.bjmcpune.org/Website_Pharmacology_BJGMC%20Pune%202016_update_04-08-2016.pdf"},
  {"name":"communityMedicine","link":"http://www.bjmcpune.org/DEPT%20OF%20COMMUNITY%20MEDICINE.pdf"},
  {"name":"pathology","link":"http://www.bjmcpune.org/PATHOLOGY.pdf"},
  {"name":"generalMedicine","link":"http://www.bjmcpune.org/medicine.pdf"},
  {"name":"pediatrics","link":"http://www.bjmcpune.org/PEADIARICS.pdf"},
  {"name":"tuberculosis","link":"http://www.bjmcpune.org/CHEST%20TB.pdf"},
  {"name":"skin","link":"http://www.bjmcpune.org/SKIN.pdf"},
  {"name":"psychiatry","link":"http://www.bjmcpune.org/PSYCHIATRY.pdf"},
  {"name":"radiology","link":"http://www.bjmcpune.org/RADIODIAGNOSIS.pdf"},
  {"name":"anesthesiology","link":"http://www.bjmcpune.org/ANAESTHESIA.pdf"},
  {"name":"generalSurgery","link":"http://www.bjmcpune.org/SURGERY.pdf"},
  {"name":"orthopedics","link":"http://www.bjmcpune.org/ORTHOPEDICS.pdf"},
  {"name":"ophthalmology","link":"http://www.bjmcpune.org/Ophthalmology.pdf"},
  {"name":"otorhinolaryngology","link":"http://www.bjmcpune.org/ENT.pdf"},
  {"name":"obstetrics","link":"http://www.bjmcpune.org/OBSTRETICS%20AND%20GYENACOLOGY.pdf"},
  {"name":"cardiovascular","link":"http://www.bjmcpune.org/Department%20of%20CVTS.pdf"},
  {"name":"neuroSurgery","link":"http://www.bjmcpune.org/NEUROSURGERY.pdf"},
  {"name":"pediatricSurgery","link":"http://www.bjmcpune.org/PEDIATRIC%20SURGERY.pdf"},
  {"name":"plasticSurgery","link":"http://www.bjmcpune.org/PLASTIC%20SURGERY.pdf"},
  {"name":"urosurgery","link":"http://www.bjmcpune.org/Urology.pdf"},
  {"name":"dentistry","link":"http://www.bjmcpune.org/DENTAL.pdf"},
  {"name":"bloodBank","link":"http://www.bjmcpune.org/BLOOD%20BANK.pdf"},
  {"name":"eyeBank","link":"http://www.bjmcpune.org/EYE%20BANK.pdf"},
  {"name":"bioWaste","link":"http://www.bjmcpune.org/biomedical.pdf"}
            ]
    }
}

handleClick=name=>()=>{
    const elementsIndex = this.state.info.findIndex(element => element.name == name )

    this.setState({display:this.state.info[elementsIndex].link});
    menu_expansion('sidenav_list');

};

componentDidMount(){
    fetch(url+'/api/pdflinks',{ method:'GET'})
    .then(response=>{ return response.json()})
    .then((body)=>{
        this.setState({info:body});
     })
    .catch(err=>{});
}

    render(){
        return (<div id='mainBody'>
          <Header />
          <Navbar/>
        <section class="New_Department row">


            <nav class="side_navigation col-lg-3 col-md-3 ">

            <i style={{fontSize:'30px'}} class='fa fa-bars menu_collapse' onClick={(evt)=>menu_expansion('sidenav_list')}></i>
                <ul class="list-group sidenav_list"  >

                    {/*Department 1 Level1 */}
                    <li><a class="list-group-item list-group-item-action level1" data-toggle="list" onClick={e=>Level1_expansion('preClinicalSubitem')} ><img src={image}></img>Pre-Clinical Departments</a></li>
                    {/*Level 2 */}
                    <li><a class="list-group-item list-group-item-action level2 preClinicalSubitem" data-toggle="list" href="#Info1" onClick={this.handleClick('anatomy')}>Anatomy</a></li>
                    <li><a class="list-group-item list-group-item-action level2 preClinicalSubitem" data-toggle="list" href="#Info1" onClick={this.handleClick('physiology')}>Physiology</a></li>
                    <li><a class="list-group-item list-group-item-action level2 preClinicalSubitem" data-toggle="list" href="#Info1" onClick={this.handleClick('biochemistry')}>Biochemistry</a></li>

                    {/*Department 2 Level1 */}
                    <li><a class="list-group-item list-group-item-action level1" data-toggle="list"  onClick={e=>Level1_expansion('paraClinicalSubitem')}><img src={image}></img>Para-Clinical Department</a></li>
                    {/*Level 2 */}
                    <li><a class="list-group-item list-group-item-action level2 paraClinicalSubitem" data-toggle="list" href="#Info1" onClick={this.handleClick('microbiology')}>Microbiology</a></li>
                    <li><a class="list-group-item list-group-item-action level2 paraClinicalSubitem" data-toggle="list" href="#Info1" onClick={this.handleClick('forensicMedicine')}>Forensic Medicine</a></li>
                    <li><a class="list-group-item list-group-item-action level2 paraClinicalSubitem" data-toggle="list" href="#Info1" onClick={this.handleClick('pharmacology')}>Pharmacology</a></li>
                    <li><a class="list-group-item list-group-item-action level2 paraClinicalSubitem" data-toggle="list" href="#Info1" onClick={this.handleClick('communityMedicine')}>Community Medicine</a></li>
                    <li><a class="list-group-item list-group-item-action level2 paraClinicalSubitem" data-toggle="list" href="#Info1" onClick={this.handleClick('pathology')}>Pathology</a></li>


                    {/*Department 3 Level1 */}
                    <li><a class="list-group-item list-group-item-action level1" data-toggle="list"  onClick={e=>Level1_expansion('clinicalSubitem')}><img src={image}></img>Clinical Departments</a></li>
                    {/*Level 2 subitem 1*/}
                    <li><a class="list-group-item list-group-item-action level2 clinicalSubitem" data-toggle="list"  onClick={e=>Level2_expansion('medicalSpecialities')}><img src={image}></img>Medical Specialties</a></li>
                    {/*Level 3*/}
                    <li><a class="list-group-item list-group-item-action level3 medicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('generalMedicine')}>General Medicine</a></li>
                    <li><a class="list-group-item list-group-item-action level3 medicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('pediatrics')}>Pediatrics</a></li>
                    <li><a class="list-group-item list-group-item-action level3 medicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('tuberculosis')}>Tuberculosis and Chest Diseases</a></li>
                    <li><a class="list-group-item list-group-item-action level3 medicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('skin')}>Skin & V. D.</a></li>
                    <li><a class="list-group-item list-group-item-action level3 medicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('psychiatry')}>Psychiatry</a></li>
                    <li><a class="list-group-item list-group-item-action level3 medicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('radiology')}>Radiology</a></li>
                    <li><a class="list-group-item list-group-item-action level3 medicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('anesthesiology')}>Anesthesiology</a></li>

                    {/*Level 2 subitem 2*/}
                    <li><a class="list-group-item list-group-item-action level2 clinicalSubitem" data-toggle="list"  onClick={e=>Level2_expansion('medicalSuperSpecialities')}><img src={image}></img>Medical Super Specialties</a></li>
                     {/*Level 3*/}
                    <li><a class="list-group-item list-group-item-action level3 medicalSuperSpecialities" data-toggle="list" href="#ErrorInfo">Cardiology</a></li>
                    <li><a class="list-group-item list-group-item-action level3 medicalSuperSpecialities" data-toggle="list" href="#ErrorInfo">Neurology</a></li>
                    <li><a class="list-group-item list-group-item-action level3 medicalSuperSpecialities" data-toggle="list" href="#ErrorInfo">Nephrology</a></li>

                    {/*Level 2 subitem 3*/}
                    <li><a class="list-group-item list-group-item-action level2 clinicalSubitem" data-toggle="list"  onClick={e=>Level2_expansion('surgicalSuperSpecialities')}><img src={image}></img>Surgical Super Specialties</a></li>
                    {/*Level 3*/}
                    <li><a class="list-group-item list-group-item-action level3 surgicalSuperSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('cardiovascular')}>Cardiovascular and Thoracic Surgery</a></li>
                    <li><a class="list-group-item list-group-item-action level3 surgicalSuperSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('neuroSurgery')}>Neuro-Surgery</a></li>
                    <li><a class="list-group-item list-group-item-action level3 surgicalSuperSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('pediatricSurgery')}>Pediatric Surgery</a></li>
                    <li><a class="list-group-item list-group-item-action level3 surgicalSuperSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('plasticSurgery')}>Plastic Surgery</a></li>
                    <li><a class="list-group-item list-group-item-action level3 surgicalSuperSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('urosurgery')}>Urosurgery</a></li>

                    {/*Level 2 subitem 4*/}
                    <li><a class="list-group-item list-group-item-action level2 clinicalSubitem" data-toggle="list"  onClick={e=>Level2_expansion('surgicalSpecialities')}><img src={image}></img>Surgical Specialties</a></li>
                    {/*Level 3*/}
                    <li><a class="list-group-item list-group-item-action level3 surgicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('generalSurgery')}>General Surgery</a></li>
                    <li><a class="list-group-item list-group-item-action level3 surgicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('orthopedics')}>Orthopedics</a></li>
                    <li><a class="list-group-item list-group-item-action level3 surgicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('ophthalmology')}>Ophthalmology</a></li>
                    <li><a class="list-group-item list-group-item-action level3 surgicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('otorhinolaryngology')}>Otorhinolaryngology</a></li>
                    <li><a class="list-group-item list-group-item-action level3 surgicalSpecialities" data-toggle="list" href="#Info1" onClick={this.handleClick('obstetrics')}>Obstetrics & Gynecology</a></li>

                    {/*Level 2 subitem 5*/}
                    <li><a class="list-group-item list-group-item-action level2 clinicalSubitem" data-toggle="list"  onClick={e=>Level2_expansion('alliedServices')}><img src={image}></img>Allied Services</a></li>
                    {/*Level 3*/}
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#Info1" onClick={this.handleClick('dentistry')}>Dentistry</a></li>
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#ErrorInfo">Physiotherapy</a></li>
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#Info1" onClick={this.handleClick('bloodBank')}>Blood Bank</a></li>
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#Info1" onClick={this.handleClick('eyeBank')}>Eye Bank</a></li>
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#Info1" onClick={this.handleClick('bioWaste')}>Bio Medical Waste Management</a></li>
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#ErrorInfo">Disaster Management</a></li>
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#ErrorInfo" >Nursing</a></li>
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#ErrorInfo" >Body / Kidney / Organ donation</a></li>
                    <li><a class="list-group-item list-group-item-action level3 alliedServices" data-toggle="list" href="#Info1" onClick={this.handleClick('http://www.bjmcpune.org/OBSTRETICS%20AND%20GYENACOLOGY.pdf')}>Institute of Nursing education</a></li>

                    {/*Level 2 subitem 6*/}
                    <li><a class="list-group-item list-group-item-action level2 clinicalSubitem" data-toggle="list"  onClick={e=>Level2_expansion('hivAids')}><img src={image}></img>HIV AIDS</a></li>
                    {/*Level 3*/}
                    <li><a class="list-group-item list-group-item-action level3 hivAids" data-toggle="list" href="#ErrorInfo">ICTC</a></li>
                    <li><a class="list-group-item list-group-item-action level3 hivAids" data-toggle="list" href="#ErrorInfo">ART</a></li>


                </ul>
            </nav>

          <article class="col-lg-8 col-md-8">
            <header id="article_heading"> Departments</header>
            <br></br>
            
            <div class="tab-content">
            <div class="tab-pane fade col-lg-9 " id="Info1" >
                <PdfView link={this.state.display}/>
            </div>
            <div class="tab-pane fade col-lg-9 " id="ErrorInfo" >
               PDF NOT AVAILABLE !!!
            </div>
            </div>
        </article>

        </section>



        </div>)
    }
}
