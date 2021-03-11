import {React,useRef,useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery'
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
import GetAppIcon from '@material-ui/icons/GetApp';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import SendIcon from '@material-ui/icons/Send';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import axios from 'axios'
import url from '../url'
import '../css/chat.css'
import Header2 from './header2'
import io from 'socket.io-client';
import decryptFun from '../crypto/decrypt'
import encryptFun from '../crypto/encrypt'

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const green='#23D0E0'
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
  paging:{
    margin:'auto',
    backgroundColor:'beige',
    color:'black',
    marginBottom:'10px',
    width:'120px',
    textAlign:'center'
  },
  messageBox:{
    width:'100%',
    flexWrap: 'wrap',
    backgroundColor:green
  },
  main:{backgroundColor:green,paddingTop:'70px',width:'100%'},
  container:{
    margin:'auto',
    minHeight:'70vh',
    padding:'2px',
    borderRadius:'10px',
    backgroundColor:green
    ,display:'flex',flexFlow:'row wrap',alignItems:'center',justifyContent:'center'
  },

  msgs:{
    width:'250px',
    maxWidth:'80%',
    marginBottom:'10px',
    paddingBottom:'12px'
  },
  sendbox:{
    width:'300px',
    backgroundColor:green,
  },
  download:{
    marginRight:'-15px',
    color:'white'
  }
});



const Chatting=(props)=>{

  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');

  const chat=useSelector(state=>state.chatReducer)
  const dispatch=useDispatch();
  let link
  let room=props.match.params.room;
  const emails=props.match.params.emails;
  const {roomName,dp}=props;

  if(room!=roomName)link=`/personal/${room}/${emails}`;
  else link=`/chat/${room}`;


    let audio;
    if(room===roomName)audio=new Audio('../incoming.mp3')
    else audio=new Audio('../../incoming.mp3')

    const [openFile, setOpenFile] =useState(false);

    const handleCloseFile= () => { document.getElementById('file-input').value=""; setPreviewD(""); setPreviewI(""); setPreviewV(""); setOpenFile(false); };
    function handleOpenFile() {
      setOpenFile(true);
     };

  const [message,setMessage]=useState("");
  const [previewD,setPreviewD]=useState("");
  const [previewI,setPreviewI]=useState("");
  const [previewV,setPreviewV]=useState("");

  const [flag,setFlag]=useState(false);
  const [page,setPage]=useState(2);
  const [olderMsgs,setOlderMsgs]=useState('block');
  const sendbox=useRef(null)
  const socket=io(url,{transports: ['websocket','polling']})
  const token=localStorage.getItem('token')
  const secureAxios=axios.create(
                        {
                         baseURL:url,
                         headers:{
                          "Authorization":`bearer ${token}`
                        }
                      })

    const email=useSelector(state=>state.userReducer.email)
    const name=useSelector(state=>state.userReducer.name)

    const socketConnections=(socket,name,email)=>{
      socket.emit('create', room)
      socket.emit('user-joined',name,room)
      socket.on('receiveimg',data=>{
              if(email===data.email)
              {
                    document.getElementById('loader').style.display='none';
                    (async ()=>{
                        dispatch({type:'add_chat',payload:{room,msg:data}})
                        setTimeout(()=>window.scrollTo({top:document.getElementById('messages').scrollHeight,behaviour:'smooth'}),500)
                        sendbox.current.focus()
                    })()
               }
        })


      socket.on('receive',data=>{

           if(email===data.email)return;
           dispatch({type:'add_recent',payload:{room,roomName,link,dp}})

            console.log('received');
            (async ()=>{
                    if(!data.path)
                    {
                                    data.salt=data.salt.split(",")
                                    data.iv=data.iv.split(",")

                                    data.salt= new Uint8Array(data.salt) // salt and
                                    data.iv= new Uint8Array(data.iv)    //iv for decrypting the message

                                    await decryptFun(data.message,data.salt,data.iv)
                                    .then(decrypted=>{
                                        data.message=decrypted;  // decrypt the received message
                                    })
                      }

                      (async ()=>{
                                  dispatch({type:'add_chat',payload:{room,msg:data}})

                                  if(!data.path)window.scrollTo({top:document.getElementById('messages').scrollHeight,behaviour:'smooth'})
                                  else setTimeout(()=>window.scrollTo({top:document.getElementById('messages').scrollHeight,behaviour:'smooth'}),500)

                                  sendbox.current.focus()
                        })()

                        audio.play();
                })()
          })

    }


    async function getMessages(page){

      await  secureAxios.post('getMessages',{room,page})
             .then((response)=>{
              const body=response.data
              if(body.status==1)
              {
                if(!body.end)setOlderMsgs('block')
                else setOlderMsgs('none')

                async function setData()
                {
                            if(page==1)
                            {
                                await secureAxios.get('getUser')
                                    .then((response)=>{
                                          const body=response.data
                                              dispatch({type:'load_user',payload:body})
                                              socketConnections(socket,body.name,body.email)
                                     })
                                     .catch(err=>toast.error(err))
                             }


                             await (async function(){
                                  const msgs=body.msgs
                                  for(let i=0;i<msgs.length;i++)
                                  {
                                        const data=msgs[i]

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
                                           })
                                        }
                                     }
                                     dispatch({type:'load_chat',payload:{room,msgs}})
                            })()

                            if(page==1)
                            {
                               setTimeout(()=>window.scrollTo({top:document.getElementById('messages').scrollHeight,behaviour:'smooth'}),350)
                            }
                            setPage(page=>page+1)
               }

               setData();

             }
        })
        .catch(err=>{})

    }

    useEffect(()=>{
      document.querySelector('body').style.backgroundColor=green

         if(chat[room])socketConnections(socket,name,email)
         else getMessages(1)

         return ()=>{
           document.querySelector('body').style.backgroundColor=""
           socket.disconnect(); dispatch({type:'delete_chat',payload:room});
         }
    },[])





  const sendMessage=(name,room,msg)=>{

    if(msg==='')return;
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    h=(parseInt(h/10)==0)?('0'+h):h;
    m=(parseInt(m/10)==0)?('0'+m):m;
    const time=h+":"+m;
    var text = msg
    document.getElementById('loader').style.display='block'

    let salt = window.crypto.getRandomValues(new Uint8Array(16));
    let iv = window.crypto.getRandomValues(new Uint8Array(16));
    console.log(salt,iv);

    (async ()=>{
      dispatch({type:'add_chat',payload:{room,msg:{flag:0,email,room,name,message:msg,time}}})
      dispatch({type:'add_recent',payload:{room,roomName,link,dp}})

      window.scrollTo({top:document.getElementById('messages').scrollHeight,behaviour:'smooth'})
      sendbox.current.focus()
    })()


    encryptFun(text,salt,iv).then(encrypted=>{
      console.log(encrypted)
      salt=[...salt]
      iv=[...iv]
      salt=salt.join(",")
      iv=iv.join(",")

      socket.emit('send',{flag:0,email,room,name,msg:encrypted,path:null,salt,iv,time,roomName,link,dp}); // setMsgs(msgs=>[...msgs,{name,message}]);
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

      handleCloseFile();

      let h=new Date().getHours();
      let m=new Date().getMinutes();
      h=(parseInt(h/10)==0)?('0'+h):h;
      m=(parseInt(m/10)==0)?('0'+m):m;
      const time=h+":"+m;

      let flag=4;
      if(file.type.includes('image'))flag=1;
      else if(file.type.includes('video'))flag=2;
      else if(file.type.includes('audio'))flag=3;

      let data=new FormData()
      data.append('file',file)

      secureAxios.post('sendFile',data)
      .then((response)=>{
        const body=response.data

        if(body.status==1){
          if(file)file.value=""
          document.getElementById('loader').style.display='none'
          dispatch({type:'add_chat',payload:{room,msg:{flag,email,room,name,msg:null,path:file.name,time,roomName,link}}})
          dispatch({type:'add_recent',payload:{room,roomName,link,dp}})

          socket.emit('send',{flag,email,room,name,msg:null,path:file.name,time,roomName,link,dp}); // setMsgs(msgs=>[...msgs,{name,message}]);
        }
        else toast.error('Something went wrong',{autoClose:1000})
      })
      .catch(err=>toast.error('Something went wrong',{autoClose:1000}) );



  }


  const download=(path)=>{
    const a=document.createElement('a')
    a.href=path
    a.click()
  }

 const rightStyle={marginLeft:'auto',backgroundColor:'#fffcb7',color:'black'}
 const arriveStyle={backgroundColor:'beige',color:'green',margin:'auto auto 10px auto'}

  return <>
          <center>
              <Dialog
                open={openFile}
                onClose={handleCloseFile}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <center>
                  <img src={previewI} style={{display:(previewI!="")?'block':'none'}} width='100%' height='100%'/>
                  <video style={{display:(previewV!="")?'block':'none'}} width="100%" height="100%" controls>
                      <source src={previewV}  type="video/mp4" />
                      <source src={previewV}  type="video/ogg" />
                  </video>

                  <div style={{display:(previewD!="")?'block':'none',padding:'50px'}}>{previewD}</div>
                </center>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={sendFile.bind(this)}
                >
                  Send
                </Button>
              </Dialog>
        </center>


  <div style={{position:'fixed',width:'100%',zIndex:10}}>
    <Header2 name={roomName} dp={dp} {...props}/>
    <center><CircularProgress id='loader' style={{marginTop:'100px',display:'none'}}/></center>
  </div>

  <div class={classes.main}  >
        <div class={classes.container} id='container' style={{width:(matches)?'50%':'100%'}}>
          <div id='messages' class={classes.messageBox}  >
            <Paper elevation={3} className={classes.paging} style={{display:olderMsgs}} onClick={ getMessages.bind(this,page)}><button class='btn btn-sm' >Older Messages</button></Paper>
            {
              (chat[room]!=undefined)?chat[room].map((msg,id)=>{
                let includeStyle=(email===msg.email)?rightStyle:{};

                return <Paper  elevation={3} className={classes.msgs} style={{...includeStyle}} >
                {(msg.flag==0)?
                  <div style={{padding:'10px'}}>
                    {(room===roomName)?<><b>{msg.name}</b><br/></>:null}
                    <span>{msg.message}</span>
                    <br />
                    <span style={{float:'right'}}>{msg.time}</span>
                  </div>
                  :(msg.flag==1)?
                   <div style={{padding:'10px'}}>
                    {(room===roomName)?<><b>{msg.name}</b><br/></>:null}
                    <span><img src={`/uploads/${msg.path}/${token}`} height='100%' width='100%' /></span>
                    <span >{msg.path}&nbsp;&nbsp; <CloudDownloadIcon color='primary' style={{float:'right'}} onClick={download.bind(this,url+`/uploads/${msg.path}/${token}`)}/></span>
                    <br /><br />
                    <span  style={{float:'right',paddingBottom:'50px'}}>{msg.time}</span>
                   </div>
                  :(msg.flag==2)?
                   <div style={{padding:'10px'}}>
                   {(room===roomName)?<><b>{msg.name}</b><br/></>:null}
                   <video width="100%" height="100%" controls>
                     <source src={url+`/uploads/${msg.path}/${token}`} type="video/mp4" />
                     <source src={url+`/uploads/${msg.path}/${token}`} type="video/wav" />
                     <source src={url+`/uploads/${msg.path}/${token}`}  type="video/ogg" />
                   </video>
                     <span >{msg.path}&nbsp;&nbsp; <CloudDownloadIcon color='primary' style={{float:'right'}} onClick={download.bind(this,url+`/uploads/${msg.path}/${token}`)}/></span>
                     <br /><br />
                     <span style={{float:'right'}}>{msg.time}</span>
                    </div>
                    :(msg.flag==3)?
                      <div style={{padding:'10px'}}>
                          {(room===roomName)?<><b>{msg.name}</b><br/></>:null}
                            <audio controls>
                              <source src={url+`/uploads/${msg.path}/${token}`} type="audio/ogg" />
                              <source src={url+`/uploads/${msg.path}/${token}`}  type="audio/mpeg" />
                            </audio>
                            <span >{msg.path}&nbsp;&nbsp; <CloudDownloadIcon color='primary' style={{float:'right'}} onClick={download.bind(this,url+`/uploads/${msg.path}/${token}`)}/></span>
                            <br /><br />
                            <span style={{float:'right'}}>{msg.time}</span>
                       </div>
                     :
                      <div style={{padding:'10px'}}>
                           {(room===roomName)?<><b>{msg.name}</b><br/></>:null}
                           <span> {msg.path}&nbsp;&nbsp; <CloudDownloadIcon color='primary' style={{float:'right'}} onClick={download.bind(this,url+`/uploads/${msg.path}/${token}`)}/></span>
                           <br /><br />
                           <span style={{float:'right'}}>{msg.time}</span>
                       </div>
                }
                </Paper>
              })
              :null
            }
          </div>
          </div>
          <div >
            <center>
               <div class={classes.sendbox} style={{marginBottom:'40px'}}>
                   <TextField type='text' ref={sendbox} style={{width:'240px'}} placeholder='Type your message here' value={message} onChange={(evt)=>setMessage(evt.target.value)} autoFocus/>
                   <SendIcon color='primary' onClick={sendMessage.bind(this,name,room,message)} />
                   <label for="file-input">
                    <AttachFileIcon color='secondary' style={{marginLeft:'5px'}}/>
                   </label>
                   <input id="file-input" type="file" style={{display:'none'}} onChange={(evt)=>{
                       handleOpenFile();
                        (evt.target.files[0].type.includes('image'))?setPreviewI(window.URL.createObjectURL(evt.target.files[0]))
                       :(evt.target.files[0].type.includes('video'))?setPreviewV(window.URL.createObjectURL(evt.target.files[0]))
                       :setPreviewD(evt.target.files[0].name)
                    }}/>
                </div>
             </center>
           </div>
    </div>
  </>
}

export default Chatting
