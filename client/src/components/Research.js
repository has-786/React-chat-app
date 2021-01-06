import React from 'react'
import Navbar from './navbar';
import '../css/Research.css';
import '../css/sidenavbar.css';
import sidenavbar from './sidenavbar';
import Header from './header';
export default class Research extends React.Component {

  constructor(props){
      super(props);
      this.state={ user:"",
              
  
                  show:{
                    journals:{type:[
                    {name:'walters kluwer',desc:"https://www.walterskluwer.com"},
                    {name:'Informatic',desc:'https://www.informindia.com'},
                    {name:'Globe Pub',desc:'https://www.globepub.com'},
                    {name:'Cambridge Pressb',desc:'https://www.cambridgeindia.org'},
                    {name:'MD Consult',desc:'https://www.MDConsult.com'},
                    {name:'National Medical Library',desc:'https://www.nmlermed.in'},
                    {name:"W.H.O.",desc:"https://www.who.int"},
                    {name:"Springer Journals",desc:"https://www.springerlink.com"},
                    {name:"Elsevier",desc:"https://	www.elsevier.com"},
                    {name:"Free Medical Jpurnal",desc:"https://	www.freemedicaljournal.com"},
                    {name:"Elsevier Medical Pub",desc:"https://www.elsevierth.com"},
                    {name:"Globallist of Websites",desc:"https://	www.csen.comlmedicine/"},
                    {name:"Oxford Journals" ,desc:"https://www.elsevierth.com"},
                    {name:"Wiley Interscience Jr." ,desc:"https://www3.interscience.wiley.com"},
                    {name:"America Ass Medi" ,desc:"https://jama.ama.assn.org"},
                    {name:"Academic Medicine" ,desc:"https://www.journals.com/academicmedicine"},
                    {name:"Science Direct" ,desc:"https://www.sciencedirect.com"},
                    {name:"Medical Information Resource" ,desc:"https://www.patient.co.uk/showdpc/22"},
                    {name:"Medicine Website Resourcse" ,desc:"https://www.similima.com"},
                    {name:"Lippincott Williams & wilkins"  ,desc:"https://www.lww.com"},
                    {name:"Medicine",desc:"https://www.medicinejournal.com"}] },
  
                    resource:{type:[{name:"Anaesthesia",desc:"https://www.slideshare.net/rsmehta/7-1-anesthesia"},
                    {name:"Blunt Abd Trauma",desc:"https://www.slideshare.net/anneodaro/blunt-abdominal-trauma-93870723"},
                    {name:"Burns Overview",desc:"https://www.slideshare.net/riteshgjmptw/burns-ritesh"},
                    {name:"Cancer Kidney An Overview MUHS Conference",desc:"https://www.google.com"},
                    {name:"Case of Obstructive jaundice",desc:"https://www.slideshare.net/docfazalhussain/obstructive-jaundice-22191573"},
                    {name:"Fluid and Electrolyte",desc:"https://www.slideshare.net/jippyjack5/fluids-and-electrolytes-balance"},
                    {name:"Head Injury",desc:"https://www.slideshare.net/salmanhabeebek/head-injuryppt-75238809"},
                    {name:"Head Injury No Image",desc:"https://www.slideshare.net/manalihsolanki/head-injury-ppt"},
                    {name:"HIV and Surgeon",desc:"https://www.slideshare.net/drnareshms/hiv-and-surgeons"},
                    {name:"Know Your Instruments",desc:"https://www.slideshare.net/verdahsabih/medical-instruments-45875175"},
                    {name:"Management of Wound",desc:"https://www.slideshare.net/sumeryadav/wound-management-29701222"},
                    {name:"Management of Wound No images",desc:"https://www.slideshare.net/sadrumohamed/wounds-47466389"},
                    {name:"MUHS",desc:"https://www.muhs.ac.in/"},
                    {name:"MUHS 2003",desc:"https://www.muhs.ac.in/"},
                    {name:"OJS",desc:"https://www.google.com"},
                    {name:"ORAL CANCER",desc:"https://www.slideshare.net/mohamedrahilalhadithy/oral-cancer-61240139"},
                    {name:"ORAL CANCER No images",desc:"https://www.slideshare.net/mohamedrahilalhadithy/oral-cancer-61240139"},
                    {name:"Shape Your Future",desc:"https://www.slideshare.net/Resources234/shaping-your-future-22186342"},
                    {name:"Surgery Update 2008",desc:"https://www.google.com"}]},
                    
                    Eduvideo:{type:[
                      
                        {links:"https://www.youtube.com/embed/VfT--J-MZlM?rel=0"},
                        {links:"https://www.youtube.com/embed/hIYgrHWJiic?rel=0"}
                  
                      ]},
  
                      usefullinks:{type:[
                      
                        {usefullink:"http://in.groups.yahoo.com/group/jamkarstudents/"},
                        {usefullink:"http://jamkarstudents.blogspot.com/2004_09_01_archive.html"}
                  
                      ]},
                      publication:{type:[
                      
                        {publications:"publications3.pdf"}
                       
                  
                      ]}
                  
                  
                  
                  
                  }}
                }          

  render(){
      
      return(<div id='mainBody'>
   <div>
      <Header />
			 <Navbar />
      <section class="New_Department row">
          
          <nav class="side_navigation col-lg-3">
          {/* <i style={{fontSize:'30px'}} class='fa fa-bars burger' onClick={sidenavbar}></i> */}
              <ul class="list-group sidenav_list ">
                  <li><a class="list-group-item list-group-item-action active " data-toggle="list " href="#Info1"  >Journals</a></li>
                  <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info2" >Useful Links</a></li>
                  <li><a class="list-group-item list-group-item-action " data-toggle="list " href="#Info3">Educational Videos </a></li>
                  <li><a class="list-group-item list-group-item-action " data-toggle="list " href="#Info4" >Resources</a></li>
                  <li><a class="list-group-item list-group-item-action " data-toggle="list " href="#Info5">Publications </a></li>
              </ul>
          </nav>
          <article class="col-lg-9">
          <header id="article_heading"> Research and Resources</header>
          <br></br>
          <div class="tab-content">
          <div div class="tab-pane fade show active " id="Info1" >
          <div class="col-lg-12 details order-2 order-lg-1">
              <div id='journals'>
               <div class="table-responsive" id="research">
                <table class="table table-bordered table-hover">
                <thead>
                 <tr>
                  <th colspan="2" style={{textAlign:"center" , color:"#003a9b"}}>E-Journals</th>
                 </tr>
               </thead>
               <tbody>
                  {
                      this.state.show.journals.type.map(r=>{
                      return <tr>
                      <td>{r.name}</td>
                      <td>{<a href={r.desc} style={{color:"black"}}>{r.desc}</a>}</td>
                      </tr>})
                  }
                </tbody>
             </table>
           </div>
         </div>
        </div>
      </div>





          <div div class="tab-pane fade" id="Info2" >
          <div class="col-lg-12 details order-2 order-lg-1">
  
          <div class="table-responsive">
         <table class="table table-bordered table-hover " id="research">
          <thead>
            <tr>
            <th colspan="2" style={{textAlign:"center",color:"#003a9b"}}>Useful Links</th>
            </tr>
         </thead>
        <tbody>
          {
            this.state.show.usefullinks.type.map(r=>{
               return <tr>
                  
                  <td>{<a href={r.usefullink} style={{color:"black"}}>{r.usefullink}</a>}</td>
                </tr>
            })
          }
       </tbody>
    </table>
    </div>
   
   </div></div>



          <div div class="tab-pane fade" id="Info3" >


          <div class="col-lg-12 details order-2 order-lg-1">
  
           <div class="col-lg-4">
            {this.state.show.Eduvideo.type.map(r=>{
            return <iframe src={r.links}  title="lapro" style={{width:"400px" ,height:"300px" ,border:"2px solid black"}} >
            </iframe>})}
            </div>
    
           </div>
          </div>



          <div div class="tab-pane fade" id="Info4" >
          <div class="col-lg-12 details order-2 order-lg-1">
            <div id='resource'>
            
             <div class="table-responsive" id="research">
              <table class="table table-bordered table-hover ">
              <thead>
              <tr>
               <th colspan="2" style={{textAlign:"center" ,color:"#003a9b"}}>Resources</th>
              </tr>
             </thead>
             <tbody>
                {
               this.state.show.resource.type.map(r=>{
               return <tr>
                <td>{<a href={r.desc} style={{color:"black"}}>{r.name}</a>}</td>
                </tr>
            })
          }
       </tbody>
    </table>
    </div>
    </div>
    </div>
    </div>




          <div div class="tab-pane fade" id="Info5" >
          <div class="col-lg-12 details order-2 order-lg-1">
  
           <div>  {
            this.state.show.publication.type.map(r=>{
               return <iframe src={r.publications} id="datamain" title="pdf" style={{width:"100%" ,height:"600px" ,frameborder: "0", allowtransparency:"true" ,marginwidth:"0", marginheight:"0", hspace:"0", vspace:"0" ,scrolling:"No"}}></iframe>
            })}</div>

        </div>
      </div>
   </div>
  </article>
</section>
</div>
</div>);
  }
}










