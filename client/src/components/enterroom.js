import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GroupIcon from '@material-ui/icons/Group';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import url from '../url'
import Header2 from './header2'
import CircularProgress from '@material-ui/core/CircularProgress';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 0px 3px 3px blue',
    padding: '30px'
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
  main:{
    paddingTop: '30px',
    marginTop: '45px',
    height: "100vh",
    marginLeft: '100px',
    background: 'linear-gradient(to right, #4682B4, #87CEEB)'
  }
}));

export default function Enterroom(props) {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState('none');

  const dispatch = useDispatch()

  const enterroom = (evt) => {
    setLoader('block')
    evt.preventDefault()
    const token = localStorage.getItem('token')
    const secureAxios = axios.create(
      {
        baseURL: url,
        headers: {
          "Authorization": `bearer ${token}`
        }
      })

    const data = { name, pass: password }
    secureAxios.post('enterroom', data)
      .then((response) => {
        setLoader('none')
        const body = response.data
        console.log('body', body)
        if (body.status == 1) {
          console.log('name', name)
          dispatch({ type: 'add_latest_group', payload: name });
          console.log('URL', `/chat/${name}`)
          props.history.push(`/chat/${name}`); 
        }
        else toast.error(body.msg, { autoClose: 1500 })
      })
      .catch(err => {
        setLoader('none')
        toast.error(err, { autoClose: 1500 })
        props.history.push('/signin');
      })
  }

  return (
    <div class={classes.main}>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper}>
          <CircularProgress style={{ position: 'fixed', top: '70px', display: loader }} />
          <Avatar className={classes.avatar} >
            <GroupIcon />
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
                  onChange={(evt) => setName(evt.target.value)}
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
                  onChange={(evt) => setPassword(evt.target.value)}
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
        </Paper>
      </Container>
    </div>
  );
}
