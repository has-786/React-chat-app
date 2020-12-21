import "./css/sidenavbardept.css"
import {Level1_expansion,Level2_expansion} from "./Javascript/sidenavbar_javascript";

/*export function Level1_expansion(param)
{
    document.getElementById(param).style.color="green";
}*/
export default function SideNavBarDept(props)
{

    return <nav class="navbar bg-dark navbar-dark">
        <ul class="navbar-nav navbar-brand " >
            {/*Department1 */}
            <li class="nav-item " onClick={e=>Level1_expansion('preClinicalSubitem')} >&gt; Pre-Clinical Departments</li>
            <ul class="navbar-nav collapsible level1 bg-success " id="preClinicalSubitem" >
                <li class="nav-item" id='ana' onClick={()=>props.changePDF('ana')}>Anatomy</li>
                <li class="nav-item">Physiology</li>
                <li class="nav-item">Biochemistry</li>
            </ul>
            {/*Department2 */}
            <li class="nav-item"  onClick={e=>Level1_expansion('paraClinicalSubitem')} >&gt; Para-Clinical Departments</li>
            <ul class="navbar-nav collapsible level1 bg-success" id="paraClinicalSubitem">
                <li class="nav-item">Microbiology</li>
                <li class="nav-item">Forensic Medicine</li>
                <li class="nav-item">Pharmacology</li>
                <li class="nav-item" >Community Medicine</li>
                <li class="nav-item">Pathology</li>
            </ul>
            {/*Department3 */}
            <li class="nav-item" onClick={e=>Level1_expansion('clinicalSubitem')}>&gt; Clinical Departments</li>
            <ul class="navbar-nav collapsible level1 bg-success" id="clinicalSubitem">
                <li class="nav-item" onClick={e=>Level2_expansion('medicalSubitem')}>&gt; Medical Specialties</li>
                <ul class="navbar-nav collapsible level2" id="medicalSubitem">
                    <li class="nav-item">General Medicine</li>
                    <li class="nav-item">Pediatrics</li>
                    <li class="nav-item">Tuberculosis and Chest Diseases</li>
                    <li class="nav-item">Skin & V. D.</li>
                    <li class="nav-item">Psychiatry</li>
                    <li class="nav-item">Radiology</li>
                    <li class="nav-item" >Anesthesiology</li>
                </ul>

                <li class="nav-item" onClick={e=>Level2_expansion('medicalSuperSubitem')}>&gt; Medical Super Specialties</li>
                <ul class="navbar-nav collapsible level2" id="medicalSuperSubitem">
                    <li class="nav-item">Cardiology</li>
                    <li class="nav-item">Neurology</li>
                    <li class="nav-item">Nephrology</li>
                </ul>

                <li class="nav-item" onClick={e=>Level2_expansion('surgicalSubitem')}>&gt; Surgical Specialties</li>
                <ul class="navbar-nav collapsible level2" id="surgicalSubitem">
                    <li class="nav-item"> General Surgery</li>
                    <li class="nav-item">Orthopedics</li>
                    <li class="nav-item">Ophthalmology</li>
                    <li class="nav-item">Otorhinolaryngology(ENT)</li>
                    <li class="nav-item">Obstetrics & Gynecology</li>
                </ul>

                <li class="nav-item" onClick={e=>Level2_expansion('surgicalSuperSubitem')}>&gt; Surgical Super Specialties</li>
                <ul class="navbar-nav collapsible level2" id="surgicalSuperSubitem">
                    <li class="nav-item"> Cardiovascular and Thoracic Surgery</li>
                    <li class="nav-item">Neuro-Surgery</li>
                    <li class="nav-item">Pediatric Surgery</li>
                    <li class="nav-item">Plastic Surgery</li>
                    <li class="nav-item">Urosurgery</li>
                </ul>

                <li class="nav-item" onClick={e=>Level2_expansion('alliedSubitem')}>&gt; Allied Services</li>
                <ul class="navbar-nav collapsible level2" id="alliedSubitem">
                    <li class="nav-item">Dentistry</li>
                    <li class="nav-item">Physiotherapy</li>
                    <li class="nav-item">Blood Bank</li>
                    <li class="nav-item">Eye Bank</li>
                    <li class="nav-item">Bio Medical Waste Management</li>
                    <li class="nav-item">Disaster Management</li>
                    <li class="nav-item">Nursing</li>
                    <li class="nav-item">Body / Kidney / Organ donation</li>
                    <li class="nav-item">Institute of Nursing education</li>
                </ul>

                <li class="nav-item" onClick={e=>Level2_expansion('hivSubitem')}>&gt; HIV-AIDS</li>
                <ul class="navbar-nav collapsible level2" id="hivSubitem">
                    <li class="nav-item">ICTC</li>
                    <li class="nav-item">ART</li>
                </ul>

            </ul>
        </ul>
    </nav>

}
