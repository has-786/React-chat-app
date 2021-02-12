import React,{createElement,useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/Inbox';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
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
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import axios from 'axios'
import url from '../url'

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));



const signout=(push,dispatch)=>
{
  localStorage.removeItem('token')
  localStorage.removeItem('name')
  localStorage.removeItem('email')

  dispatch({type:'clear'})
  push('/signin')
}

export default function Header(props)
{
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const dispatch=useDispatch()

     const handleDrawerToggle = () => {
       (props.match.params.room)?props.history.push('/'):setMobileOpen(!mobileOpen);
     };

     const [latest,setLatest]=useState([])
     const token=localStorage.getItem('token')


     const email=useSelector(state=>state.userReducer.email)
     const name=useSelector(state=>state.userReducer.name)

    if(!name || !email)
     {
       const secureAxios=axios.create(
                             {
                              baseURL:url,
                              headers:{
                               "Authorization":`bearer ${token}`
                             }
                           })

        secureAxios.get('getUser')
        .then((response)=>{
                              const body=response.data
                              dispatch({type:'load_user',payload:body})
        })
        .catch(err=>toast.error(err))
     }
     const menulist=[['Home','/',HomeIcon],['Friends','/friends',AccountCircleIcon],['Enter group','/enterroom',DirectionsRunIcon],['Create group','/newroom',AddIcon],['Sign out','/signin',ExitToAppIcon]]

     const secureAxios=axios.create(
                           {
                            baseURL:url,
                            headers:{
                             "Authorization":`bearer ${token}`
                           }
                         })


     const drawer = (
       <div>
       <center><AccountBoxIcon style={{color:'blue',width:'70px',height:'70px'}}/></center>
       <center><p>{name}</p></center>
        <div className={classes.toolbar} style={{marginTop:'-60px'}}/>
         <Divider />
         <List>
           {menulist.map((items, index) => (
             <ListItem button key={items[0]} onClick={()=>{(items[0]==='Sign out')?signout(props.history.push,dispatch):props.history.push(items[1])}}>
               <ListItemIcon>{createElement(items[2], {})}</ListItemIcon>
               <ListItemText primary={items[0]} />
             </ListItem>
           ))}
         </List>
       </div>
     );

  return <div style={{marginBottom:'5px'}}>
  <AppBar position="static" className={classes.appBar}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
       {(props.match.params.room)?<ArrowBackIcon />:<MenuIcon />}
      </IconButton>
      <Typography variant="h6" noWrap>
        {props.name}
      </Typography>
    </Toolbar>
  </AppBar>
  <nav className={classes.drawer} aria-label="mailbox folders">
    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    <Hidden smUp implementation="css">
      <Drawer
        container={container}
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </Hidden>
    <Hidden xsDown implementation="css">
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        open
      >
        {drawer}
      </Drawer>
    </Hidden>
  </nav>
  </div>



}
