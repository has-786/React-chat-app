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
import Paper from '@material-ui/core/Paper';

import axios from 'axios'
import url from '../url';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    boxShadow:'0px 0px 3px 3px blue',
    padding:'30px'
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

export default function Newroom(props) {
  const classes = useStyles();

  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const [loader,setLoader]=useState('none');
  const dispatch=useDispatch()

  const newroom=(evt)=>{
    setLoader('block')
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
      secureAxios.post('newroom',data)
      .then((response)=>{
                setLoader('none')
                const body=response.data
                if(body.status==1){   toast.success(body.msg,{autoClose:1000}); dispatch({type:'add_my_group',payload:name}); props.history.push('/'); }
                else toast.error(body.msg,{autoClose:1000})
        })
        .catch(err=>{
            setLoader('none')
            toast.error(err,{autoClose:1000})
            props.history.push('/signin');
        })
  }



  return (
    <>
    <Header2 name='' {...props}/>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} className={classes.paper}>
      <CircularProgress style={{position:'fixed',top:'70px',display:loader}}/>

        <Avatar className={classes.avatar}>
          <GroupIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Group
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
                value={name}
                onChange={(evt)=>setName(evt.target.value)}
                autoComplete="email"
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
            onClick={newroom}
          >
           Create
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='/enterroom' variant="body2">
                Enter Already Existing Group
              </Link>
            </Grid>
          </Grid>

        </form>
      </Paper>
    </Container>
    </>
  );
}
