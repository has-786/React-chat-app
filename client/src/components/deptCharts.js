import React from  'react';
import Navbar from './navbar';

import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';
import Header from './header';
import url from './url';
import {Pie} from 'react-chartjs-2';


export default class deptCharts extends React.Component{
     constructor(props){
         super(props);

         this.state={
           ChartData:{

                Anatomy:{
                    labels:['HOD','Assitant professor','Associate Professor'],
                    datasets:[{
                    label:"No of Staffs",
                    data:[2,7,4],
                    backgroundColor:[
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)',
                        'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                         ]}]},

                Physiology:{
                    labels:['HOD','Assitant professor','Associate Professor'],
                    datasets:[{
                    label:"No of Staffs",
                    data:[2,6,6],
                    backgroundColor:[
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                         'rgba(255,206,86,0.6)',
                         'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                                 ]}]},



                BioChemistry:{
                    labels:['HOD','Assitant professor','Associate Professor'],
                    datasets:[{
                    label:"No of Staffs",
                    data:[2,3,7],
                     backgroundColor:[
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)',
                        'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                     ]}]},

               Pathology:{
                   labels:['HOD','Assitant professor','Associate Professor'],
                   datasets:[{
                   label:"No of Staffs",
                   data:[2,12,8],
                  backgroundColor:[
                    'rgba(255,99,132,0.6)',
                    'rgba(54,162,235,0.6)',
                     'rgba(255,206,86,0.6)',
                     'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                ]}]},
                Orthopaedic:{
                    labels:['HOD','Assitant professor','Associate Professor'],
                    datasets:[{
                    label:"No of Staffs",
                    data:[1,3,7],
                   backgroundColor:[
                     'rgba(255,99,132,0.6)',
                     'rgba(54,162,235,0.6)',
                      'rgba(255,206,86,0.6)',
                      'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                 ]}]},
                 Microbiology:{
                    labels:['HOD','Assitant professor','Associate Professor'],
                    datasets:[{
                    label:"No of Staffs",
                    data:[2,5,7],
                   backgroundColor:[
                     'rgba(255,99,132,0.6)',
                     'rgba(54,162,235,0.6)',
                      'rgba(255,206,86,0.6)',
                      'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                 ]}]},
                 Pharmacology:{
                    labels:['HOD','Assitant professor','Associate Professor'],
                    datasets:[{
                    label:"No of Staffs",
                    data:[2,5,6],
                   backgroundColor:[
                     'rgba(255,99,132,0.6)',
                     'rgba(54,162,235,0.6)',
                      'rgba(255,206,86,0.6)',
                      'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                 ]}]},
                 Social_medicine:{
                    labels:['HOD','Assitant professor','Associate Professor'],
                    datasets:[{
                    label:"No of Staffs",
                    data:[2,8,7],
                   backgroundColor:[
                     'rgba(255,99,132,0.6)',
                     'rgba(54,162,235,0.6)',
                      'rgba(255,206,86,0.6)',
                      'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                 ]}]},
                 Forensic_medicine:{
                    labels:['HOD','Assitant professor','Associate Professor'],
                    datasets:[{
                    label:"No of Staffs",
                    data:[1,3,2],
                   backgroundColor:[
                     'rgba(255,99,132,0.6)',
                     'rgba(54,162,235,0.6)',
                      'rgba(255,206,86,0.6)',
                      'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                 ]}]},
                 Medicine:{
                    labels:['HOD','Assitant professor','Associate Professor'],
                    datasets:[{
                    label:"No of Staffs",
                    data:[1,15,6],
                   backgroundColor:[
                     'rgba(255,99,132,0.6)',
                     'rgba(54,162,235,0.6)',
                      'rgba(255,206,86,0.6)',
                      'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                 ]}]},
                 Pediatric:{
                    labels:['HOD','Assitant professor','Associate Professor'],
                    datasets:[{
                    label:"No of Staffs",
                    data:[1,8,3],
                   backgroundColor:[
                     'rgba(255,99,132,0.6)',
                     'rgba(54,162,235,0.6)',
                      'rgba(255,206,86,0.6)',
                      'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                 ]}]},
                 Tuberculosis:{
                    labels:['HOD','Assitant professor','Associate Professor'],
                    datasets:[{
                    label:"No of Staffs",
                    data:[1,4,1],
                    backgroundColor:[
                   'rgba(255,99,132,0.6)',
                   'rgba(54,162,235,0.6)',
                    'rgba(255,206,86,0.6)',
                    'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                  ]}]},
                Skin:{
                  labels:['HOD','Assitant professor','Associate Professor'],
                  datasets:[{
                  label:"No of Staffs",
                  data:[1,3,2],
                  backgroundColor:[
                  'rgba(255,99,132,0.6)',
                  'rgba(54,162,235,0.6)',
                  'rgba(255,206,86,0.6)',
                  'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                 ]}]},
                 Surgery:{
                 labels:['HOD','Assitant professor','Associate Professor'],
                 datasets:[{
                 label:"No of Staffs",
                 data:[1,16,9],
                 backgroundColor:[
                 'rgba(255,99,132,0.6)',
                 'rgba(54,162,235,0.6)',
                 'rgba(255,206,86,0.6)',
                 'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                ]}]},
                Ophthalmology:{
                labels:['HOD','Assitant professor','Associate Professor'],
                datasets:[{
                label:"No of Staffs",
                data:[1,3,3],
                backgroundColor:[
                 'rgba(255,99,132,0.6)',
                 'rgba(54,162,235,0.6)',
                 'rgba(255,206,86,0.6)',
                'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
               ]}]},
               ENT:{
               labels:['HOD','Assitant professor','Associate Professor'],
               datasets:[{
               label:"No of Staffs",
               data:[1,1,2],
               backgroundColor:[
                'rgba(255,99,132,0.6)',
                'rgba(54,162,235,0.6)',
                'rgba(255,206,86,0.6)',
                 'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
               ]}]},
               Gynaecology:{
               labels:['HOD','Assitant professor','Associate Professor'],
               datasets:[{
               label:"No of Staffs",
               data:[3,9,5],
               backgroundColor:[
                'rgba(255,99,132,0.6)',
                'rgba(54,162,235,0.6)',
                'rgba(255,206,86,0.6)',
               'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                ]}]},
                Anaesthesiology:{
                  labels:['HOD','Assitant professor','Associate Professor'],
                  datasets:[{
                  label:"No of Staffs",
                  data:[2,10,6],
                  backgroundColor:[
                   'rgba(255,99,132,0.6)',
                   'rgba(54,162,235,0.6)',
                   'rgba(255,206,86,0.6)',
                  'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                   ]}]},
                   RadioDiagnosis:{
                    labels:['HOD','Assitant professor','Associate Professor'],
                    datasets:[{
                    label:"No of Staffs",
                    data:[2,7,4],
                    backgroundColor:[
                     'rgba(255,99,132,0.6)',
                     'rgba(54,162,235,0.6)',
                     'rgba(255,206,86,0.6)',
                    'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                     ]}]},
                     Dental:{
                      labels:['HOD','Assitant professor','Associate Professor'],
                      datasets:[{
                      label:"No of Staffs",
                      data:[1,2,1],
                      backgroundColor:[
                       'rgba(255,99,132,0.6)',
                       'rgba(54,162,235,0.6)',
                       'rgba(255,206,86,0.6)',
                      'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                       ]}]},
                       Psychiatry:{
                        labels:['HOD','Assitant professor','Associate Professor'],
                        datasets:[{
                        label:"No of Staffs",
                        data:[1,2,2],
                        backgroundColor:[
                         'rgba(255,99,132,0.6)',
                         'rgba(54,162,235,0.6)',
                         'rgba(255,206,86,0.6)',
                        'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                         ]}]},
            }}
          }




    render(){
    window.scrollTo(0,0);

      return (<div id='mainBody'>

      <Header />
        <Navbar/>
        <i style={{fontSize:'30px'}} class='fa fa-bars burger' onClick={sidenavbar}></i>
        <i style={{fontSize:'20px',opacity:0}} class='fa fa-bars burger'  onClick={sidenavbar}></i>

      <section class="New_Department row">

          <nav class="side_navigation col-lg-3 mysidenavbar">
              <ul class="list-group sidenav_list">
                  <li><a class="list-group-item list-group-item-action active" data-toggle="list" href="#Info1"  onClick={sidenavbar}>Anatomy</a></li>
                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info2"  onClick={sidenavbar}>Physiology</a></li>
                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3"  onClick={sidenavbar}>BioChemistry</a></li>

                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info4"  onClick={sidenavbar}>Pathology</a></li>
                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info5"  onClick={sidenavbar}>Orthopaedic</a></li>
                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info6"  onClick={sidenavbar}> Microbiology</a></li>

                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info7"  onClick={sidenavbar}>Pharmacology </a></li>
                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info8"  onClick={sidenavbar}>Social_medicine</a></li>
                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info9"  onClick={sidenavbar}>Forensic_medicine </a></li>

                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info10"  onClick={sidenavbar}> Medicine</a></li>
                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info11"  onClick={sidenavbar}>Pediatric </a></li>
                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info12"  onClick={sidenavbar}> Tuberculosis</a></li>

                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info13"  onClick={sidenavbar}> Skin</a></li>
                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info14"  onClick={sidenavbar}>Surgery </a></li>
                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info15"  onClick={sidenavbar}>Ophthalmology</a></li>

                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info16"  onClick={sidenavbar}> ENT</a></li>
                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info17"  onClick={sidenavbar}>Gynaecology</a></li>
                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info18"  onClick={sidenavbar}>Anaesthesiology</a></li>

                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info19"  onClick={sidenavbar}> RadioDiagnosis</a></li>
                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info20"  onClick={sidenavbar}>Dental</a></li>
                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info21"  onClick={sidenavbar}>Psychiatry</a></li>







              </ul>
          </nav>
          <article class="col-lg-9">
          <header id="article_heading"> Departments</header>
          <br></br>
          <div class="tab-content">


          <div  class="tab-pane fade show active " id="Info1" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Anatomy}
               options={{
                   title:{display:true,text:"Anatomy staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>

          </div>





          <div div class="tab-pane fade" id="Info2" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Physiology}
               options={{
                   title:{display:true,text:"Physiology Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>


          </div>



          <div div class="tab-pane fade" id="Info3" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.BioChemistry}
               options={{
                   title:{display:true,text:" Biochemistry  Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>



          </div>



          <div  class="tab-pane fade" id="Info4" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Pathology}
               options={{
                   title:{display:true,text:"Pathology Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>

         </div>





          <div div class="tab-pane fade" id="Info5" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Orthopaedic}
               options={{
                   title:{display:true,text:"Orthopaedic Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>

          <div div class="tab-pane fade" id="Info6" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData. Microbiology}
               options={{
                   title:{display:true,text:" Microbiology Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>

          <div div class="tab-pane fade" id="Info7" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Pharmacology}
               options={{
                   title:{display:true,text:"Pharmacology Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>

          <div div class="tab-pane fade" id="Info8" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Social_medicine}
               options={{
                   title:{display:true,text:"Social_medicine Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>

          <div div class="tab-pane fade" id="Info9" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Forensic_medicine}
               options={{
                   title:{display:true,text:"Forensic_medicine Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>

          <div div class="tab-pane fade" id="Info10" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Medicine}
               options={{
                   title:{display:true,text:" Medicine Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>

          <div div class="tab-pane fade" id="Info11" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Pediatric}
               options={{
                   title:{display:true,text:"Pediatric Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>

          <div div class="tab-pane fade" id="Info12" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Tuberculosis}
               options={{
                   title:{display:true,text:" Tuberculosis Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>

          <div div class="tab-pane fade" id="Info13" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Skin}
               options={{
                   title:{display:true,text:"Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>

          <div div class="tab-pane fade" id="Info14" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Surgery}
               options={{
                   title:{display:true,text:"Surgery Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>

          <div div class="tab-pane fade" id="Info15" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Ophthalmology}
               options={{
                   title:{display:true,text:"Ophthalmology Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>

          <div div class="tab-pane fade" id="Info16" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.ENT}
               options={{
                   title:{display:true,text:"ENT Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>

          <div div class="tab-pane fade" id="Info17" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Gynaecology}
               options={{
                   title:{display:true,text:"Gynaecology Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>

          <div div class="tab-pane fade" id="Info18" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Anaesthesiology}
               options={{
                   title:{display:true,text:"Anaesthesiology Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>

          <div div class="tab-pane fade" id="Info19" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.RadioDiagnosis}
               options={{
                   title:{display:true,text:" RadioDiagnosis Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>

          <div div class="tab-pane fade" id="Info20" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Dental}
               options={{
                   title:{display:true,text:" Dental Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>
          <div div class="tab-pane fade" id="Info21" >
          <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.Psychiatry}
               options={{
                   title:{display:true,text:"Psychiatry Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
          </div>

   </div>
  </article>
</section>
</div>);
  }
}
