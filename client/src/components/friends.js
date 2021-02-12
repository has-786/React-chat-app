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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import ChatIcon from '@material-ui/icons/Chat';

import axios from 'axios'
import url from '../url'
import socket from '../socketurl'

import Header from './header'
import {connect} from './profile'

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


export default function Friends(props) {

  const classes=useStyles()
  const dispatch=useDispatch()

  const [openAccept, setOpenAccept] = React.useState(false);
  const [profile, setProfile] = React.useState(null);
  const [openDisconnect, setOpenDisconnect] = React.useState(false);
  const [disconnectStatus, setDisconnectStatus] = React.useState('Disconnect');


  const handleClickOpenAccept = () => {
    setOpenAccept(true);
  };

  const handleCloseAccept = () => {
     setOpenAccept(false);
  };

  const handleClickOpenDisconnect = () => {
    setOpenDisconnect(true);
  };

  const handleCloseDisconnect = () => {
    setOpenDisconnect(false);
  };

  const token=localStorage.getItem('token')

  const secureAxios=axios.create(
                        {
                         baseURL:url,
                         headers:{
                          "Authorization":`bearer ${token}`
                        }
                      })

  const exist=useSelector(state=>state.friendReducer.exist)
  const name=useSelector(state=>state.userReducer.name)
  const email=useSelector(state=>state.userReducer.email)
  const friends=useSelector(state=>state.friendReducer.friends)
  const pendings=useSelector(state=>state.friendReducer.pendings)


  useEffect(()=>{

      if(exist)return;

      secureAxios.get('getFriend')
      .then((response)=>{
            const body=response.data

            if(body.status==1){
                dispatch({type:'load_friend',payload:{friends:body.friends,pendings:body.pendings,sent:body.sent,exist:true}})
                dispatch({type:'load_user',payload:{name:body.name,email:body.email,exist:true}})
            }
      })
      .catch(err=>{
        toast.error(err)
        props.history.push('/signin');
      })

  },[])

  const generate=(email1,email2)=>{

      let email3=(email1>email2)?email1:email2
      let email4=(email1<email2)?email1:email2

      return email4+'-'+email3
  }



  return (
    <>
    <Header name='Connections' {...props}/>
    <Dialog open={openAccept} onClose={handleCloseAccept} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Are you sure want to connect?</DialogTitle>
        <DialogActions>
          <Button onClick={()=>{handleCloseAccept();  }} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{connect(secureAxios,dispatch,profile,'Accept'); handleCloseAccept();}} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDisconnect}
        onClose={handleCloseDisconnect}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure want to {disconnectStatus}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDisconnect} color="primary">
            No
          </Button>
          <Button onClick={()=>{connect(secureAxios,dispatch,profile,'Disconnect'); handleCloseDisconnect();}} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Divider />
      <br/><br/>
      <div>
      <h6>Connection Requests</h6>
      <Divider />
      <List>
        {pendings.sort((a,b)=>{return (a<b)?-1:1}).map((profile, index) => (
          <ListItem button key={profile.name} onClick={()=>props.history.push(`/profile/${profile.email}-${profile.name}`)}>
              <ListItemAvatar>
                      <AccountCircleIcon color="primary" />
              </ListItemAvatar>
              <ListItemText primary={profile.name} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <CheckIcon style={{color:'green'}} onClick={()=>{setProfile(profile);   handleClickOpenAccept();}}/>
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <ClearIcon color='secondary' onClick={()=>{setProfile(profile);  setDisconnectStatus('Decline'); handleClickOpenDisconnect();}}/>
                </IconButton>
              </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <br /><br />
      <h6>Connections</h6>
      <Divider />
      <List>
        {friends.sort((a,b)=>{return (a<b)?-1:1}).map((profile, index) => (
          <ListItem button key={profile.name} onClick={()=>props.history.push(`/profile/${profile.email}-${profile.name}`)}>
              <ListItemAvatar>
                      <AccountCircleIcon color="primary" />
              </ListItemAvatar>
              <ListItemText primary={profile.name} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <ClearIcon color='secondary' onClick={()=>{setProfile(profile); setDisconnectStatus('Disconnect'); handleClickOpenDisconnect();}} />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                    <ChatIcon color='primary' onClick={()=>props.history.push(`/personal/${generate(profile.email,email)}/${profile.email}-${email}`)} />
                </IconButton>
              </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      </div>
      <Box mt={8} className={classes.footer}>
        <Copyright />
      </Box>
    </Container>
    </>
  );
}
