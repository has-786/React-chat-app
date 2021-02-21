import io from 'socket.io-client';
import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CircularProgress from '@material-ui/core/CircularProgress';

import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import RoomIcon from '@material-ui/icons/Room';
import GroupIcon from '@material-ui/icons/Group';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import axios from 'axios'
import url from '../url'
import socket from '../socketurl'

import Header2 from './header2'

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()





const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }

}));





function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const connect=(secureAxios,dispatch,profile,option)=>{
     secureAxios.post('setFriend',{option,profile})
     .then((response)=>{
         const body=response.data
         if(body.status==1)dispatch({type:'set_friend',payload:{option,profile}})
     })
     .catch(err=>{
       alert(err)
     })
}



export default function Profile(props) {

  const classes=useStyles()
  const dispatch=useDispatch()

  const [status, setStatus] = useState("Not connected");
  const [option, setOption] = useState("Connect");
  const [openDp, setOpenDp] = React.useState(false);

  const token=localStorage.getItem('token')
  const profile=useSelector(state=>state.profileReducer)
  const profileName=profile.name
  const profileEmail=profile.email
  const profileDp=profile.path
  if(!profile.email)props.history.push('/')

  const secureAxios=axios.create(
                        {
                         baseURL:url,
                         headers:{
                          "Authorization":`bearer ${token}`
                        }
                      })

  const exist=useSelector(state=>state.friendReducer.exist)
  const email=useSelector(state=>state.userReducer.email)
  const name=useSelector(state=>state.userReducer.name)
  const dp=useSelector(state=>state.userReducer.path)
  const friends=useSelector(state=>state.friendReducer.friends)
  const pendings=useSelector(state=>state.friendReducer.pendings)
  const sent=useSelector(state=>state.friendReducer.sent)


             const handleCloseDp= () => {
                    setOpenDp(false);
              };
              const handleOpenDp= () => {
                      setOpenDp(true);

               };


              const uploadDp=()=>{
                let file=document.getElementById('file-input').files[0];

                if(!document.getElementById('file-input').value)return

                handleCloseDp()

                document.getElementById('file-input').value=''
                document.getElementById('loader').style.display='block'

                let data=new FormData()
                data.append('file',file)
                data.append('path',file.name)

                secureAxios.post('updateDp',data)
                .then((response)=>{
                  const body=response.data

                  if(body.status==1){
                    if(file)file.value=""
                    document.getElementById('loader').style.display='none'
                    dispatch({type:'load_user',payload:{name,email,path:file.name}})
                    localStorage.setItem('token',body.token)
                  }
                  else toast.error('Something went wrong',{autoClose:1000})
                })
                .catch(err=>toast.error('Something went wrong',{autoClose:1000}) );


              }
  useEffect(()=>{
      if(friends?.find(profile=>profile.email==profileEmail)){setStatus('Connected'); setOption('Disconnect');  }
      else if(pendings?.find(profile=>profile.email==profileEmail)){setStatus('Pending'); setOption('Accept'); }
      else if(sent?.find(profile=>profile.email==profileEmail)){ setStatus('Request sent'); setOption('Cancel request');   }
      else {setStatus('Not Connected'); setOption('Connect'); }

      if(exist)return;

      secureAxios.get('getFriend')
      .then((response)=>{
            const body=response.data

            if(body.status==1){
                dispatch({type:'load_friend',payload:{pendings:body.pendings,friends:body.friends,sent:body.sent,exist:true}})
                dispatch({type:'load_user',payload:{name:body.name,email:body.email,path:body.path,exist:true}})
            }
      })
      .catch(err=>{
        alert(err)
        props.history.push('/signin');
      })

  },[sent,friends,pendings])


  return (
    <>
    <Header2 name='Profile'  {...props}/>
    <center><CircularProgress id='loader' style={{marginTop:'100px',display:'none'}}/></center>
    <Dialog
      open={openDp}
      onClose={handleCloseDp}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
    {
      (email===profileEmail)?
      <>
        <DialogTitle>Change Profile Picure</DialogTitle>
        <label for="file-input">
         <AttachFileIcon style={{color:'blue',width:'80px',cursor:'pointer'}}/>
        </label>
        <input id="file-input" name='file' type="file" style={{display:'none'}} onChange={(evt)=>{
         document.getElementById('preview').setAttribute('src', window.URL.createObjectURL(evt.target.files[0]))
         }}/>
         <center><img id='preview' src={url+`/uploads/${profileDp}/${token}`} width='300px' height='300px'/></center>
         <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={uploadDp}
          >
            Upload
          </Button>
        </>
      :
      <center><img id='preview' src={url+`/uploads/${profileDp}/${token}`} width='300px' height='300px'/></center>
    }
    </Dialog>

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <center><Avatar src={url+`/uploads/${profileDp}/${token}`}  style={{borderColor:'#00008B',color:'lightgrey',width:'70px',height:'70px'}} onClick={handleOpenDp}></Avatar></center>
      <center><p>{profile.name}</p></center>
      {(email!=profileEmail)?
        <>
          <center><p>{status}</p></center>

          <button class='btn btn-sm btn-primary' onClick={connect.bind(this,secureAxios,dispatch,profile,option)} >{option}</button>
          {(status=='Pending')?<button class='btn btn-sm btn-danger' onClick={connect.bind(this,secureAxios,dispatch,profile,'Disconnect')}>Decline</button>:null }
        </>
        :null
      }
      <Box mt={8} className={classes.footer}>
        <Copyright />
      </Box>
    </Container>
    </>
  );
}
export {connect}
