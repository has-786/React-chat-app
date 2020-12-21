import React,{useState} from 'react';
import url from './url';
import Navbar from './navbar';


export default function Gallery(props){

let [imgs,setImgs]=useState([{name:'An Image of Hospital',link:'http://bjmcpune.org/gandhi.jpg'}]);

fetch(url+'/api/gallery',{ method:'GET'})
     .then(response=>{ return response.json()})
     .then((body)=>{
          setImgs(body.img);
            //  alert(body.img);
            //  dispatch({type:'add_video',payload:body.video});
      })
     .catch(err=>{return err;});


return  <div id="mainBody">
  <Navbar/>
<div class='row'>
          {imgs.map(img=>{
            return <div class='col-lg-4' style={{padding:'20px',marginBottom:'20px'}}>
                      <div style={{border:'2px solid purple',borderRadius:'10px',backgroundColor:'beige'}}>
                        <div><img src={img.link} class='img img-rounded' height="400px" width="100%" /></div>
                        <br></br>
                        <div><b>{img.name}</b></div>
                      </div>
                   </div>
              })
          }
        </div>

</div>
}
