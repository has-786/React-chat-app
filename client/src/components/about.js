import react from 'react';
import Navbar from './navbar';

 function About() {
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
              <a class="nav-link" data-toggle="tab" href="#tab-2">Past Deans</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab-3">Organogram</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab-4">Committees</a>
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
                  <h3>Past Deans</h3>
                  <table id="deans" class='table table-bordered table-striped'>
                    <tr>
                        <th>Sr. No</th>
                      <th>Name of Dean</th>
                      <th>Period</th>
                      <th>Subject</th>
                    </tr>
                    <tr>
                        <td>1</td>
                      <td>Dr. A.S. Labhsetwar</td>
                      <td>08-05-2000 to 10-02-2003</td>
                      <td>Ophthalmology</td>
                    </tr>
                    <tr>
                        <td>2</td>
                      <td>Dr. S.G. Deshpande</td>
                      <td>11-02-2003 to 31-05-2003</td>
                      <td>Skin VD</td>
                    </tr>
                    <tr>
                        <td>3</td>
                      <td>Dr. V.L. Yemul</td>
                      <td>04-06-2003 to 30-09-2006</td>
                      <td>Microbiology</td>
                    </tr>
                    <tr>
                        <td>4</td>
                      <td>Dr. A.V. Jamkar</td>
                      <td>01-10-2006 to 04-11-2007</td>
                      <td>Surgery</td>
                    </tr>
                    <tr>
                        <td>5</td>
                      <td>Dr. A.K. Malik</td>
                      <td>05-11-2007 to 31-07-2008</td>
                      <td>Surgery</td>
                    </tr>
                    <tr>
                        <td>6</td>
                      <td>Dr. N.V. Dravid</td>
                      <td>01-08-2008 to 06-08-2008</td>
                      <td>Pathology</td>
                    </tr>
                    <tr>
                        <td>7</td>
                      <td>Dr. A.V. Jamkar</td>
                      <td>07-08-2008 to 28-08-2008</td>
                      <td>Surgery</td>
                    </tr>
                    <tr>
                        <td>8</td>
                      <td>Dr. N.G. Borade</td>
                      <td>29-08-2008 to 22-03-2009</td>
                      <td>Physiology</td>
                    </tr>
                    <tr>
                        <td>9</td>
                      <td>Dr. A.V. Jamkar</td>
                      <td>23-03-2009 to 20-12-2010</td>
                      <td>Surgery</td>
                    </tr>
                    <tr>
                        <td>10</td>
                      <td>Dr. Renu Bharadwaj</td>
                      <td>21-12-2010 to 12-05-2011</td>
                      <td>Microbiology</td>
                    </tr>
                    <tr>
                        <td>11</td>
                      <td>Dr. Ajay S. Chandanwale</td>
                      <td>13-05-2011 onwards</td>
                      <td>Orthopedics</td>
                    </tr>
                  </table>
              </div>
            </div>
          </div>
            <div class="tab-pane" id="tab-3">
              <div class="row">
                <div class="col-lg-12 details order-2 order-lg-1">
                  <h3>Organogram</h3>
                  <table id="deans">
                    <tr>
                        <th>Designation</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Contact</th>
                    </tr>
                    <tr>
                        <td>Dean</td>
                      <td>Dr. Ajay. S. Chandanwale</td>
                      <td>D-401,R.K.Pride, New D.P.Road, Kothrud, Pune-411037</td>
                      <td>Tel:020-26102299<br/>
                        020-6128000<br/>
                        Fax:02026126868<br/>
                        Cell:9420697474<br/>
                        Email:deanbjmcpune@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Dy.Dean (UG)</td>
                      <td>Dr. Arun N. Kowale</td>
                      <td>R-4, vijaygad, SBI CO-OP Hsg society shivtrith nagar,Paud road kothrud. Pune-411038</td>
                      <td>Tel:020-26102296<br/>
                        020-6123872<br/>
                        Cell: 9960762233</td>
                    </tr>
                    <tr>
                        <td>Dy. Dean (PG)</td>
                      <td>Dr. Samir V. Joshi</td>
                      <td>Hirai Niwas, 54/6A kothrud, Pune-411038.</td>
                      <td>Tel:020-26102206<br/>
                        Cell: 8329418074</td>
                    </tr>
                    <tr>
                        <td>Vice.Dean (Administration)</td>
                      <td>Dr. Muralidhar Tambe</td>
                      <td>A/602,Gagan-Galaxy society,bibwewadi-Kondwa road, Pune-411037</td>
                      <td>Tel:020-26102302<br/>
                        020-29701044</td>
                    </tr>
                    <tr>
                        <td>Medical Superintendent</td>
                      <td>Dr. S. B. Punpale</td>
                      <td>Flat no.201, B-9 Building Bhujbal Township nr.Eklavya College, Kothrud,Pune.411038</td>
                      <td>Tel:020-26102344<br/>
                        Cell:9422189531<br/>
                        Email:sbpunpale@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Dy. Medical Superintendent</td>
                      <td>Dr. Manjeet Santre</td>
                      <td>Rector's Bunglow,BJGMC Boys hostel, Pune-411001</td>
                      <td>Tel:020-26102203<br/>
                        020-26102461<br/>
                        Cell: 9423421455</td>
                    </tr>
                    <tr>
                        <td>Administrative Officer (BJGMC / SGH)</td>
                      <td>Mr. Ganesh N. Badadare</td>
                      <td>Pollens Residences A-wing, Flat No.402, Kalepadal, Hadapsar-28</td>
                      <td>Tel:020-29700047<br/>
                        Cell: 9869676627</td>
                    </tr>
                    <tr>
                        <td>Administrative officer (BJGMC)</td>
                      <td>Mr. Suresh.V.Bonawale</td>
                      <td>Flat no Samarth park hou-society mohanwadi, yerwada,pune-411006.</td>
                      <td>Tel:020-26102303<br/>
                        020-26130976<br/>
                        Cell: 9096632184.</td>
                    </tr>
                    <tr>
                        <td>Administrative officer (SGH)</td>
                      <td>Mr. Goroba.Y. Awate</td>
                      <td>Gokul Nagari 'C' Build Flat no-3,Tulgabhavani nagar pimple gurav pune-411061</td>
                      <td>Tel:020-26102202<br/>
                        020-26130962
                        </td>
                    </tr>
                    <tr>
                        <td>Office Superintendent (SGH)</td>
                      <td>Mr. Sanjay B. Dahibhate</td>
                      <td>Flat no-906, Saptagiri Appt. pancard road Pune-411035</td>
                      <td>Tel:020-26102422<br/>
                        Cell:9403532271</td>
                    </tr>
                    <tr>
                        <td>Office Superintendent (Nursing)</td>
                      <td>Mr. Sham. S. Teli</td>
                      <td>Plot no-71-A Sahkar Vrund Society Paud Road pune-4110</td>
                      <td>Tel:020-26102231<br/>
                        Cell:9225501440</td>
                    </tr>
                    <tr>
                        <td>Office Superintendent (SGH)</td>
                      <td>Mr. P. M. Adhari</td>
                      <td>19/321,Ram Society Yerwada, Pune-411006</td>
                      <td>Tel:020-26128000</td>
                    </tr>
                  </table>
              </div>
            </div>

          </div>

          <div class="tab-pane" id="tab-4">
            <div class="row">
              <div class="col-lg-8 details order-2 order-lg-1">
                <h3>Committees</h3>

            </div>
          </div>
        </div>
      </div>

</div>
    </div>
    </div>
  </section>

    </div>

    </div>);
 }

 export default About;
