/*import io from 'socket.io-client';
import {useRef} from 'react';
const Home=(props)=>{


  const nameRef=useRef(null);
  const roomRef=useRef(null);
  const userId=useRef(null);
  const level=useRef(null);
  const action=useRef(null);

  return <div>
          <center><div>Chat 110</div>
          <form >
            <input type='text' name='userId' ref={userId} placeholder='your id'/><br /><br />
            <input type='text' name='vendorId'    placeholder='vendor name' value='vendor 1'/><br /><br />
            <input type='text' name='level' ref={level} placeholder='Level No.'/><br /><br />

            <select name='action' ref={action}>
              <option>Approved</option>
              <option>Rejected</option>
              <option>Reject & Remove from workflow</option>
            </select>
            <br /><br />
            <button  value='submit' onClick={(evt)=>{alert(JSON.stringify(userId.current.value));submit(evt,userId.current.value,level.current.value,action.current.value)}}>Submit</button><br />


          </form>
          </center>
         </div>



}*/
import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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

export default function Home(props) {
  const classes = useStyles();

  const [userId,setUserId]=useState('');
  const [level,setLevel]=useState('');
  const [action,setAction]=useState('Select');
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper} >
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Approve
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter Your Id"
            name='userId'
            value={userId}
            onChange={(evt)=>setUserId(evt.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Enter Vendor Id"
            name='vendorId'
            value='vendor 1'
          />
          <TextField
            variant="outlined"
            margin="normal"
            type='number'
            required
            fullWidth
            label="Enter Level"
            value={level}
            onChange={(evt)=>setLevel(evt.target.value)}
            autoFocus
          />
          <FormHelperText>Select Action</FormHelperText>

          <Select
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={action}
          onChange={(evt)=>setAction(evt.target.value)}
          autoFocus
          >
            <MenuItem
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value='Approved'>Approved</MenuItem>
            <MenuItem
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value='Rejected'>Rejected</MenuItem>
            <MenuItem
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value='Reject & Remove from workflow'>Reject & Remove from workflow</MenuItem>
          </Select>


          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(evt)=>submit(evt,userId,level,action)}
          >
            Submit
          </Button>

          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={(evt)=>final(evt)}
          >
            Final Result
          </Button>

        </form>
      </div>
    </Container>
  );
}



function submit(e,userId,level,action){
  e.preventDefault();
  /*
  localStorage.setItem('name',name);
  localStorage.setItem('room',room);
  hist.push('/chat');*/
  //    alert(userId+' '+level+' '+action)
      const formData={userId,vendorId:'vendor 1',level,action}
      if(userId=='' || level=='' || action==''){
          alert('Please Fill The Places'); return;
      }

      fetch('http://localhost:5000/config',{ method:'POST',body:JSON.stringify(formData),headers:{'content-type':'application/json'}})
      .then(response=>{ return response.json()})
      .then((body)=>{
               alert(body.msg);
       })
      .catch(err=>alert(JSON.stringify(err)));

}




function final(e){
  e.preventDefault();

      const formData={vendorId:'vendor 1'}
      fetch('http://localhost:5000/final',{ method:'POST',body:JSON.stringify(formData),headers:{'content-type':'application/json'}})
      .then(response=>{ return response.json()})
      .then((body)=>{
               alert(body.finalResult);
       })
      .catch(err=>alert(JSON.stringify(err)));

}
