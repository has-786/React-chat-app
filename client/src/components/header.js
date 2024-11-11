import React, { createElement, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ChatIcon from "@material-ui/icons/Chat";
import CloseIcon from "@material-ui/icons/Close";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import GroupIcon from "@material-ui/icons/Group";
import SearchIcon from "@material-ui/icons/Search";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import Slide from "@material-ui/core/Slide";

import axios from "axios";
import url from "../url";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  searchBar: {
    position: "relative"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  appBar2: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    // height: '50px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  title: {
    flexGrow: 1,
    padding: '10px',
    color: '#F5F5DC	',
    fontSize: '16px'
  },
  search: {
    float: 'right'
  },
  signout: {
    marginLeft: '3px'
  }
}));

const signout = (push, dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "clear" });
  push("/signin");
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = (props) => {
  const container = document.body;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  console.log('props.match.params', props, props.location.pathname)
  const pathName = props.location.pathname

  const handleDrawerToggle = () => {
    props.match.params.room
      ? props.history.push("/")
      : setMobileOpen(!mobileOpen);
  };

  const [openSearch, setOpenSearch] = useState(false);
  const [openDp, setOpenDp] = useState(false);
  const [searchList, setSearchList] = useState([]);

  const token = localStorage.getItem("token");

  const secureAxios = axios.create({
    baseURL: url,
    headers: {
      Authorization: `bearer ${token}`
    }
  });

  const handleClickOpenSearch = () => setOpenSearch(true);
  const handleCloseSearch = () => setOpenSearch(false);
  const handleCloseDp = () => setOpenDp(false);
  const handleOpenDp = () => setOpenDp(true);

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
      .then(response => {
        const body = response.data;

        if (body.status === 1) {
          if (file) file.value = "";
          document.getElementById("loader").style.display = "none";
          dispatch({
            type: "load_user",
            payload: { name, email, path: file.name }
          });
          localStorage.setItem("token", body.token);
        } else toast.error("Something went wrong", { autoClose: 1000 });
      })
      .catch(err => toast.error("Something went wrong", { autoClose: 1000 }));
  };

  const debounce = (fun, d) => {
    let timer;
    return function() {
      let context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fun.apply(context, arguments);
      }, d);
    };
  };

  function searching(evt) {
    evt.preventDefault();

    secureAxios
      .post("searchPeople", { searchstring: evt.target.value })
      .then(response => {
        const body = response.data;
        if (body.status) setSearchList(body.users);
        else toast.error("Something went wrong", { autoComplete: 1500 });
      });
  }

  const handleSearch = evt => {
    evt.preventDefault();
    debouncedSearching(evt);
  };

  const debouncedSearching = debounce(searching, 300);

  const email = useSelector(state => state.userReducer.email);
  const name = useSelector(state => state.userReducer.name);
  const dp = useSelector(state => state.userReducer.path);

  if (!name || !email) {
    const secureAxios = axios.create({
      baseURL: url,
      headers: {
        Authorization: `bearer ${token}`
      }
    });

    secureAxios
      .get("getUser")
      .then(response => {
        const body = response.data;
        dispatch({ type: "load_user", payload: body });
      })
      .catch(err => toast.error(err));
  }
  const menulist = [
    ["Feed", "/", HomeIcon],
    ["Friends", "/friends", AccountBoxIcon],
    ["Chats", "/chats", ChatIcon],
    ["Groups", "/groups", GroupIcon],
    ["Enter group", "/enterroom", DirectionsRunIcon],
    ["Create group", "/newroom", AddIcon],
    // ["Search", "", SearchIcon],
    // (!token ? ["Sign in", "/signin", ExitToAppIcon] : ["Sign out", "/signout", ExitToAppIcon])
  ]

  const headerTitleMap = {
    "/": "Feed",
    "/friends": "Friends",
    "/chats": "Chats",
    "/groups": "Groups",
    "/enterroom": "Enter group",
    "/newroom": "Create group",
    "/signin": "Sign in",
    "/signup": "Sign up",
    "/uploadpost": "Create post"
  }
  // const headerTitle = props.location.pathname !== '/' ? (menulist.find(item => item[1] !== '/' && props.location.pathname.includes(item[1]))?.[0]) : 'SocioWe'

  const drawer = (
    <div>
      <center>
        {
          <Avatar
            src={url + `/uploads/${dp}/${token}`}
            style={{
              borderColor: "#00008B",
              color: "lightgrey",
              marginTop: "10px",
              width: "70px",
              height: "70px"
            }}
            onClick={handleOpenDp}
          />
        }
      </center>
      <center>
        <p>
          {name}
        </p>
      </center>
      <div className={classes.toolbar} style={{ marginTop: "-60px" }} />
      <Divider />
      <List>
        {menulist.map((items) =>
          <ListItem
            button
            key={items[0]}
            onClick={() => {
              items[0] === "Sign out"
                ? signout(props.history.push, dispatch)
                : items[0] === "Search" ? setOpenSearch(true)
                : props.history.push(items[1]);
            }}
          >
            <ListItemIcon style={{ color: "#00008B" }}>
              {createElement(items[2], {})}
            </ListItemIcon>
            <ListItemText primary={items[0]} />
          </ListItem>
        )}
      </List>
    </div>
  );

  return (
    <div>
      <Dialog
        open={openDp}
        onClose={handleCloseDp}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Change Profile Picture
        </DialogTitle>
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
          onChange={evt => {
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
            src={url + `/uploads/${dp}/${token}`}
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
      </Dialog>

      <Dialog
        fullScreen
        open={openSearch}
        onClose={handleCloseSearch}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.searchBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseSearch}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <TextField
              style={{ backgroundColor: "white", borderRadius: "10px" }}
              variant="outlined"
              margin="normal"
              fullWidth
              name="search"
              label="Search people"
              type="text"
              onChange={handleSearch}
              autoComplete="current-password"
              autoFocus
            />
          </Toolbar>
        </AppBar>

        <List>
          {searchList.map(user => {
            return (
              <ListItem button>
                <ListItemAvatar>
                  <Avatar
                    src={url + `/uploads/${user.path}/${token}`}
                    style={{ borderColor: "#00008B", color: "lightgrey" }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={user.email}
                  onClick={() => {
                    props.history.push(`/profile/${user.email}-${user.name}`)
                    setOpenSearch(false)
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </Dialog>
      {
        !(pathName.includes('/chat/') || pathName.includes('/personal/') || pathName.includes('/profile/')) &&  <AppBar className={classes.appBar2}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
              {headerTitleMap[props.location.pathname]}
          </Typography>
          {
            !!token && <>
              <IconButton edge="start" color="inherit" onClick={() => setOpenSearch(true)}>
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit" onClick={() => signout(props.history.push, dispatch)}>
                <ExitToAppIcon />
              </IconButton>
            </>
          }
        </Toolbar>
        {/* <Tabs
          style={{ display: "flex" }}
          variant="fullWidth"
          indicatorColor="#A7C7E7"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Tab
            icon={<HomeIcon style={{ color: "white" }} />}
            onClick={() => props.history.push("/")}
            aria-label="phone"
          />
          <Tab
            icon={<ChatIcon style={{ color: "white" }} />}
            onClick={() => props.history.push("/chats")}
            aria-label="chat"
          />
          <Tab
            icon={<GroupIcon style={{ color: "white" }} />}
            onClick={() => props.history.push("/groups")}
            aria-label="group"
          />
          <Tab
            icon={<SearchIcon style={{ color: "white" }} />}
            onClick={handleClickOpenSearch}
            aria-label="search"
          />
          <Tab
            icon={<MenuIcon style={{ color: "white" }} />}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          />
        </Tabs> */}
      </AppBar>
      }
      <nav className={classes.drawer} aria-label="mailbox folders">
        <center>
          <CircularProgress
            id="loader"
            style={{ marginTop: "100px", display: "none" }}
          />
        </center>

        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default withRouter(Header)