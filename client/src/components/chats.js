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
import Slide from '@material-ui/core/Slide';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import RoomIcon from '@material-ui/icons/Room';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import CloseIcon from '@material-ui/icons/Close';

import axios from 'axios'
import url from '../url'
import socket from '../socketurl'

import Header from './header'

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()





const useStyles = makeStyles((theme) => ({
  appBar: {
   position: 'relative',
 },
 title: {
   marginLeft: theme.spacing(2),
   flex: 1,
 },
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
  },
  main:{height:'100vh'}

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


export default function Chats(props) {

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

  const exist=useSelector(state=>state.recentReducer.exist)
  const chats=useSelector(state=>state.recentReducer.chats)
  const email=useSelector(state=>state.userReducer.email)
  const name=useSelector(state=>state.userReducer.name)
  const [chatslocal,setChatslocal]=useState(chats)
  const [searchstring, setSearchstring] = React.useState("");

  useEffect(()=>{
      if(exist)return;

      secureAxios.get('getChat')
      .then((response)=>{
            const body=response.data
            if(body.status==1)
                dispatch({type:'load_recent',payload:body.chats})
                setChatslocal(body.chats)
      })
      .catch(err=>{
        toast.error(err)
        props.history.push('/signin');
      })

  },[])

  const searching=(evt)=>{
    evt.preventDefault()
    const temp=chats.filter(c=>c.roomName.includes(evt.target.value) || c.room.includes(evt.target.value) )
    if(temp.length==0)setChatslocal(chats)
    else setChatslocal(temp)
  }

  return (
    <div class={classes.main}>
      <div style={{position:'fixed',width:'100%'}}>
        <Header {...props}/>
      </div>
      <br /><br /><br />
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div>
      <TextField
        style={{backgroundColor:'white',borderRadius:'10px'}}
        variant="outlined"
        margin="normal"
        fullWidth
        name="search"
        label='Search Chat'
        type="text"
        onChange={searching}
        autoComplete="current-password"
      />
      <br /><br />

      <List>
        {chatslocal.map((c, index) => (
          <ListItem button key={c.roomName} onClick={()=>props.history.push(c.link)}>
              <ListItemAvatar>
                    <Avatar src={url+`/uploads/${c.dp}/${token}`}>
                    {(c.room===c.roomName)?<GroupIcon color="lightgrey" />:<PersonIcon color='lightgrey'/>}
                    </Avatar>
              </ListItemAvatar>

              <ListItemText primary={c.roomName} />
          </ListItem>
        ))}
      </List>
      </div>

      <Box mt={8} className={classes.footer}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}
