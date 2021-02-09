import {React,useRef,useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import imageCompression from 'browser-image-compression';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios'
import url from '../url'
import '../css/chat.css'
import Header from './header'
import io from 'socket.io-client';
import decryptFun from '../crypto/decrypt'
import encryptFun from '../crypto/encrypt'

let socket;
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  heading:{
    textAlign:'justifyContent'
  },
  footer:{
    float:'right'

  },
  messageBox:{
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor:'beige',
  },
  main:{ backgroundColor:'beige',height:'100%',paddingTop:'70px',width:'100%'},
  container:{
    width:'300px',
    margin:'auto',
    minHeight:'70vh',
    padding:'2px',
    borderRadius:'10px',
    border:'2px solid pink',
    },

  msgs:{
    width:'250px',
    marginBottom:'10px',

    //backgroundColor:'blue',color:'white',marginLeft:'auto'
  },
  sendbox:{
    width:'100%'
  },
  download:{
    marginRight:'-15px',
    color:'white'
  }
});



const Chatting=(props)=>{
  const email=localStorage.getItem('email')
  const name=localStorage.getItem('name')
  const audio=new Audio('../incoming.mp3')
  const classes = useStyles();
  const [msgs,setMsgs]=useState([]);
  const [room,setRoom]=useState(props.match.params.room);

  const [message,setMessage]=useState("");
  const [flag,setFlag]=useState(false);

  const socket=io(url,{transports: ['websocket','polling']})
  const token=localStorage.getItem('token')
  const secureAxios=axios.create(
                        {
                         baseURL:url,
                         headers:{
                          "Authorization":`bearer ${token}`
                        }
                      })


  useEffect(()=>{

       socket.emit('create', room);
       socket.emit('new-user-joined',name,room);

       getMessages(room)
       socket.on('user-joined',name=>{
         //setMsgs(msgs=>[...msgs,`${name} joined`])
      //    audio.play()
        // setMsgs(msgs=>[...msgs,{name:'',message:`${name} joined`,time:''}]);
      //   alert(`${name} joined on group ${room}`)
       })

       socket.on('user-left',name=>{
         alert(`${name} left from group ${room}`)
         //setMsgs(msgs=>[...msgs,{name:'',message:`${name} left`,time:''}]);
       })

       socket.on('receiveimg',data=>{
          if(email===data.email){
            document.getElementById('loader').style.display='none'
            setMsgs(msgs=>[...msgs,data]);
          }
       })

       socket.on('receive',data=>{
         if(email===data.email)return;
                console.log('received')

                //console.log(data.salt,data.iv)
                if(!data.path)
                {
                  console.log(data.salt,data.iv)
                  data.salt=data.salt.split(",")
                  data.iv=data.iv.split(",")

                  data.salt= new Uint8Array(data.salt) // salt and
                  data.iv= new Uint8Array(data.iv)    //iv for decrypting the message
                  decryptFun(data.message,data.salt,data.iv)
                  .then(decrypted=>{
                      data.message=decrypted;  // decrypt the received message
                      setMsgs(msgs=>[...msgs,data]);
                      window.scrollTo({top:document.getElementById('messages').scrollHeight,behaviour:'smooth'})
                   })
                }
                else {
                  setMsgs(msgs=>[...msgs,data]);
                  setTimeout(()=>window.scrollTo({top:document.getElementById('messages').scrollHeight,behaviour:'smooth'}),500)
                }

                audio.play();
       })
       return ()=>{socket.disconnect()}
  },[])



  function getMessages(room){


      secureAxios.post('getMessages',{room})
      .then((response)=>{
            const body=response.data
            if(body.status==1){
              console.log(body.msgs.slice(body.msgs.length-10,body.msgs.length))




            async function setData(){
              await (async function(){
                        const msgs=body.msgs
                        for(let i=0;i<msgs.length;i++){
                          const data=msgs[i]

                          console.log(data)
                          if(!data.path){
                            console.log("salt "+data.salt)
                            console.log("iv "+data.iv)
                            data.salt=data.salt.split(",")
                            data.iv=data.iv.split(",")
                            for(let i=0;i<data.salt.length;i++)data.salt[i]=parseInt(data.salt[i])
                            for(let i=0;i<data.iv.length;i++)data.iv[i]=parseInt(data.iv[i])

                            data.salt= new Uint8Array(data.salt) // salt and
                            data.iv= new Uint8Array(data.iv)    //iv for decrypting the message
                            await decryptFun(data.message,data.salt,data.iv)
                            .then(decrypted=>{
                                                data.message=decrypted;  // decrypt the received message
                                                setMsgs(msgs=>[...msgs,data])
                             })
                          }
                          else setMsgs(msgs=>[...msgs,data])
                        }
                  })()

                  window.scrollTo({top:document.getElementById('messages').scrollHeight,behaviour:'smooth'})

             }

             setData();
           }
      })
      .catch(err=>{})
  }


  const sendMessage=(name,room,msg)=>{

    if(msg==='')return;
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    h=(parseInt(h/10)==0)?('0'+h):h;
    m=(parseInt(m/10)==0)?('0'+m):m;
    const time=h+":"+m;
    var text = msg;
    document.getElementById('loader').style.display='block'

    let salt = window.crypto.getRandomValues(new Uint8Array(16));
    let iv = window.crypto.getRandomValues(new Uint8Array(16));
    console.log(salt,iv)
    setMsgs(msgs=>[...msgs,{flag:0,email,room,name,message:msg,time}]);
    encryptFun(text,salt,iv).then(encrypted=>{
      console.log(encrypted)
      salt=[...salt]
      iv=[...iv]
      salt=salt.join(",")
      iv=iv.join(",")

      socket.emit('send',{flag:0,email,room,name,msg:encrypted,salt,iv,time}); // setMsgs(msgs=>[...msgs,{name,message}]);
      document.getElementById('loader').style.display='none'
      console.log('sent')
      setMessage("");

    })

  }


    async function sendFile(){
      let file=document.getElementById('file-input').files[0];

      if(!document.getElementById('file-input').value)return
      document.getElementById('file-input').value=''
      document.getElementById('loader').style.display='block'


      let h=new Date().getHours();
      let m=new Date().getMinutes();
      h=(parseInt(h/10)==0)?('0'+h):h;
      m=(parseInt(m/10)==0)?('0'+m):m;
      const time=h+":"+m;


      let flag=2;
      if(file.name.toLowerCase().includes('.jpg') || file.name.toLowerCase().includes('.png'))flag=1;

      if(flag==1)
      {
            let options = { maxSizeMB: 1,  maxWidthOrHeight: 1920,  useWebWorker: true }
            imageCompression(file, options)
            .then(function (compressedFile) {
                socket.emit('send',{flag,email,room,name,path:file.name,img:compressedFile,time});
            //    document.getElementById('loader').style.display='none'
            //    setMsgs(msgs=>[...msgs,{flag,email,room,name,path:file.name,time}]);

            })
            .catch(function (error) {alert(error.message); console.log(error.message);  });
      }
      else
      {
            let reader = new FileReader();
            reader.readAsDataURL(file);
          //  alert(document.getElementById('file-input').files[0].value)

            reader.onloadend =await function () {
              const b64 = reader.result.replace(/^data:.+;base64,/, '');
              socket.emit('send',{flag,email,room,name,path:file.name,img:b64,time});
              //document.getElementById('loader').style.display='none'
              //setMsgs(msgs=>[...msgs,{flag,email,room,name,path:file.name,time}]);


            };
       }
  }

 const rightStyle={backgroundColor:'blue',color:'white',marginLeft:'auto'}
 const arriveStyle={backgroundColor:'beige',color:'green',margin:'auto auto 10px auto'}

  return <>
  <div style={{position:'fixed',width:'100%'}}>
  <Header name={room} {...props}/>
  <center><CircularProgress id='loader' style={{color:'lightgreen',marginTop:'100px',display:'none'}}/></center>

  </div>
  <div class={classes.main} >
        <div class={classes.container} id='container'>
          <div id='messages' class={classes.messageBox}  >
          {
            msgs.map((msg,id)=>{
              let includeStyle=(email===msg.email)?rightStyle:{};

              return <Paper  elevation={3} className={classes.msgs} style={includeStyle} >
              {(msg.flag==0)?

               <div style={{padding:'10px'}}>
                  <b>{msg.name}</b>
                  <br />
                  <span>{msg.message}</span>
                  <br />
                  <span style={{float:'right'}}>{msg.time}</span>
                </div>
                :(msg.flag==1)?
                <div style={{padding:'10px'}}>
                  <b>{msg.name}</b>
                  <br />
                  <span><img src={`/uploads/${msg.path}/${token}`} height='100%' width='100%' /></span>
                  <span style={{float:'right'}}>{msg.time}</span>
                 </div>
                 :
                 <div style={{padding:'10px'}}>
                   <b>{msg.name}</b>
                   <br />
                   <video width="100%" height="100%" controls>
                     <source src={url+'/uploads/'+msg.path} type="video/mp4" />
                     <source src={url+'/uploads/'+msg.path} type="video/ogg" />
                   </video>
                   <span style={{float:'right'}}>{msg.time}</span>
                  </div>
              }
              </Paper>
            })
          }
          </div>
         </div>
         <center>
             <div class={classes.sendbox}>
               <input type='text' placeholder='Type your message here' value={message} onChange={(evt)=>setMessage(evt.target.value)} autoFocus/>
               <button className='btn btn-primary' onClick={sendMessage.bind(this,name,room,message)}>Send</button>
             </div>
             <br />
             <div class={classes.sendbox}>
                 <label for="file-input">
                  <AttachFileIcon style={{color:'blue',width:'80px',cursor:'pointer'}}/>
                 </label>
                 <input id="file-input" type="file" style={{display:'none'}} />
                 <button className='btn btn-sm btn-danger' onClick={sendFile.bind(this)}>Send</button>
              </div>
           </center>
    </div>
  </>
}

export default Chatting
