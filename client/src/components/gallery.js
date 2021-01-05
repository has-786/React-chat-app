import React,{useState,useEffect} from 'react';
import url from './url';
import Navbar from './navbar';
import Header from './header';

import Footer from './footer';
export default function Gallery(props){

let [imgs,setImgs]=useState([
{name:'An Image of Hospital',link:'/uploads/gallery-1.jpg'},
{name:'An Image of Hospital',link:'/uploads/gallery-2.jpg'},
{name:'An Image of Hospital',link:'/uploads/gallery-3.jpg'},
{name:'An Image of Hospital',link:'/uploads/gallery-4.jpg'},
{name:'An Image of Hospital',link:'/uploads/gallery-5.jpg'},
{name:'An Image of Hospital',link:'/uploads/gallery-6.jpg'},
{name:'An Image of Hospital',link:'/uploads/gallery-7.jpg'},
{name:'An Image of Hospital',link:'/uploads/gallery-8.jpg'}
]);
useEffect(()=>{window.scrollTo(0,0);},[]);
fetch(url+'/api/gallery',{ method:'GET'})
     .then(response=>{ return response.json()})
     .then((body)=>{
          setImgs(body.img);
            //  alert(body.img);
            //  dispatch({type:'add_video',payload:body.video});
      })
     .catch(err=>{return err;});


return  <div   id='mainBody'>
<Header />

  <Navbar/>

         <section id="departments" class="departments" >
           <div class="container">
             <div class="section-title" >
               <h2>Gallery</h2>
               <p>Check out our beautiful gallery</p>
             </div>
            <div class='row' style={{backgroundColor:'#f1f7fd'}}>
          {imgs.map(img=>{
            return <div class='col-lg-4' style={{padding:'5px',marginBottom:'20px'}}>
                      <div class='class="icon-box mt-4 mt-xl-0"' style={{border:'2px solid purple',borderRadius:'10px',backgroundColor:'beige'}}>
                       <div><img src={url+img.link} class='img img-rounded' height="300px" width="100%" /></div>
                       <br></br>
                      <div><p style={{padding:'10px',fontWeight:'bold'}} style={{height:'100px',overflowY:'scroll'}}>{img.name}</p></div>

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
