import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Header from "./header";
import Copyright from "./copyright";
import axios from "axios";
import url from "../url";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0px 0px 3px 3px blue",
    padding: "30px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  tabLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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
  }
}));

export default function Signin(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState("none");
  const dispatch = useDispatch();

  const login = (event) => {
    setLoader("block");

    event.preventDefault();
    const data = { email, pass: password };

    axios
      .post(url + "/localSignin", data)
      .then((response) => {
        setLoader("none");

        const body = response.data;
        let email, name, token, path;

        if (body.status == 1) {
          email = body.email;
          name = body.name;
          token = body.token;
          path = body.path;
          toast.success("Signed in successfully", { autoClose: 1000 });
          dispatch({ type: "load_user", payload: { name, email, path } });

          localStorage.setItem("token", token);

          props.history.push("/");
        } else toast.error("Something went wrong", { autoClose: 1000 });
      })
      .catch((err) => {
        setLoader("none");
        toast.error("Something went wrong" + err, { autoClose: 1000 });
      });
  };

  return (
    <div class={classes.main}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={3} className={classes.paper}>
          <CircularProgress
            style={{ position: "fixed", top: "70px", display: loader }}
          />

          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={login}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/changePassword">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  Don't have an account?
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
