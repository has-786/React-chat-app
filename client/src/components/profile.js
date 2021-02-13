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

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

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

  const token=localStorage.getItem('token')
  const profile=useSelector(state=>state.profileReducer)
  const profileName=profile.name
  const profileEmail=profile.email
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
  const friends=useSelector(state=>state.friendReducer.friends)
  const pendings=useSelector(state=>state.friendReducer.pendings)
  const sent=useSelector(state=>state.friendReducer.sent)

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
                dispatch({type:'load_user',payload:{name:body.name,email:body.email,exist:true}})
            }
      })
      .catch(err=>{
        alert(err)
        props.history.push('/signin');
      })

  },[sent,friends,pendings])


  return (
    <>
    <Header2 name='Profile' {...props}/>

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <center><AccountBoxIcon style={{color:'blue',width:'70px',height:'70px'}}/></center>
      <center><p>{profile.name}</p></center>
      <center><p>{status}</p></center>

      <button class='btn btn-sm btn-primary' onClick={connect.bind(this,secureAxios,dispatch,profile,option)} >{option}</button>
      {(status=='Pending')?<button class='btn btn-sm btn-danger' onClick={connect.bind(this,secureAxios,dispatch,profile,'Disconnect')}>Decline</button>:null }
      <Box mt={8} className={classes.footer}>
        <Copyright />
      </Box>
    </Container>
    </>
  );
}
export {connect}
