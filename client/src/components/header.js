import React,{createElement,useState,useEffect} from 'react'
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

import axios from 'axios'
import url from '../url'


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

const signout=(push)=>
{
  localStorage.removeItem('token')
  push('/signin')
}

export default function Header(props)
{
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

     const handleDrawerToggle = () => {
       setMobileOpen(!mobileOpen);
     };

     const [latest,setLatest]=useState([])
     const token=localStorage.getItem('token')
     const name=localStorage.getItem('name')
     const menulist=[['Home','/',HomeIcon], ['Enter group','/enterroom',DirectionsRunIcon],['Create group','/newroom',AddIcon],['Sign out','/signin',ExitToAppIcon]]

     const secureAxios=axios.create(
                           {
                            baseURL:url,
                            headers:{
                             "Authorization":`bearer ${token}`
                           }
                         })

     useEffect(()=>{
         secureAxios.get('getRooms')
         .then((response)=>{
               const body=response.data
               setLatest(body.latest)
         })
         .catch(err=>{  props.history.push('/signin');  })
     },[])

     const drawer = (
       <div>
       <center><AccountCircleIcon style={{color:'blue',width:'70px',height:'70px'}}/></center>
       <center><p>{name}</p></center>
        <div className={classes.toolbar} style={{marginTop:'-60px'}}/>
         <Divider />
         <List>
           {menulist.map((items, index) => (
             <ListItem button key={items[0]} onClick={()=>{(items[0]==='Sign out')?signout(props.history.push):props.history.push(items[1])}}>
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
        <MenuIcon />
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
