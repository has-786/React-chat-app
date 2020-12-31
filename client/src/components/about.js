import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import '../css/Research.css';
export default class About extends React.Component {
  constructor(props){
      super(props);
      this.state={ user:"",
                    show:{
                    history:{type:[

                    ] },

                    dean:{type:[
                      {srno:'1',name:'Dr. A.S. Labhsetwar',period:'08-05-2000 to 10-02-2003',subject:'Ophthalmology'},
                      {srno:'2',name:'Dr. S.G. Deshpande',period:'11-02-2003 to 31-05-2003',subject:'Skin VD'},
                      {srno:'3',name:'Dr. V.L. Yemul',period:'04-06-2003 to 30-09-2006',subject:'Microbiology'},
                      {srno:'4',name:'Dr. A.V. Jamkar',period:'01-10-2006 to 04-11-2007',subject:'Surgery'},
                      {srno:'5',name:'Dr. A.K. Malik',period:'05-11-2007 to 31-07-2008',subject:'Surgery'},
                      {srno:'6',name:'Dr. N.V. Dravid',period:'01-08-2008 to 06-08-2008',subject:'Pathology'},
                      {srno:'7',name:'Dr. A.V. Jamkar',period:'07-08-2008 to 28-08-2008',subject:'Surgery'},
                      {srno:'8',name:'Dr. N.G. Borade',period:'29-08-2008 to 22-03-2009',subject:'Physiology'},
                      {srno:'9',name:'Dr. A.V. Jamkar',period:'23-03-2009 to 20-12-2010',subject:'Surgery'},
                      {srno:'10',name:'Dr. Renu Bharadwaj',period:'21-12-2010 to 12-05-2011',subject:'Microbiology'},
                      {srno:'11',name:'Dr. Ajay S.Chandanwale',period:'13-05-2011 onwards',subject:'Orthopedics'}
                    ] },

                    organogram:{type:[
                      {designation:'Dean',name:'Dr. Ajay. S. Chandanwale',address:'D-401,R.K.Pride, New D.P.Road, Kothrud, Pune-411037',contact:'Tel:020-26102299020-6128000, Fax:02026126868, Cell:9420697474, Email:deanbjmcpune@gmail.com'},
                      {designation:'Dy.Dean (UG)',name:'Dr. Arun N. Kowale',address:'R-4, vijaygad, SBI CO-OP Hsg society shivtrith nagar,Paud road kothrud. Pune-411038',contact:'Tel:020-26102296, 020-6123872, Cell: 9960762233'},
                      {designation:'Dy. Dean (PG)',name:'Dr. Samir V. Joshi',address:'Hirai Niwas, 54/6A kothrud, Pune-411038.',contact:'Tel:020-26102206,Cell: 8329418074'},
                      {designation:'Vice.Dean (Administration)',name:'Dr. Muralidhar Tambe',address:'A/602,Gagan-Galaxy society,bibwewadi-Kondwa road, Pune-411037',contact:'Tel:020-26102302,020-29701044'},
                      {designation:'Medical Superintendent',name:'Dr. S. B. Punpale',address:'Flat no.201, B-9 Building Bhujbal Township nr.Eklavya College, Kothrud,Pune.411038',contact:'Tel:020-26102344, Cell:9422189531, Email:sbpunpale@gmail.com'},
                      {designation:'Dy. Medical Superintendent',name:'Dr. Manjeet Santre',address:'Rectors Bunglow,BJGMC Boys hostel, Pune-411001',contact:'Tel:020-26102203,020-26102461,Cell: 9423421455'},
                      {designation:'Administrative Officer (BJGMC / SGH)',name:'Mr. Ganesh N. Badadare',address:'Pollens Residences A-wing, Flat No.402, Kalepadal, Hadapsar-28',contact:'Tel:020-29700047,Cell: 9869676627'},
                      {designation:'Administrative officer (BJGMC)',name:'Mr. Suresh.V.Bonawale',address:'Flat no Samarth park hou-society mohanwadi, yerwada,pune-411006.',contact:'Tel:020-26102303,020-26130976,Cell: 9096632184.'},
                      {designation:'Administrative officer (SGH)',name:'Mr. Goroba.Y. Awate',address:'Gokul Nagari C Build Flat no-3,Tulgabhavani nagar pimple gurav pune-411061',contact:'Tel:020-26102202,020-26130962'},
                      {designation:'Office Superintendent (SGH)',name:'Mr. Sanjay B. Dahibhate',address:'Flat no-906, Saptagiri Appt. pancard road Pune-411035',contact:'Tel:020-26102422,Cell:9403532271'},
                      {designation:'Office Superintendent (Nursing)',name:'Mr. Sham. S. Teli',address:'Plot no-71-A Sahkar Vrund Society Paud Road pune-4110',contact:'Tel:020-26102231,Cell:9225501440'},
                      {designation:'Office Superintendent (SGH)',name:'Mr. P. M. Adhari',address:'19/321,Ram Society Yerwada, Pune-411006',contact:'Tel:020-26128000'}
                    ] },

                    committees:{type:[
                        {committees:"COMMITTEES.pdf"}
                    ]}
                  }}
                }

render(){
return(<div  id='mainBody'>
    <Navbar />

  <div>
    <section id="departments" class="departments">
      <div class="container">
      <div class="section-title">
        <h2>About Us</h2>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <ul class="nav nav-tabs flex-column">
            <li class="nav-item">
              <a class="nav-link active show" data-toggle="tab" href="#tab-1">History</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab-2">Past Dean</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab-3">organogram</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab-4"> committees</a>
            </li>


          </ul>
        </div>
        <div class="col-lg-9 mt-4 mt-lg-0">
          <div class="tab-content">
            <div class="tab-pane active show" id="tab-1">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>History</h3>
                  <p>Sassoon General Hospitals is a large state-run hospital in Pune, India with 1296 beds. It is affiliated to the B. J. Medical College and a Nurses training School. Sassoon Hospital caters to 9,426,959 population of Pune District- a 2nd most populous district in the State of Maharashtra.</p>

                  <p>The Jewish philanthropist David Sassoon from Mumbai made a generous donation to make the construction of the hospital possible in 1867. The hospital could originally accommodate 144 patients.</p>
                  <p>In year 1946 on 23rd June, B. J. Medical College was founded to replace erstwhile B. J. Medical School, with Shri. B. G. Kher the head of the Bombay Government, laying the foundation stone. This was the fulfilment of the vision of a far sighted Parsi philanthropist Byramjee Jeejeebhoy, to have an institution in Poona for training of doctors and providing medical facilities on par with those in Bombay. His generosity and munificence made it possible for the B.J. Medical School to start functioning from 1871 on land donated by him, and when the school was upgraded to the college in 1946, quite filtergly the name was retained. The medical course of MBBS was affiliated to the University of Poona (Pune) in 1949.</p>

                  <p>Pune had already been blessed by the generous contribution of Sassoon- a Jewish merchant family in the form of the David Sassoon Hospital (Old Sassoon Building) built at a cost of Rs. 213,000 serving the poor and needy from 1867, and the Jacob Sassoon Hospital constructed by his nephew in 1905-06 to relieve the congestion on the David Sassoon Hospital. Both were magnificent buildings, architectural marvels and the clock tower of David Sassoon Hospital, a landmark in the city. The campus had already been blessed by the presence of two great personalities - Avtar Meher Baba was born in the old maternity ward in the hospital, and the father of the nation, Mahatma, Gandhi was operated upon for emergency appendectomy in 1924 by a British Surgeon Col. Murdoch with an Indian anaesthetist Dr. Datey in attendance.</p>

                  <p>On this hallowed ground, came up the B. J. Medical college (BJMC) and the Sassoon Hospital (New Sassoon Building) facing each other with a unique architectural style of both buildings having two white pillars bearing elephant heads at the top. The main building of BJMC was inaugurated by Dr. Radha Krishnan in 1952.</p>

                </div>


                <div class="col-lg-4 text-center order-1 order-lg-2">
                  <img src="http://www.bjmcpune.org/oldbj1.jpg" alt="" class="img-fluid"/><br/><br/>
                <img src="http://www.bjmcpune.org/bjmc.jpg" alt="" class="img-fluid"/><br/><br/>
                  <img src="http://www.bjmcpune.org/bjmc2.jpg" alt="" class="img-fluid"/><br/><br/>
                  <img src="http://www.bjmcpune.org/arial.jpg" alt="" class="img-fluid"/><br/><br/>
                </div>



              </div>
            </div>
      <div class="tab-pane" id="tab-2">
              <div class="row">
                <div class="col-lg-12 details order-2 order-lg-1">
                <div id='dean'>
                 <div class="table-responsive">
                  <table class="table table-bordered table-hover table-striped">
                  <thead>
                   <tr>
                    <th>Sr.No</th>
                    <th>Name of Dean</th>
                    <th>Period</th>
                    <th>Subject</th>
                   </tr>
                 </thead>
                 <tbody>
                    {
                        this.state.show.dean.type.map(r=>{
                        return <tr>
                           <td>{r.srno}</td>
                        <td>{r.name}</td>
                        <td>{r.period}</td>
                        <td>{r.subject}</td>

                        </tr>})
                    }
                  </tbody>
               </table>
             </div>
           </div>
          </div>
        </div>



      </div>

      <div class="tab-pane" id="tab-3">
              <div class="row">
                <div class="col-lg-12 details order-2 order-lg-1">
                <div id='organogram'>
                 <div class="table-responsive">
                  <table class="table table-bordered table-hover table-striped">
                  <thead>
                   <tr>
                    <th>Designation</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact</th>
                   </tr>
                 </thead>
                 <tbody>
                    {
                        this.state.show.organogram.type.map(r=>{
                        return <tr>
                           <td>{r.designation}</td>
                        <td>{r.name}</td>
                        <td>{r.address}</td>
                        <td>{r.contact}</td>

                        </tr>})
                    }
                  </tbody>
               </table>
             </div>
           </div>
          </div>
        </div>
      </div>

<div class="tab-pane" id="tab-4">
  <div class="row">
    <div class="col-lg-12 details order-2 order-lg-1">
    <div>  {
              this.state.show.committees.type.map(r=>{
                 return <iframe src={r.committees} id="datamain" title="pdf" style={{width:"100%" ,height:"1000px" ,frameborder: "0", allowtransparency:"true" ,marginwidth:"0", marginheight:"0", hspace:"0", vspace:"0" ,scrolling:"No"}}></iframe>
              })}</div>
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
}
