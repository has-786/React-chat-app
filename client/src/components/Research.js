import React from 'react'
import Navbar from './navbar';
import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';
import Header from './header';
import url from './url'
import "../css/New_Department.css"

export default class Research extends React.Component {

    constructor(props){
        super(props);
        this.state={ user:"",
                      journals:[
                      {name:'walters kluwer aa',desc:"https://www.walterskluwer.com",status:'journals'},
                      {name:'Informatic',desc:'https://www.informindia.com',status:'journals'},
                      {name:'Globe Pub',desc:'https://www.globepub.com',status:'journals'},
                      {name:'Cambridge Pressb',desc:'https://www.cambridgeindia.org',status:'journals'},
                      {name:'MD Consult',desc:'https://www.MDConsult.com',status:'journals'},
                      {name:'National Medical Library',desc:'https://www.nmlermed.in',status:'journals'},
                      {name:"W.H.O.",desc:"https://www.who.int",status:'journals'},
                      {name:"Springer Journals",desc:"https://www.springerlink.com",status:'journals'},
                      {name:"Elsevier",desc:"https://	www.elsevier.com",status:'journals'},
                      {name:"Free Medical Jpurnal",desc:"https://	www.freemedicaljournal.com",status:'journals'},
                      {name:"Elsevier Medical Pub",desc:"https://www.elsevierth.com",status:'journals'},
                      {name:"Globallist of Websites",desc:"https://	www.csen.comlmedicine/",status:'journals'},
                      {name:"Oxford Journals" ,desc:"https://www.elsevierth.com",status:'journals'},
                      {name:"Wiley Interscience Jr." ,desc:"https://www3.interscience.wiley.com",status:'journals'},
                      {name:"America Ass Medi" ,desc:"https://jama.ama.assn.org",status:'journals'},
                      {name:"Academic Medicine" ,desc:"https://www.journals.com/academicmedicine",status:'journals'},
                      {name:"Science Direct" ,desc:"https://www.sciencedirect.com",status:'journals'},
                      {name:"Medical Information Resource" ,desc:"https://www.patient.co.uk/showdpc/22",status:'journals'},
                      {name:"Medicine Website Resourcse" ,desc:"https://www.similima.com",status:'journals'},
                      {name:"Lippincott Williams & wilkins"  ,desc:"https://www.lww.com",status:'journals'},
                      {name:"Medicine",desc:"https://www.medicinejournal.com",status:'journals'}] ,

                      resources:[{name:"Anaesthesia",desc:"https://www.slideshare.net/rsmehta/7-1-anesthesia",status:"resource"},
                      {name:"Blunt Abd Trauma",desc:"https://www.slideshare.net/anneodaro/blunt-abdominal-trauma-93870723",status:"resource"},
                      {name:"Burns Overview",desc:"https://www.slideshare.net/riteshgjmptw/burns-ritesh",status:"resource"},
                      {name:"Cancer Kidney An Overview MUHS Conference",desc:"https://www.google.com",status:"resource"},
                      {name:"Case of Obstructive jaundice",desc:"https://www.slideshare.net/docfazalhussain/obstructive-jaundice-22191573",status:"resource"},
                      {name:"Fluid and Electrolyte",desc:"https://www.slideshare.net/jippyjack5/fluids-and-electrolytes-balance",status:"resource"},
                      {name:"Head Injury",desc:"https://www.slideshare.net/salmanhabeebek/head-injuryppt-75238809",status:"resource"},
                      {name:"Head Injury No Image",desc:"https://www.slideshare.net/manalihsolanki/head-injury-ppt",status:"resource"},
                      {name:"HIV and Surgeon",desc:"https://www.slideshare.net/drnareshms/hiv-and-surgeons",status:"resource"},
                      {name:"Know Your Instruments",desc:"https://www.slideshare.net/verdahsabih/medical-instruments-45875175",status:"resource"},
                      {name:"Management of Wound",desc:"https://www.slideshare.net/sumeryadav/wound-management-29701222",status:"resource"},
                      {name:"Management of Wound No images",desc:"https://www.slideshare.net/sadrumohamed/wounds-47466389",status:"resource"},
                      {name:"MUHS",desc:"https://www.muhs.ac.in/",status:"resource"},
                      {name:"MUHS 2003",desc:"https://www.muhs.ac.in/",status:"resource"},
                      {name:"OJS",desc:"https://www.google.com",status:"resource"},
                      {name:"ORAL CANCER",desc:"https://www.slideshare.net/mohamedrahilalhadithy/oral-cancer-61240139",status:"resource"},
                      {name:"ORAL CANCER No images",desc:"https://www.slideshare.net/mohamedrahilalhadithy/oral-cancer-61240139",status:"resource"},
                      {name:"Shape Your Future",desc:"https://www.slideshare.net/Resources234/shaping-your-future-22186342",status:"resource"},
                      {name:"Surgery Update 2008",desc:"https://www.google.com"}],

                      eduvideo:[

                          {link:"https://www.youtube.com/embed/VfT--J-MZlM?rel=0"},
                          {link:"https://www.youtube.com/embed/hIYgrHWJiic?rel=0"}

                        ],

                        usefullinks:[

                          {status:'usefullinks',link:"http://in.groups.yahoo.com/group/jamkarstudents/"},
                          {status:'usefullinks',link:"http://jamkarstudents.blogspot.com/2004_09_01_archive.html"}

                        ],
                        publication:{link:"publications3.pdf"}

                    }
                  }




                  componentDidMount(){

                    window.scrollTo(0,0);
                   fetch(url+'/api/research',{ method:'GET'})
                         .then(response=>{ return response.json()})
                         .then((body)=>{

                                this.setState({journals:body.research1.filter(r=>r.status=='journals')});
                                this.setState({usefullinks:body.usefullinks});
                                this.setState({eduvideo:body.eduvideo});
                                this.setState({resources:body.research1.filter(r=>r.status=='resources')});
                                this.setState({publication:{link:url+body.publication.link}});

                                //  dispatch({type:'add_video',payload:body.video});
                          })
                         .catch(err=>{});




                  }

    render(){

        return (<div id='mainBody'>

        <Header />
          <Navbar/>

        <section class="New_Department row"  onClick={sidenavbar}>
        <i style={{fontSize:'30px'}} class='fa fa-bars burger'></i>

            <nav class="side_navigation col-lg-3 mysidenavbar" >
                <ul class="list-group sidenav_list" >
                    <li><a class="list-group-item list-group-item-action active" data-toggle="list" href="#Info1"  >
                    <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;Journals</a></li>
                    <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info2" >
                    <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;Useful Links</a></li>
                    <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3"  >
                    <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;Educational Videos </a></li>
                    <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info4" >
                    <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;Resources</a></li>
                    <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info5" >
                    <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;Publications </a></li>
                </ul>
            </nav>
            <article class="col-lg-9">
            <header id="article_heading"> Research and Resources</header>
            <br></br>
            <div class="tab-content">
            <div  class="tab-pane fade show active " id="Info1" >
            <div class="col-lg-12 details order-2 order-lg-1">
                <div id='journals'>
                 <div class="table-responsive" id="research">
                  <table class="table table-bordered table-hover table-striped">
                  <thead>
                   <tr>
                    <th colspan="2" style={{textAlign:"center" , color:"#003a9b"}}>E-Journals</th>
                   </tr>
                 </thead>
                 <tbody>
                    {
                         this.state.journals.map(r=>{
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
           <table class="table table-bordered table-hover table-striped" id="research">
            <thead>
              <tr>
              <th colspan="2" style={{textAlign:"center",color:"#003a9b"}}>Useful Links</th>
              </tr>
           </thead>
          <tbody>
            {
              this.state.usefullinks.map(r=>{
                 return <tr>

                    <td>{<a href={r.link} style={{color:"black"}}>{r.link}</a>}</td>
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
              {this.state.eduvideo.map(r=>{
              return <iframe src={r.link}  title="lapro" style={{width:"400px" ,height:"300px" ,border:"2px solid black"}} >
              </iframe>})}
              </div>

             </div>
            </div>



            <div  class="tab-pane fade" id="Info4" >
            <div class="col-lg-12 details order-2 order-lg-1">
              <div id='resource'>

               <div class="table-responsive" id="research">
                <table class="table table-bordered table-hover table-striped">
                <thead>
                <tr>
                 <th colspan="2" style={{textAlign:"center" ,color:"#003a9b"}}>Resources</th>
                </tr>
               </thead>
               <tbody>
                  {
                 this.state.resources.map(r=>{
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

             <div>
                  <iframe src={this.state.publication.link} id="datamain" title="pdf" style={{width:"100%" ,height:"600px" ,frameborder: "0", allowtransparency:"true" ,marginwidth:"0", marginheight:"0", hspace:"0", vspace:"0" ,scrolling:"No"}}></iframe>

        </div>
      </div>
     </div>
     </div>
    </article>
</section>
</div>);
    }
}
