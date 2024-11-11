import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CircularProgress from "@material-ui/core/CircularProgress";
import Copyright from "./copyright";
import axios from "axios";
import url from "../url";

import Header2 from "./header2";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const useStyles = makeStyles((theme) => ({
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
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  main: {
    paddingTop: '25px',
    marginTop: '45px',
    height: "100vh",
    marginLeft: '100px',
    background: 'linear-gradient(to right, #4682B4, #87CEEB)'
  },
}));

const connect = (secureAxios, dispatch, profile, option) => {
  secureAxios
    .post("setFriend", { option, profile })
    .then((response) => {
      const body = response.data;
      if (body.status == 1)
        dispatch({ type: "set_friend", payload: { option, profile } });
    })
    .catch((err) => {
      alert(err);
    });
};

export default function Profile(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [status, setStatus] = useState("Not connected");
  const [option, setOption] = useState("Connect");
  const [openDp, setOpenDp] = React.useState(false);

  const token = localStorage.getItem("token");
  const profile = useSelector((state) => state.profileReducer);
  const profileEmail = profile.email;
  const profileDp = profile.path;
  if (!profile.email) props.history.push("/");

  const secureAxios = axios.create({
    baseURL: url,
    headers: {
      Authorization: `bearer ${token}`
    }
  });

  const exist = useSelector((state) => state.friendReducer.exist);
  const email = useSelector((state) => state.userReducer.email);
  const name = useSelector((state) => state.userReducer.name);
  const friends = useSelector((state) => state.friendReducer.friends);
  const pendings = useSelector((state) => state.friendReducer.pendings);
  const sent = useSelector((state) => state.friendReducer.sent);

  const handleCloseDp = () => {
    setOpenDp(false);
  };
  const handleOpenDp = () => {
    setOpenDp(true);
  };

  const uploadDp = () => {
    let file = document.getElementById("file-input").files[0];

    if (!document.getElementById("file-input").value) return;

    handleCloseDp();

    document.getElementById("file-input").value = "";
    document.getElementById("loader").style.display = "block";

    let data = new FormData();
    data.append("file", file);
    data.append("path", file.name);

    secureAxios
      .post("updateDp", data)
      .then((response) => {
        const body = response.data;

        if (body.status == 1) {
          if (file) file.value = "";
          document.getElementById("loader").style.display = "none";
          dispatch({
            type: "load_user",
            payload: { name, email, path: file.name }
          });
          localStorage.setItem("token", body.token);
        } else toast.error("Something went wrong", { autoClose: 1000 });
      })
      .catch((err) => toast.error("Something went wrong", { autoClose: 1000 }));
  };

  useEffect(() => {
    if (friends?.find((profile) => profile.email == profileEmail)) {
      setStatus("Connected");
      setOption("Disconnect");
    } else if (pendings?.find((profile) => profile.email == profileEmail)) {
      setStatus("Pending");
      setOption("Accept");
    } else if (sent?.find((profile) => profile.email == profileEmail)) {
      setStatus("Request sent");
      setOption("Cancel request");
    } else {
      setStatus("Not Connected");
      setOption("Connect");
    }

    if (exist) return;

    secureAxios
      .get("getFriend")
      .then((response) => {
        const body = response.data;

        if (body.status == 1) {
          dispatch({
            type: "load_friend",
            payload: {
              pendings: body.pendings,
              friends: body.friends,
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
      .catch((err) => {
        alert(err);
        props.history.push("/signin");
      });
  }, [sent, friends, pendings]);

  return (
    <>
      <div style={{ position: "fixed", width: "90%", zIndex: 10, marginLeft: '240px', marginTop: '45px' }}>
        <Header2 name="Profile" {...props} />
      </div>
      <div class={classes.main}>
        <center>
          <CircularProgress
            id="loader"
            style={{ marginTop: "100px", display: "none" }}
          />
        </center>
        <Dialog
          open={openDp}
          onClose={handleCloseDp}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {email === profileEmail ? (
            <>
              <DialogTitle>Change Profile Picure</DialogTitle>
              <label for="file-input">
                <AttachFileIcon
                  style={{ color: "blue", width: "80px", cursor: "pointer" }}
                />
              </label>
              <input
                id="file-input"
                name="file"
                type="file"
                style={{ display: "none" }}
                onChange={(evt) => {
                  document
                    .getElementById("preview")
                    .setAttribute(
                      "src",
                      window.URL.createObjectURL(evt.target.files[0])
                    );
                }}
              />
              <center>
                <img
                  id="preview"
                  src={url + `/uploads/${profileDp}/${token}`}
                  width="300px"
                  height="300px"
                  alt=""
                />
              </center>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={uploadDp}
              >
                Upload
              </Button>
            </>
          ) : (
            <center>
              <img
                id="preview"
                src={url + `/uploads/${profileDp}/${token}`}
                width="300px"
                height="300px"
                alt=""
              />
            </center>
          )}
        </Dialog>
        <Container component="main" maxWidth="xs">
          <center>
            <Avatar
              src={url + `/uploads/${profileDp}/${token}`}
              style={{
                borderColor: "#00008B",
                color: "lightgrey",
                width: "70px",
                height: "70px"
              }}
              onClick={handleOpenDp}
            ></Avatar>
          </center>
          <center>
            <p>{profile.name}</p>
          </center>
          {email !== profileEmail ? (
            <>
              <center>
                <p>{status}</p>
              <button
                class="btn btn-sm btn-danger"
                onClick={connect.bind(
                  this,
                  secureAxios,
                  dispatch,
                  profile,
                  option
                )}
              >
                {option}
              </button>
              {status === "Pending" ? (
                <button
                  class="btn btn-sm btn-danger"
                  onClick={connect.bind(
                    this,
                    secureAxios,
                    dispatch,
                    profile,
                    "Disconnect"
                  )}
                >
                  Decline
                </button>
              ) : null}
              </center>
            </>
          ) : null}
        </Container>
      </div>
    </>
  );
}

export { connect };
