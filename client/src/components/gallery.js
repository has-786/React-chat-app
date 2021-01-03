import React,{useState} from 'react';
import url from './url';
import Navbar from './navbar';

import Footer from './footer';
export default function Gallery(props){

let [imgs,setImgs]=useState([{name:'An Image of Hospital when the event of academics was held',link:'assets/img/gallery/gallery-7.jpg'},
{name:'An Image of Hospital when the event of research was held and the chief guest is in the pic with the dean.An Image of Hospital when the event of research was held and the chief guest is in the pic with the dean',link:'assets/img/gallery/dr.jpg'},
{name:'An Image of Hospital',link:'assets/img/a.png'},
{name:'An Image of Hospital',link:'assets/img/a.png'},
{name:'An Image of Hospital',link:'assets/img/a.png'},
{name:'An Image of Hospital',link:'assets/img/a.png'},
{name:'An Image of Hospital',link:'assets/img/a.png'},
{name:'An Image of Hospital',link:'assets/img/a.png'},
{name:'An Image of Hospital',link:'assets/img/a.png'},
{name:'An Image of Hospital',link:'assets/img/a.png'},
{name:'An Image of Hospital',link:'assets/img/a.png'}]);

/*fetch(url+'/api/gallery',{ method:'GET'})
     .then(response=>{ return response.json()})
     .then((body)=>{
          setImgs(body.img);
            //  alert(body.img);
            //  dispatch({type:'add_video',payload:body.video});
      })
     .catch(err=>{return err;});*/


return  <div   id='mainBody'>
  <Navbar/>

         <section id="departments" class="departments" >
           <div class="container">
             <div class="section-title" >
               <h2>Gallery</h2>
               <p>Check out our beautiful gallery</p>
             </div>
            <div class='row' style={{backgroundColor:'#f1f7fd'}}>
          {imgs.map(img=>{
            return <div class='col-lg-6' style={{padding:'20px',marginBottom:'20px'}}>
                      <div class='class="icon-box mt-4 mt-xl-0"' style={{border:'2px solid purple',borderRadius:'10px',backgroundColor:'beige'}}>
                       <div><img src={img.link} class='img img-rounded' height="400px" width="100%" /></div>
                       <br></br>
                      <div><p style={{padding:'10px',fontWeight:'bold'}}>{img.name}</p></div>

                      </div>
                   </div>
              })
          }
        </div>
      </div>
    </section>
    <Footer/>
</div>
}
