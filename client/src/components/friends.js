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
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import RoomIcon from '@material-ui/icons/Room';
import GroupIcon from '@material-ui/icons/Group';

import axios from 'axios'
import url from '../url'
import socket from '../socketurl'

import Header from './header'

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


export default function Profile(props) {

  const profile=props.match.params.email

  const classes=useStyles()
  const dispatch=useDispatch()

  const token=localStorage.getItem('token')

  const secureAxios=axios.create(
                        {
                         baseURL:url,
                         headers:{
                          "Authorization":`bearer ${token}`
                        }
                      })

  const exist=useSelector(state=>state.friendReducer.exist)

  useEffect(()=>{
      if(exist)return;

      secureAxios.get('getFriends')
      .then((response)=>{
            const body=response.data
            if(body.status==1){
                dispatch({type:'load_friend',payload:{friends:body.friends,pendings:body.pendings,exist:true}})
            }
      })
      .catch(err=>{
        toast.error(err)
        props.history.push('/signin');
      })

  },[])

  const updateFriend=()=>{
     const email=localStorage.getItem('email')
     secureAxios.get('updateFriend')
     .then((response)=>{
           const body=response.data
           if(body.status==1){
               dispatch({type:'load_friend',payload:{friends:body.friends,pendings:body.pendings,exist:true}})
           }
     })
     .catch(err=>{
       toast.error(err)
       props.history.push('/signin');
     })

  }

    const friends=useSelector(state=>state.groupReducer.friends)
    const pendings=useSelector(state=>state.groupReducer.pendings)

    if(friends.includes(profile))setStatus("Disconnect")
    else if(pendings.includes(profile))setStatus("Accept")

  return (
    <>
    <Header name='Profile' {...props}/>

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <button onClick={connect}>{status}</button>
      <Box mt={8} className={classes.footer}>
        <Copyright />
      </Box>
    </Container>
    </>
  );
}
