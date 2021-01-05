import React from  'react';
import Navbar from './navbar';
import {Pie, Doughnut,Bar} from 'react-chartjs-2';
import Header from './header';

export default class Charts extends React.Component{
     constructor(props){
         super(props);
         this.state={
           ChartData:{
             Department:{
               labels:['Anatomy','Physiology','BioChemistry',
                     'Microbiology','Forensic Medicine','Community Medicine','Pharmocology','pathology',
                     'Psychiatry','Pediatrics','Cardiology','Neurology','General Surgery','Orthopedics',
                      'Neuro-Surgery','Pediatric Surgery','Dentistry','Physiotherapy','ICTC','ART'


                          ],
                 datasets:[{
                 label:"No of Staffs",
                 data:[18,16,13,16,6,25,29,61,25,18,52,33,22,37,28,3,1,7,6,12,15,10],
                 backgroundColor:[
                 'rgba(255,99,132,0.6)',
                 'rgba(255,99,132,0.6)',
                 'rgba(255,99,132,0.6)',

                 'rgba(54,162,235,0.6)',
                 'rgba(54,162,235,0.6)',
                 'rgba(54,162,235,0.6)',
                 'rgba(54,162,235,0.6)',
                 'rgba(54,162,235,0.6)',

                 'rgba(255,206,86,0.6)',
                 'rgba(255,206,86,0.6)',
                 'rgba(255,206,86,0.6)',
                 'rgba(255,206,86,0.6)',
                 'rgba(255,206,86,0.6)',
                 'rgba(255,206,86,0.6)',
                 'rgba(255,206,86,0.6)',
                 'rgba(255,206,86,0.6)',
                 'rgba(255,206,86,0.6)',
                 'rgba(255,206,86,0.6)',
                 'rgba(255,206,86,0.6)',
                 'rgba(255,206,86,0.6)',
                 'rgba(153,102,255,0.6)',
                  ]}]},



                 staff:{
                    labels:['Dean' ,'Teaching_Staff','Non_teaching','Superindentent'],
                    datasets:[{
                    label:"No of Staffs",
                    data:[1,226,131,20],
                    backgroundColor:[
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)',
                        'rgba(153,102,255,0.6)','rgba(255,159,64,0.6)'
                         ]}]},


                 result:{
                        labels:['No of Students Passed','No of Students failed'],
                        datasets:[{
                        label:"Results",
                        data:[85,15],
                        backgroundColor:[
                                'rgba(54,162,235,0.6)',
                                'rgba(255,99,132,0.6)',
                                'rgba(255,206,86,0.6)'

                                 ]}]}


            }}
          }


      render(){
         return(
          <div id='mainBody'>
          <Header />

          <Navbar/>
              <center>
              <div style={{width:"100%",height:'50%'}}>
              <Bar data={this.state.ChartData.Department}
               options={{
                   title:{display:true,text:"Departments",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Bar>
              </div>
              <br></br><br></br>
              <div style={{width:"100%",height:'50%'}}>
              <Pie data={this.state.ChartData.staff}
               options={{
                   title:{display:true,text:"Staff",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Pie>
              </div>
              <br></br><br></br>

              <div style={{width:"100%",height:'50%'}}>
              <Doughnut data={this.state.ChartData.result}
               options={{
                   title:{display:true,text:"Results",fontSize:25},
                   legend:{display:true,position:"right" },
                   maintainAspectRatio:true}}></Doughnut>
              </div>
              </center>

           </div>);
      }
  }
