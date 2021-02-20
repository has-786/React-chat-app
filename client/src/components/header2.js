import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Avatar from '@material-ui/core/Avatar';
import url from '../url';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header2(props) {
  const classes = useStyles();
  const token=localStorage.getItem('token')
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ArrowBackIcon onClick={()=>props.history.goBack()}/>
          </IconButton>
          {(props.dp)?
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Avatar src={url+`/uploads/${props.dp}/${token}`} style={{backgroundColor:'lightgrey'}}></Avatar>
            </IconButton>
            :null
          }
          <Typography variant="h6" className={classes.title}>
            {props.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
