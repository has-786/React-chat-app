import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import imageCompression from 'browser-image-compression';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import url from '../url'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

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
  tabLink : {
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Uploadpost(props) {
  const classes = useStyles();
  const uploaderName=useSelector(state=>state.userReducer.name)
  const uploaderEmail=useSelector(state=>state.userReducer.email)

  const [desc,setDesc]=useState('')
  const dispatch=useDispatch()
  const token=localStorage.getItem('token')
  const secureAxios=axios.create(
                        {
                         baseURL:url,
                         headers:{
                          "Authorization":`bearer ${token}`
                        }
                      })
   const days=['January','February','March','April','May','June','July','August','September','October','November','December']

   async function upload(event){
    event.preventDefault();

    const dateObj = new Date();
    const day = dateObj.getUTCDate();
    const month = dateObj.getUTCMonth(); //months from 1-12
    const year = dateObj.getUTCFullYear();

    let h=dateObj.getHours();
    let m=dateObj.getMinutes();

    const time=dateObj.getTime()/1000;

    h=(parseInt(h/10)==0)?('0'+h):h;
    m=(parseInt(m/10)==0)?('0'+m):m;

    const date=`${days[month]} ${day}, ${year} ${h}:${m}`
    const file=document.getElementById('file-input').files[0]

          let data=new FormData()
          data.append('uploaderName',uploaderName)
          data.append('uploaderEmail',uploaderEmail)
          data.append('desc',desc)
          data.append('path',file?.name)
          data.append('time',time)
          data.append('date',date)
          data.append('file',file)



          secureAxios.post('uploadpost',data)
          .then((response)=>{
            const body=response.data

            if(body.status==1){
              if(file)file.value=""
              setDesc("")
              toast.success(body.msg,{autoClose:1000})
              dispatch({type:'add_post',payload:{...body.post,liked:false,likeCount:0}})
              props.history.replace('/');
            }
            else toast.error('Something went wrong',{autoClose:1000})
          })
          .catch(err=>toast.error('Something went wrong',{autoClose:1000}) );
}


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Post
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            multiline
            rows={2}
            fullWidth
            type='text'
            label="Add description"
            value={desc}
            onChange={(evt)=>setDesc(evt.target.value)}
            autoFocus
          />
          Add photo
          <label for="file-input">
           <AttachFileIcon style={{color:'blue',width:'80px',cursor:'pointer'}}/>
          </label>
          <input id="file-input" name='file' type="file" style={{display:'none'}} onChange={(evt)=>{
           document.getElementById('preview').setAttribute('src', window.URL.createObjectURL(evt.target.files[0]))
           }}/>
           <img id='preview' width='200px' height='200px'/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={upload}
            className={classes.submit}
          >
            Post
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
