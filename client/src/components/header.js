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
import ChatIcon from '@material-ui/icons/Chat';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import CloseIcon from '@material-ui/icons/Close';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';

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
    searchBar: {
     position: 'relative',
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
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));



const signout=(push,dispatch)=>
{
  localStorage.removeItem('token')
  dispatch({type:'clear'})
  push('/signin')
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Header(props)
{
    //const { window } = props;
    const container = document.body;//window !== undefined ? () => window().document.body : undefined;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const dispatch=useDispatch()




     const handleDrawerToggle = () => {
       (props.match.params.room)?props.history.push('/'):setMobileOpen(!mobileOpen);
     };

     const [latest,setLatest]=useState([])
     const [openSearch, setOpenSearch] = React.useState(false);
     const [openDp, setOpenDp] = React.useState(false);

     const [searchstring, setSearchstring] = React.useState("");
     const [searchList, setSearchList] = React.useState([]);

         const token=localStorage.getItem('token')

         const secureAxios=axios.create(
                               {
                                baseURL:url,
                                headers:{
                                 "Authorization":`bearer ${token}`
                               }
                             })

           const handleClickOpenSearch = () => {
             setOpenSearch(true);
           };

           const handleCloseSearch = () => {
             setOpenSearch(false);
           };

           const handleCloseDp= () => {
                  setOpenDp(false);
            };
            const handleOpenDp= () => {
                    setOpenDp(true);

             };


            const uploadDp=()=>{
              let file=document.getElementById('file-input').files[0];

              if(!document.getElementById('file-input').value)return
              document.getElementById('file-input').value=''
              document.getElementById('loader').style.display='block'

              let data=new FormData()
              data.append('file',file)
              data.append('path',file.name)

              secureAxios.post('updateDp',data)
              .then((response)=>{
                const body=response.data

                if(body.status==1){
                  if(file)file.value=""
                  document.getElementById('loader').style.display='none'
                  dispatch({type:'load_user',payload:{name,email,path:file.name}})
                  localStorage.setItem('token',body.token)
                  handleCloseDp()
                }
                else toast.error('Something went wrong',{autoClose:1000})
              })
              .catch(err=>toast.error('Something went wrong',{autoClose:1000}) );


            }

           const debounce=(fun,d)=>{
               let timer;
               return function(){
                 let context=this;
                 clearTimeout(timer)
                 timer=setTimeout(()=>{
                   fun.apply(context,arguments)
                 },d)
              }
           }


               function searching(evt){
                 evt.preventDefault()

                 secureAxios.post('searchPeople',{searchstring:evt.target.value})
                 .then(response=>{
                     const body=response.data
                     if(body.status)setSearchList(body.users)
                     else toast.error('Something went wrong',{autoComplete:1500})
                 })
               }

               const handleSearch=(evt)=>{
                  evt.preventDefault()
                  debouncedSearching(evt)
               }

               const debouncedSearching=debounce(searching,300)

    const email=useSelector(state=>state.userReducer.email)
    const name=useSelector(state=>state.userReducer.name)
    const dp=useSelector(state=>state.userReducer.path)

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
     const menulist=[['Friends','/friends',AccountBoxIcon],['Chats','/chats',ChatIcon],['Groups','/groups',GroupIcon],['Enter group','/enterroom',DirectionsRunIcon],['Create group','/newroom',AddIcon],['Sign out','/signin',ExitToAppIcon]]


     const drawer = (
       <div>
       <center>{<Avatar src={url+`/uploads/${dp}/${token}`} style={{borderColor:'#00008B',color:'lightgrey',marginTop:'10px',width:'70px',height:'70px'}} onClick={handleOpenDp}></Avatar>}</center>
       <center><p>{name}</p></center>
        <div className={classes.toolbar} style={{marginTop:'-60px'}}/>
         <Divider />
         <List>
           {menulist.map((items, index) => (
             <ListItem button key={items[0]} onClick={()=>{(items[0]==='Sign out')?signout(props.history.push,dispatch):props.history.push(items[1])}}>
               <ListItemIcon style={{color:'#00008B'}}>{createElement(items[2], {})}</ListItemIcon>
               <ListItemText primary={items[0]} />
             </ListItem>
           ))}
         </List>
       </div>
     );

  return <div >
            <center><CircularProgress id='loader' style={{marginTop:'100px',display:'none'}}/></center>
            <Dialog
              open={openDp}
              onClose={handleCloseDp}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">Change Profile Picture</DialogTitle>
              <label for="file-input">
               <AttachFileIcon style={{color:'blue',width:'80px',cursor:'pointer'}}/>
              </label>
              <input id="file-input" name='file' type="file" style={{display:'none'}} onChange={(evt)=>{
               document.getElementById('preview').setAttribute('src', window.URL.createObjectURL(evt.target.files[0]))
               }}/>
               <center><img id='preview' src={url+`/uploads/${dp}/${token}`} width='300px' height='300px'/></center>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={uploadDp}
              >
                Upload
              </Button>
            </Dialog>


           <Dialog fullScreen open={openSearch} onClose={handleCloseSearch} TransitionComponent={Transition}>
             <AppBar className={classes.searchBar}>
              <Toolbar>
               <IconButton edge="start" color="inherit" onClick={handleCloseSearch} aria-label="close">
                  <CloseIcon />
                </IconButton>
                <TextField
                  style={{backgroundColor:'white',borderRadius:'10px'}}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="search"
                  label='Search people'
                  type="text"
                  onChange={handleSearch}
                  autoComplete="current-password"
                  autoFocus
                />
              </Toolbar>
            </AppBar>

            <List>
            {
              searchList.map(user=>{
                  return <ListItem button>
                    <ListItemAvatar>
                      <Avatar src={url+`/uploads/${user.path}/${token}`} style={{borderColor:'#00008B',color:'lightgrey'}}>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.name} secondary={user.email} onClick={()=>props.history.push(`/profile/${user.email}-${user.name}`)}/>
                  </ListItem>
              })
            }
            </List>
            </Dialog>

  <AppBar position="static" className={classes.appBar}>
    <Tabs
    style={{display:'flex'}}
    variant="fullWidth"
    indicatorColor="primary"
    textColor="primary"
    aria-label="icon tabs example"
   >
      <Tab icon={<HomeIcon style={{color:'white'}}/>}  onClick={()=>props.history.push('/')} aria-label="phone" />
      <Tab icon={<ChatIcon style={{color:'white'}}/>}  onClick={()=>props.history.push('/chats')} aria-label="chat" />
      <Tab icon={<GroupIcon style={{color:'white'}}/>}  onClick={()=>props.history.push('/groups')} aria-label="group" />
      <Tab icon={<AccountBoxIcon style={{color:'white'}}/>}  onClick={()=>props.history.push('/friends')} aria-label="person" />
      <Tab icon={<SearchIcon style={{color:'white'}}/>}  onClick={handleClickOpenSearch} aria-label="search" />
      <Tab icon={<MenuIcon style={{color:'white'}}/>}
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      />
    </Tabs>

  </AppBar>
  <nav className={classes.drawer}  aria-label="mailbox folders">
    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    <Hidden smUp implementation="css">
      <Drawer
        container={container}
        variant="temporary"
        anchor={'right'}
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
