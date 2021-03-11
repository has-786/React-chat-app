import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import PersonIcon from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';

import Header from './header';
import url from '../url';
import axios from 'axios';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin:'auto',
    marginBottom:'10px'
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
    backgroundColor: 'lightgrey',
  },
}));

export default function Posts(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [index,setIndex]=React.useState(0);
  const [read,setRead]=React.useState({});
  const [comment,setComment]=React.useState(null);

  const [replyVisible,setReplyVisible]=React.useState(false);

  const email=useSelector(state=>state.userReducer.email)
  const dp=useSelector(state=>state.userReducer.path)
  const name=useSelector(state=>state.userReducer.name)

  //const email='syedhasnain9163@gmail.com';
    const handleClick = (event,ind) => {
      setIndex(ind)
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

  const readmore=(ind)=>{
    ///alert(evt.target.innerHTML)
    if(!read[ind])
    {
      let temp=JSON.parse(JSON.stringify(read))
      temp[ind]=true
      setRead(temp)
    }
    else{
          let temp=JSON.parse(JSON.stringify(read))
          temp[ind]=false
          setRead(temp)
    }

  }

  const secureAxios=axios.create(
    {
     baseURL:url,
     headers:{
      "Authorization":`bearer ${token}`
    }
  })

  useEffect(()=>{
    console.log(posts)
    if(exist)return;
   
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


  const addComment=(type,_id,index)=>{
    let comment=""
    if(type==='comment')
    {
        comment=document.getElementById(_id).value
        document.getElementById(_id).value=""
    }
    else
    {
      comment=document.getElementById(_id+index).value
      document.getElementById(_id+index).value=""
    }

    const commentData={name,email,path:dp,content:comment,reply:[]}

    secureAxios.post('addComment',{_id,type,comment:commentData,index})
    .then((response)=>{
      const body=response.data
      if(body.status==1){
        dispatch({type:`add_${type}`,payload:{_id,comment:commentData,index}});   toast.success(`Your ${type} was added`,{autoClose:1000});
      }
      else toast.error('Something went wrong',{autoClose:2000})
    })
    .catch(err=>toast.error('Something went wrong '+err,{autoClose:2000}) );

  }

  const showComments=(_id,cmnts,type,index)=>{
    //alert(JSON.stringify(cmnts))
      return <>
       <List>
        {
          cmnts?.map((c,index)=>{
           return <ListItem>
                <ListItemAvatar>
                  <Avatar src={url+`/uploads/${c.path}/${token}`}>
                    <PersonIcon color='lightgrey'/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText secondary={c.content}  primary={c.name} />
                
                    <ListItemSecondaryAction>
                  
                    {(type==='comment')?<Button color='primary' data-toggle="collapse" data-target={"#reply"+_id+index}>Reply</Button>:null}
                    
                    </ListItemSecondaryAction>
                    <br /><br />
                    {
                      (type==='comment')?
                      <ListItemSecondaryAction  id={"reply"+_id+index} class='collapse' style={{paddingLeft:'50px'}}>
                          {showComments(_id,c.reply,'reply',index)}
                      </ListItemSecondaryAction>
                      :null
                    }
            </ListItem>
          })
          
        }
        </List>
        <>
          { (type==='reply')?
            <>
            <TextField label={`Add a reply`} id={_id+index} style={{marginLeft:'5px',width:'92%'}} />
            <SendIcon color='secondary' style={{float:'right'}} onClick={()=>addComment('reply',_id,index)} />
          </>
            :null
          }
         </>
      </>
        
        
      
      
  }


    const hidePost=(index)=>{
        const _id=posts[index]._id
        dispatch({type:'hide_post',payload:_id})
        handleClose()
    }

      const deletePost=(email,index)=>{
        const _id=posts[index]._id

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
                              }
                              else toast.error('Something went wrong',{autoClose:1000})
                            }).catch(err=>toast.error('Something went wrong',{autoClose:1000}) );
                            handleClose()

      }



  const likePost=(email,_id,liked)=>{
      dispatch({type:'like_post',payload:{_id,liked}})

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

                          if(body.status==1){  }
                          else toast.error('Something went wrong',{autoClose:1000})
                        }).catch(err=>toast.error('Something went wrong',{autoClose:1000}) );

  }


  return (
    <>
    <div style={{position:'fixed',width:'100%'}}>
      <Header {...props}/>
    </div>
    <br /><br/><br />
    <div>
    <Fab color="primary" style={{height:'45px',width:'45px',float:'right'}}  aria-label="New Room" onClick={()=>props.history.push('/uploadpost')}>
      <AddIcon />
    </Fab>
    <br /><br /><br />
    <Divider />
    <Container component="main" maxWidth="xl">
      <CssBaseline />
    {
      posts?.map((p,ind)=>{
        return <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}
                src={`${url}/uploads/${p.uploaderDp}/${token}`}
                 onClick={()=>props.history.push(`/profile/${p.uploaderEmail}-${p.uploaderName}`)}
                >
              </Avatar>
            }
            action={
              <>
              <IconButton aria-label="settings">
                <MoreVertIcon onClick={(evt)=>handleClick(evt,ind)}/>
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
              <MenuItem onClick={hidePost.bind(this,index)}>Hide</MenuItem>
              {(email===posts[index].uploaderEmail)?<MenuItem onClick={deletePost.bind(this,email,index)}>Delete</MenuItem>:null}
              </Menu>
              </>
            }
            title={p.uploaderName}
            subheader={p.date}
          />
          <CardContent>
            <Typography paragraph>

            {(p.desc.split(" ").length<=30)?p.desc
              :
              (read[ind])?p.desc:p.desc.split(" ").slice(0,30).join(" ")
            }
            &nbsp;&nbsp;
            {(p.desc.split(" ").length>30)?<Link style={{textDecoration:"none",fontSize:'15px'}} onClick={readmore.bind(this,ind)}>{(!read[ind])?"read more":"read less"}</Link>
            :null
            }

            </Typography>

          </CardContent>



            { (p.path!='undefined' && (p.path.includes('.jpg') || p.path.includes('.png') || p.path.includes('.jpeg')))?<img src={`${url}/uploads/${p.path}/${token}`} width="100%" height="100%" />
              :(p.path!='undefined' && (p.path.includes('.mp4') || p.path.includes('.wav') || p.path.includes('.ogg')))?
              <video width="100%" height="100%" controls>
                  <source src={url+`/uploads/${p.path}/${token}`} type="video/mp4" />
                  <source src={url+`/uploads/${p.path}/${token}`} type="video/wav" />
                  <source src={url+`/uploads/${p.path}/${token}`}  type="video/ogg" />
                </video>
                :null
            }


          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <ThumbUpAltIcon onClick={likePost.bind(this,email,p._id,p.liked)} color={(p.liked)?'Primary':''}/>
            </IconButton > {p.likeCount}
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
           
          </CardActions>
          <Button color='secondary' data-toggle="collapse"  data-target={"#reply"+p._id} style={{textTransform:'none',float:'right',marginTop:'-50px'}}>Comments</Button>
              <br />
              
                <CardContent id={"reply"+p._id} class='collapse'>
                    
                  <TextField label={`Add a comment`} id={p._id} style={{marginLeft:'5px',width:'92%'}} />
                  <SendIcon color='secondary' style={{float:'right'}} onClick={()=>addComment('comment',p._id)} />
                    {showComments(p._id,p.comment,'comment')}
                </CardContent>
            </Card>
      })
    }
    </Container>

    </div>
    </>
  );
}
