import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import url from '../url';
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup(props) {
  const classes = useStyles();
  const token=localStorage.getItem('token')

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const [otp,setOtp]=useState('')
  const [receivedOtp,setReceivedOtp]=useState('')
  const dispatch=useDispatch()


  	const register=(event)=>{
  		event.preventDefault();

      if(otp!=receivedOtp){
        toast.error('Incorrect OTP',{autoClose:1000}); return;
      }

      if(confirmPassword!=password){toast("Password and Confirm password don't match",{autoClose:1000});}

      const file=document.getElementById('file-input').files[0]

            let data=new FormData()
            data.append('name',name)
            data.append('email',email)
            data.append('pass',password)
            data.append('path',file?.name)
            data.append('file',file)

  		axios.post(url+'/localSignup',data)
      .then((response)=>{
        const body=response.data
        let email=null,name=null,token=null;
      //  alert(body.msg);
        if(body.status==1){
          toast.success('Signed up successfully',{autoClose:1000})
          email=body.email;name=body.name;token=body.token;

          dispatch({type:'load_user',payload:{name,email,path:file?.name}})

          localStorage.setItem('token',token);

          props.history.push('/');
        }
  		})
      .catch(err=>console.log(err));
   }



  	const verify=(event)=>{
    		event.preventDefault();
    		let data={email};
        //alert(secureAxios)
        axios.post(url+'/emailverify',data)
        .then((response)=>{
            const body=response.data
            let receivedOtp=null;

            if(body.status==1){toast.info(body.msg,{autoClose:1000});setReceivedOtp(body.otp);}
            else toast.error(body.msg,{autoClose:1000});

             //localStorage.setItem('otp',receivedOtp);
    		 })
         .catch(err=>console.log(err));
    }




  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Name"
            name="name"
            value={name}
            onChange={(evt)=>setName(evt.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(evt)=>setEmail(evt.target.value)}
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={verify}
          >
            Send OTP
          </Button>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="otp"
            label="Enter OTP"
            name="otp"
            value={otp}
            onChange={(evt)=>setOtp(evt.target.value)}
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(evt)=>setPassword(evt.target.value)}
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={confirmPassword}
            onChange={(evt)=>setConfirmPassword(evt.target.value)}
            autoComplete="current-password"
          />
          Add photo
          <label for="file-input">
           <AttachFileIcon style={{color:'blue',width:'80px',cursor:'pointer'}}/>
          </label>
          <input id="file-input" name='file' type="file" style={{display:'none'}} onChange={(evt)=>{
           document.getElementById('preview').setAttribute('src', window.URL.createObjectURL(evt.target.files[0]))
           }}/>
           <img id='preview' width='100%' height='100%'/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={register}
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='/changePassword' variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signin" variant="body2">
                Already have an account?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
