import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Header from './header';
import url from '../url';
import axios from 'axios';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin:'auto'
  },
  media: {// 4:
    paddingTop: '100%', // 16:9

  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Posts(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const email=useSelector(state=>state.userReducer.email)
  //const email='syedhasnain9163@gmail.com';
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const token=localStorage.getItem('token')
  const dispatch=useDispatch()
  const exist=useSelector(state=>state.postReducer.exist)
  const posts=useSelector(state=>state.postReducer.post)

  useEffect(()=>{
    console.log(posts)
    if(exist)return;
    const secureAxios=axios.create(
                          {
                           baseURL:url,
                           headers:{
                            "Authorization":`bearer ${token}`
                          }
                        })
                        secureAxios.get('getPost')
                        .then((response)=>{
                          const body=response.data

                          if(body.status==1){

                            dispatch({type:'load_post',payload:body.post})

                            props.history.replace('/');
                          }
                          else toast.error('Something went wrong',{autoClose:1000})
                        }).catch(err=>toast.error('Something went wrong',{autoClose:1000}) );



  },[])

    const hidePost=(_id)=>{

      alert(posts.indexOf(posts.find(p=>p._id==_id)))
        dispatch({type:'hide_post',payload:_id})
        handleClose()
    }

      const deletePost=(email,_id)=>{
        const secureAxios=axios.create(
                              {
                               baseURL:url,
                               headers:{
                                "Authorization":`bearer ${token}`
                              }
                            })
                            secureAxios.post('deletePost',{email,_id})
                            .then((response)=>{
                              const body=response.data

                              if(body.status==1){

                                dispatch({type:'hide_post',payload:_id})
                                toast.success('Post was deleted',{autoClose:1500})

                                props.history.replace('/');
                              }
                              else toast.error('Something went wrong',{autoClose:1000})
                            }).catch(err=>toast.error('Something went wrong',{autoClose:1000}) );
                            handleClose()

      }



  const likePost=(email,_id,liked)=>{
    const secureAxios=axios.create(
                          {
                           baseURL:url,
                           headers:{
                            "Authorization":`bearer ${token}`
                          }
                        })
                        secureAxios.post('likePost',{email,_id,liked})
                        .then((response)=>{
                          const body=response.data

                          if(body.status==1){

                            dispatch({type:'like_post',payload:{_id,liked}})

                            props.history.replace('/');
                          }
                          else toast.error('Something went wrong',{autoClose:1000})
                        }).catch(err=>toast.error('Something went wrong',{autoClose:1000}) );

  }


  return (
    <>
    <div style={{position:'fixed',width:'100%'}}>
      <Header {...props}/>
    </div>
    <br /><br/>
    <div>

    <Fab color="primary" style={{height:'45px',width:'45px',float:'right'}}  aria-label="New Room" onClick={()=>props.history.push('/uploadpost')}>
      <AddIcon />
    </Fab>
    <br /><br />
    <Divider />
    {
      posts.map(p=>{
        return  <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}
            //  src="https://media-exp1.licdn.com/dms/image/C5103AQH7Z-tFum_fGg/profile-displayphoto-shrink_400_400/0/1529940395952?e=1619049600&v=beta&t=zwUfkkCN8y_FHshFVUFnoz0R02zFo_arICIr9l9VOwA"
              >
              {p.uploaderName.split(" ").map(word=>word[0].toUpperCase()) }
              </Avatar>
            }
            action={
              <>
              <IconButton aria-label="settings">
                <MoreVertIcon onClick={handleClick}/>
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={hidePost.bind(this,p._id)}>Hide</MenuItem>

              {(email==p.uploaderEmail)?<MenuItem onClick={deletePost.bind(this,p.email,p._id)}>Delete</MenuItem>:null}
              </Menu>
              </>
            }
            title={p.uploaderName}
            subheader={p.date}
          />
          <img src={`${url}/uploads/${p.path}/${token}`} width="100%" height="100%"/>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {p.desc.slice(0,30)}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <ThumbUpAltIcon onClick={likePost.bind(this,email,p._id,p.liked)} color={(p.liked)?'Primary':''}/>
            </IconButton > {p.likeCount}
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
               {p.desc}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>




      })
    }

    </div>
    </>
  );
}
