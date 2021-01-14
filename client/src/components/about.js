import React from 'react';
import Navbar from './navbar';
import "../css/Homepage_Department.css";
import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';
import Header from './header';
import url from './url';
import "../css/about.css"
export default class About extends React.Component {

    constructor(props){
        super(props);

        /*states*/
        this.state={ user:"",
                      history:{type:[] },
                      
                      deans:{type:[
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

                      committees:"./COMMITTEES.pdf",
                      hospital:"./Hospital2.pdf"
                    }
    }

    /*database part*/
    componentDidMount()
    {
      window.scrollTo(0,0);
      fetch(url+'/api/about',{ method:'GET'})
              .then(response=>{ return response.json()})
              .then((body)=>{
                    this.setState({deans:{type:body.deans}});
                    this.setState({organogram:{type:body.organogram}});
                    this.setState({committees:url+body.committees});
                    this.setState({hospital:url+body.hospital});
              })
              .catch(err=>{});
    }

    render(){
        return (
        <div id='mainBody'>
          <Header />
          <Navbar/>

          {/*Side navbar*/ }
        <section class="New_Department row"  onClick={sidenavbar}>
        <i style={{fontSize:'30px'}} class='fa fa-bars burger' ></i>
          <nav class="side_navigation col-lg-3 mysidenavbar">
            <ul class="list-group sidenav_list">
              <li><a class="list-group-item list-group-item-action active" data-toggle="list" href="#Info1">
              <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;Hospital</a></li>
              <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info2">
              <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;History</a></li>
              <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3">
              <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;Organogram</a></li>
              <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info4">

              <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;Past Deans</a></li>
              <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info5">
              <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;Superintendent</a></li>
              <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info6">
              <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;Committees</a></li>
            </ul>
          </nav>

          <article class="col-lg-9">
            <header id="article_heading">About Us</header>
            <br></br>

            {/*Hospital*/ }
            <div class="tab-content">
              <div div class="tab-pane fade show active " id="Info1" >
                <p>Get all the details of Hospital here</p>
                <div>
                  <iframe src={this.state.hospital} id="datamain" title="pdf" style={{width:"100%" ,height:"1000px" ,frameborder: "0", allowtransparency:"true" ,marginwidth:"0", marginheight:"0", hspace:"0", vspace:"0" ,scrolling:"No"}}></iframe>
                </div>
              </div>

              {/*History*/ }
              <div div class="tab-pane fade" id="Info2" >
                <h3>History</h3>
                <div id="text_h">
                  <p>Sassoon General Hospitals is a large state-run hospital in Pune, India with 1296 beds. It is affiliated to the B. J. Medical College and a Nurses training School. Sassoon Hospital caters to 9,426,959 population of Pune District- a 2nd most populous district in the State of Maharashtra.</p>

                  <p>The Jewish philanthropist David Sassoon from Mumbai made a generous donation to make the construction of the hospital possible in 1867. The hospital could originally accommodate 144 patients.</p>
                  <p>In year 1946 on 23rd June, B. J. Medical College was founded to replace erstwhile B. J. Medical School, with Shri. B. G. Kher the head of the Bombay Government, laying the foundation stone. This was the fulfilment of the vision of a far sighted Parsi philanthropist Byramjee Jeejeebhoy, to have an institution in Poona for training of doctors and providing medical facilities on par with those in Bombay. His generosity and munificence made it possible for the B.J. Medical School to start functioning from 1871 on land donated by him, and when the school was upgraded to the college in 1946, quite filtergly the name was retained. The medical course of MBBS was affiliated to the University of Poona (Pune) in 1949.</p>

                  <p>Pune had already been blessed by the generous contribution of Sassoon- a Jewish merchant family in the form of the David Sassoon Hospital (Old Sassoon Building) built at a cost of Rs. 213,000 serving the poor and needy from 1867, and the Jacob Sassoon Hospital constructed by his nephew in 1905-06 to relieve the congestion on the David Sassoon Hospital. Both were magnificent buildings, architectural marvels and the clock tower of David Sassoon Hospital, a landmark in the city. The campus had already been blessed by the presence of two great personalities - Avtar Meher Baba was born in the old maternity ward in the hospital, and the father of the nation, Mahatma, Gandhi was operated upon for emergency appendectomy in 1924 by a British Surgeon Col. Murdoch with an Indian anaesthetist Dr. Datey in attendance.</p>

                    <div class="row">
                        <div class="column">
                            <img src="http://www.bjmcpune.org/oldbj1.jpg"/>
                        </div>
                        <div class="column">
                            <img src="http://www.bjmcpune.org/bjmc.jpg"/>
                        </div>
                    </div>

                  <p>On this hallowed ground, came up the B. J. Medical college (BJMC) and the Sassoon Hospital (New Sassoon Building) facing each other with a unique architectural style of both buildings having two white pillars bearing elephant heads at the top. The main building of BJMC was inaugurated by Dr. Radha Krishnan in 1952.</p>
                  <p>The first Principal of the B. J. Medical College, which started with 50 students, was Dr. B. B. Dikshit, a renowned academician and the quiet mastery of Dr. Bhende, discipline of Dr. Balwani have left an indelible imprint on the young impressionable minds of innumerable students, in their formative years, who in turn have imbibed these sterling qualities to give back the best to society. For many years annually 200 students are admitted for MBBS graduation and 143 for postgraduation. At any given time now 1700 students are on the campus with more than 2000 staff including 268 faculties. Presently, courses of MBBS, MD, MS, PhD, Diplomas, MCh (CVTS), MSc, GNM, BSc Nursing, DMLT, PGDMCH, and PGDGM are offered here.
                      Along the journey of learning the art and science, commerce of medicine, strong values were inculcated, attitudes shaped friendships forged minds were moulded and personalities groomed to give rise to renowned 'personalities' who carved a niche for themselves, in the world.</p>
                  <p>While on one hand many have reached dizzying heights of success and excellence in their chosen profession winning international acclaim, on the other hand, we have some for their unforgettable contribution to cinema and theatre. We have among â€˜BJitesâ€™, dramatists trailing a blaze of glory, keen photographers clicking away, nature lover's trekking their way to the wild, litterateurs penning their thoughts in prose and poetry mountaineers climbing new heights and musicians rocking the stage. BJMC even finds a place in the political scenario with doctor politicians and astute administrators. The firm groundwork laid by Dr. Dikshit and his successor Dr. B. M. Desai, in establishing a rich tradition of excellent teaching, notable research and devoted service has been continued and built upon by successive eminent Deans, up to Dr. Ajay S. Chandanwale, in the present day. Their efforts to retain the good old values, while bringing in the new have resulted in our institution attaining a position of pre-eminence, rated among the top ten medical colleges in India.</p>
                  <p>The sincerity, devotion, single minded love for teaching of countless teachers has rubbed off on successive batches of students, who endeavour to emulate them. While some have entered academics, the second generation teachers are passing on the legacy to the current generation of students while others are providing yoman service of relieving suffering of patients to society. BJMC has given various social activists to the society. Those who have reached the pinnacles of glory in their professional organisations have brought laurels and given name and fame to our institution.</p>

                    <div class="row">
                        <div class="column">
                            <img src="http://www.bjmcpune.org/bjmc2.jpg" />
                        </div>
                        <div class="column">
                            <img src="http://www.bjmcpune.org/arial.jpg"/>
                        </div>
                    </div>

                  <p>The next generations of â€˜BJitesâ€™ are closely following in the footsteps of their parents. Above all, Dr. Dikshitâ€™s path breaking research contribution to the role of acetylcholine in sleep and Dr. Bhende's discovery of the Bombay blood group have etched their names for posterity, Sassoon Hospital had its name in the Jablonski's Dictionary of syndromes, for the syndrome discovered and named after it, by Dr. Ganla and Dr. M. J. Narsimhan.</p>
                  <p>After the centenary celebrations of Sassoon Hospital in 1968, the staff society was born, thanks to the efforts of research minded academicians Dr. Deodhar, Dr. Mutalik and others to provide a platform for sharing and exchange of research work at Staff conferences. The staff society was merged with the newly formed Research Society to boost interdepartmental research and provide a forum for young researches to present their work and publish it in the Research Society Journal 'Medical Journal of Western India. Both are running in full stream and have provided a stepping board for young staff members and students to pursue a career in research. The next two decades saw the expansion of departments and extension of Spheres of activity Several speciality clinics were started. The third decade saw the bifurcation of departments Allied disciplines became full-fledged departments.</p>
                  <p>The last two decades mark the spreading of wings. Collaborative research through funding agencies like the ICMR and DST took off in a big way. Tribal Research Programme was initiated by the Government of Maharashtra. The Maharashtra Institute of Mental Health - an apex training and research institute was set up in 1991. Outreach services in mental health, preventive medicine, human reproduction research, tribal research, through national agencies like ICMR, and international agencies like WHO and UNICEF got underway, with the initiation of large scale research projects the Institutional Ethics Committee was born. Taking services beyond the boundaries of the institution the Pharmacology Department started publishing quarterly Drug Bulletins 'Drugs News and Views' from 1993 and has been conducting CMES for general practitioner. The Microbiology Department started surveillance services for communicable diseases.
                      1996 marked the glorious Golden Jubilee of our institution, and plans for renovation of the college library got underway. In a few years the Central Library was transformed into a state of the art 'Library Services Department.' Following the Golden Jubilee, a number of new facilities - diagnostic and therapeutic have been setup - the CT scan, Nuclear Medicine Department, Cardiac Catheterisation Lab, Cardiovascular Thoracic Surgery Unit, the Leptospirosis Diagnostic Lab among others. The Infosys Super speciality Building in the campus is catering to super speciality services for patients.</p>
                  <p>In 1998, new era of collaborative international research started in BJMC. Dr. M. A. Phadke, then Dean, collaborated with Dr. Robert C. Bollinger from Johns Hopkins University (JHU), USA. National Institute of Health (NIH) USA funded the jointly made grant application. Dr. Ramesh A. Bhosale after training in JHU started this work with Dr. K. E. Bharucha then Head of Obstetrics and Gynecology Department. Six Week Extended Nevirapine (SWEN) study was conducted with this grant over the period of 2002-2007 for prevention of mother to infant transmission of HIV. This landmark study was published in Lancet (2008) which made impact leading to modification of guidelines by WHO for prevention of mother to infant transmission of HIV in breastfeeding population in resource poor areas. This gave BJMC the capability of international grade research.
                      After this successful demonstration of research capability, NIH USA granted Clinical Trial Unit to BJMC in collaboration with JHU for 2008-2014. BJMC-JHU application in response to RFA of NIH, topped in first five amongst all applications from world over. Now in BJMC multiple study protocols of research networks of ACTG and IMPAACT are being implemented successfully under BJMC CTU lead by Dr. Ajay S. Chandanwale as Principal Investigator.</p>
                  <p>Various other projects are completed by BJMC viz. Vanderbilt University USA-NARI-BJMC collaborative project on Cancer Cervix Screening in HIV under Dr. Ramesh A. Bhosale Professor and Head of Department of Obstetrics and Gynecology, WHO Cardiovascular Disease surveillance project, International Clinical Epidemiology Network project for MDR TB surveillance, IDSP Training & pilot center, NACO Training Center for : MOs, Technicians & Counselors, etc.
                    In year 2005, through National AIDS Control Organization (NACO) HIV treatment center (ART) was started giving treatment free of charge. Presently more than 24000 HIV infected patients are registered in the ART center and about 12000 are on free ART. This center is the second best in India and lead by Nodal Officer Prof. Dr. D. B. Kadam. BJMC is recognised Government TB treatment center having 4000 tuberculosis patients/suspects per year.</p>
                  <p>BJMC and alumni celebrated Diamond Jubilee of BJMC in year 2006 which gave impetus to alumni association. Government of Maharashtra gave the special fund for BJMC through which an 11 storied new building with 26000 sq m built up area is presently being constructed.</p>
                  <p>BJMC fought the outbreak of 2009 H1N1 (Swine flu) in Maharashtra. Pune was epicentre of the outbreak and BJMC served as tertiary level facility for critical care of swine flu patients under able leadership of Dr. D. B. Kadam, Professor and Head of the Department of Medicine. Dr. D. B. Kadam and his team developed a novel â€˜Pune management protocolâ€™ for swine flu which was accepted nation-wide.
                    In February 2010, BJMC and Sassoon General Hospital promptly handled the casualties of German Bakery bomb blast. Thereafter, BJMC developed a comprehensive disaster management plan for the city of Pune.
                    BJMC has given two Vice Chancellors to the Maharashtra University of Health Sciences (MUHS- a State Medical University), i.e. Dr. M. A. Phadke and Dr. Arun V. Jamkar. Both of them have served as Dean of BJMC. Dr. Arun Jamkar is the present VC of MUHS.</p>
                    <div class="row">
                        <div class="column">
                            <img src="http://www.bjmcpune.org/bjmc3.jpg" />
                        </div>
                        <div class="column">
                            <img src="http://www.bjmcpune.org/bjmc4.jpg"/>
                        </div>
                    </div>
                  <p>Dr, Ajay S. Chandanwale took over as Dean in May 2011. NIH USA granted Clinical Trial Unit to BJMC in collaboration with JHU for 2008-2014 completed successfully its tenure with many studies completed and some underway. NIH USA further granted further continuation to Clinical Trial Unit to BJMC in collaboration with JHU for 2014-2020.
                    Hon. US Secretary Kathleen Sebelius, Department of Health and Human Services, Government of United States of America and her Delegation, specially visited BJMC and a presentation on â€˜Indo-US Research Collaboration of BJMCâ€™ was made to her in Padmashri Karmaveer Dr. Bhaurao Patil Memorial Hall on 14th Jan 2012.
                    Kitchen of Sassoon Hospital was renovated into the state-of-the-art one with automatic machines and civil make over through generous donation over 1.5 crores by â€˜Shrimant Dagadusheth Halwai Ganapati Trust, Puneâ€™. In addition this trust has undertaken to provide free quality food to all patients under their supervision every year. This facility was inaugurated at hands of Deputy Chief Minister of Maharashtra State Shri. Ajit Pawar.</p>
                  <p>Construction of new water tank for SGH having 12 lakh Litres capacity was completed with total expenditure of Rs. 2.35 crores. Complete Medical coverage was provided by SGH team in collaboration with other hospitals for Athletes participated in 30th Asian Athletics Games at Balewadi Stadium, Pune from 1st â€“ 7th July 2013.</p>
                  <p>Human Milk Bank was introduced in SGH costing Rs. 15 lakhs through Donation from Bank of Baroda and inaugurated on 19th November 2013 at the hands of Hon. MP Smt. Supriya Sule. Deanâ€™s office is completely renovated into a state-of-the-art block. Hospital Wards and College administrative wing are under renovation process. Renovation of Wards on third floor is ongoing through donation of Shrimant Dagadusheth Halwai Ganapati Trust. Internet access has been provided in whole college and hospital through National Informatic Center.
                    â€˜Vision 2025â€™ proposal including proposed Cancer Hospital, Dental College, Physiotherapy College, Superspecialities etc. has been prepared and submitted to the government.</p>
                </div>
              </div>

              {/*Organogram*/ }
              <div div class="tab-pane fade" id="Info3" >
              <h3>Organogram</h3>
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
                          this.state.organogram.type.map(r=>{
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

              {/*deans*/ }
              <div div class="tab-pane fade" id="Info4" >
              <h3>Past Deans</h3>
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
                          this.state.deans.type.map(r=>{
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

              {/*Superintendent*/ }
              <div div class="tab-pane fade" id="Info5" >
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
              </div>

              {/*Committees*/ }
              <div div class="tab-pane fade" id="Info6" >
              <h3>Committees</h3>
              <p>Get all the Committee details here</p>
                <div>
                  <iframe src={this.state.committees} id="datamain" title="pdf" style={{width:"100%" ,height:"1000px" ,frameborder: "0", allowtransparency:"true" ,marginwidth:"0", marginheight:"0", hspace:"0", vspace:"0" }}></iframe >
                </div>
              </div>

            </div>
          </article>

        </section>

      </div>)
    }

}
