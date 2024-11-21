import io from "socket.io-client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import ChatIcon from "@material-ui/icons/Chat";
import PersonIcon from "@material-ui/icons/Person";
import Copyright from "./copyright";
import Empty from './empty'
import axios from "axios";
import url from "../url";

import { connect } from "./profile";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  main: {
    paddingTop: '30px',
    marginTop: '45px',
    height: "100vh",
    marginLeft: '100px',
    background: 'linear-gradient(to right, #4682B4, #87CEEB)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  container: {
    marginTop: '10px'
  },
  heading: {
    fontSize: '14px',
    fontFamily: 'sans-serif',
    fontWeight: 'bold'
  },
  list: {
    padding: '10px 0 40px 0'
  }
}));

export default function Friends(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [openAccept, setOpenAccept] = useState(false);
  const [profile, setProfile] = useState(null);
  const [openDisconnect, setOpenDisconnect] = useState(false);
  const [disconnectStatus, setDisconnectStatus] = useState("Disconnect");

  const handleClickOpenAccept = () => {
    setOpenAccept(true);
  };

  const handleCloseAccept = () => {
    setOpenAccept(false);
  };

  const handleClickOpenDisconnect = () => {
    setOpenDisconnect(true);
  };

  const handleCloseDisconnect = () => {
    setOpenDisconnect(false);
  };

  const token = localStorage.getItem("token");

  const secureAxios = axios.create({
    baseURL: url,
    headers: {
      Authorization: `bearer ${token}`
    }
  });

  const exist = useSelector(state => state.friendReducer.exist);
  const email = useSelector(state => state.userReducer.email);
  const friends = useSelector(state => state.friendReducer.friends);
  const pendings = useSelector(state => state.friendReducer.pendings);

  useEffect(() => {
    if (exist) return;

    secureAxios
      .get("getFriend")
      .then(response => {
        const body = response.data;
        console.log('body', body)

        if (body.status == 1) {
          dispatch({
            type: "load_friend",
            payload: {
              friends: body.friends,
              pendings: body.pendings,
              sent: body.sent,
              exist: true
            }
          });
          dispatch({
            type: "load_user",
            payload: {
              name: body.name,
              email: body.email,
              path: body.path,
              exist: true
            }
          });
        }
      })
      .catch(err => {
        toast.error(err);
        props.history.push("/signin");
      });
  }, []);

  const generate = (email1, email2) => {
    let email3 = email1 > email2 ? email1 : email2;
    let email4 = email1 < email2 ? email1 : email2;

    return email4 + "-" + email3;
  };

  console.log('pendings', pendings)
  console.log('friends', friends)

  return (
    <div class={classes.main}>
      <Dialog
        open={openAccept}
        onClose={handleCloseAccept}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Are you sure want to connect?
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => handleCloseAccept()} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              connect(secureAxios, dispatch, profile, "Accept");
              handleCloseAccept();
            }}
            color="primary"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDisconnect}
        onClose={handleCloseDisconnect}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure want to {disconnectStatus}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDisconnect} color="primary">
            No
          </Button>
          <Button
            onClick={() => {
              connect(secureAxios, dispatch, profile, "Disconnect");
              handleCloseDisconnect();
            }}
            color="primary"
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div class={classes.container}>
          <div className={classes.heading}>Connection Requests</div>
          <Divider />
          {
            !!pendings?.length ? <div className={classes.list}>
            <List>
            {pendings
              .sort((a, b) => {
                return a < b ? -1 : 1;
              })
              .map((profile, index) =>
                <ListItem
                  button
                  key={profile.name}
                  onClick={() =>
                    props.history.push(
                      `/profile/${profile.email}-${profile.name}`
                    )}
                >
                  <ListItemAvatar>
                    <Avatar src={url + `/uploads/${profile.path}/${token}`}>
                      <PersonIcon color="lightgrey" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={profile.name} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <CheckIcon
                        style={{ color: "green" }}
                        onClick={() => {
                          setProfile(profile);
                          handleClickOpenAccept();
                        }}
                      />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <ClearIcon
                        color="secondary"
                        onClick={() => {
                          setProfile(profile);
                          setDisconnectStatus("Decline");
                          handleClickOpenDisconnect();
                        }}
                      />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
          </List>
          </div>
          : <Empty />
          }
          <br />
          <br />
          <div className={classes.heading}>Friends</div>
          <Divider />
          {
            !!friends?.length ? <div className={classes.list}>
            <List>
              {friends
                .sort((a, b) => {
                  return a < b ? -1 : 1;
                })
                .map((profile, index) =>
                  <ListItem
                    button
                    key={profile.name}
                    onClick={() =>
                      props.history.push(
                        `/profile/${profile.email}-${profile.name}`
                      )}
                  >
                    <ListItemAvatar>
                      <Avatar src={url + `/uploads/${profile.path}/${token}`}>
                        <PersonIcon color="lightgrey" />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={profile.name} />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <ClearIcon
                          color="secondary"
                          onClick={() => {
                            setProfile(profile);
                            setDisconnectStatus("Disconnect");
                            handleClickOpenDisconnect();
                          }}
                        />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <ChatIcon
                          color="primary"
                          onClick={() =>
                            props.history.push(
                              `/personal/${generate(
                                profile.email,
                                email
                              )}/${profile.email}-${email}`
                            )}
                        />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )}
            </List>
          </div>
          : <Empty />
          }
        </div>
      </Container>
    </div>
  );
}
