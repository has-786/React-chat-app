import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GroupIcon from '@material-ui/icons/Group';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import url from '../url'
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
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Enterroom(props) {
  const classes = useStyles();
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const dispatch=useDispatch()

  const enterroom=(evt)=>{
    evt.preventDefault()
    const token=localStorage.getItem('token')
    const secureAxios=axios.create(
                          {
                           baseURL:url,
                           headers:{
                            "Authorization":`bearer ${token}`
                          }
                        })

      const data={name,pass:password}
      secureAxios.post('enterroom',data)
      .then((response)=>{
            const body=response.data
            if(body.status==1){   dispatch({type:'add_latest_group',payload:name});   props.history.push(`/chat/${name}`); }
            else toast.error(body.msg,{autoClose:1500})
      })
      .catch(err=>{
        toast.error(err,{autoClose:1000})
        props.history.push('/signin');
      })



  }

  return (
    <>
    <Header2 name='' {...props}/>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} >
          <GroupIcon/>

        </Avatar>
        <Typography component="h1" variant="h5">
          Enter Group
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Group Name"
                name="email"
                autoComplete="email"
                value={name}
                onChange={(evt)=>setName(evt.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
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
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={enterroom}
          >
           Enter
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='/newroom' variant="body2">
                Create New Group
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </>
  );
}
