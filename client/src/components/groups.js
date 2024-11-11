import io from "socket.io-client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import GroupIcon from "@material-ui/icons/Group";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

import axios from "axios";
import url from "../url";
import Copyright from "./copyright";
import Header from "./header";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
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
  container: {
    marginTop: '20px'
  }
}));

export default function Groups(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [edit, setEdit] = useState(null);
  const [newPassword, setNewPassword] = useState("");

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => {
    setEdit(null);
    setOpen(false);
  };

  const handleClickOpenDel = () => setOpenDel(true);

  const handleCloseDel = () => {
    setEdit(null);
    setOpenDel(false);
  };

  const token = localStorage.getItem("token");

  const secureAxios = axios.create({
    baseURL: url,
    headers: {
      Authorization: `bearer ${token}`
    }
  });

  const exist = useSelector((state) => state.groupReducer.exist);

  useEffect(() => {
    if (exist) return;

    secureAxios
      .get("getRooms")
      .then((response) => {
        const body = response.data;
        if (body.status == 1) {
          dispatch({
            type: "load_group",
            payload: { latest: body.latest, rooms: body.rooms, exist: true }
          });
          dispatch({
            type: "load_user",
            payload: { name: body.name, email: body.email, path: body.path }
          });
        }
      })
      .catch((err) => {
        alert(err);
        props.history.push("/signin");
      });
  }, []);

  const editRoom = (room) => {
    secureAxios
      .post("editRoom", { room, newPassword })
      .then((response) => {
        const body = response.data;
        if (body.status === 1) {
          toast.success(`Password updated successfully for room ${room}`);
          dispatch({ type: "edit_group" });
        } else toast.error("Something went wrong");
      })
      .catch((err) => {
        alert(err);
        props.history.push("/signin");
      });
  };

  const exitRoom = (room) => {
    secureAxios
      .post("exitRoom", { room })
      .then((response) => {
        const body = response.data;
        if (body.status === 1) dispatch({ type: "exit_group", payload: room });
        else toast.error("Something went wrong");
      })
      .catch((err) => {
        alert(err);
        props.history.push("/signin");
      });
  };

  const deleteRoom = (room) => {
    secureAxios
      .post("deleteRoom", { room })
      .then((response) => {
        const body = response.data;
        if (body.status === 1)
          dispatch({ type: "delete_my_group", payload: room });
        else toast.error("Something went wrong");
      })
      .catch((err) => {
        toast.error(err);
        props.history.push("/signin");
      });
  };

  const rooms = useSelector((state) => state.groupReducer.rooms);
  const latest = useSelector((state) => state.groupReducer.latest);

  return (
    <div class={classes.main}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Edit password for group {edit}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Enter new password below</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            value={newPassword}
            onChange={(evt) => setNewPassword(evt.target.value)}
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              setNewPassword("");
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              editRoom(edit);
              handleClose();
              setNewPassword("");
            }}
            color="primary"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openDel}
        onClose={handleCloseDel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete group</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure want to delete group {edit}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDel} color="primary">
            No
          </Button>
          <Button
            onClick={() => {
              deleteRoom(edit);
              handleCloseDel();
            }}
            color="primary"
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Fab
        color="primary"
        style={{ position: 'fixed', right: 10, top: '92vh', height: "45px", width: "45px", zIndex: '1', float: "right" }}
        aria-label="New Room"
        onClick={() => props.history.push("/newroom")}
      >
        <AddIcon />
      </Fab>
      <Container component="main" maxWidth="xs">
        <div class={classes.container}>
          <h6>My Groups</h6>
          <Divider />
          <List>
            {rooms
              ?.sort((a, b) => (a < b ? -1 : 1))
              .map((text) => (
                <ListItem
                  button
                  key={text}
                  onClick={() => props.history.push(`/chat/${text}`)}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <GroupIcon color="lightgrey" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={text} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <EditIcon
                        color="primary"
                        onClick={() => {
                          setEdit(text);
                          handleClickOpen();
                        }}
                      />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon
                        color="secondary"
                        onClick={() => {
                          setEdit(text);
                          handleClickOpenDel();
                        }}
                      />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
          </List>
          <h6>All Groups</h6>
          <Divider />
          <List>
            {latest
              ?.sort((a, b) => (a < b ? -1 : 1))
              .map((text) => (
                <ListItem
                  button
                  key={text}
                  onClick={() => props.history.push(`/chat/${text}`)}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <GroupIcon color="lightgrey" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={text} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={exitRoom.bind(this, text)}
                    >
                      <MeetingRoomIcon color="secondary" />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
          </List>
        </div>
      </Container>
    </div>
  );
}
