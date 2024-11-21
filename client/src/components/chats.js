import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Avatar from "@material-ui/core/Avatar"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import GroupIcon from "@material-ui/icons/Group"
import PersonIcon from "@material-ui/icons/Person"

import axios from "axios"
import url from "../url"
import Copyright from "./copyright"
import Empty from "./empty";

import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
toast.configure()

const useStyles = makeStyles(theme => ({
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
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  main: {
    height: "100vh",
    paddingTop: '30px',
    marginTop: '45px',
    marginLeft: '100px',
    background: 'linear-gradient(to right, #4682B4, #87CEEB)'
  }
}))

export default function Chats(props) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const token = localStorage.getItem("token")

  const secureAxios = axios.create({
    baseURL: url,
    headers: {
      Authorization: `bearer ${token}`
    }
  })

  const exist = useSelector(state => state.recentReducer.exist)
  const chats = useSelector(state => state.recentReducer.chats)
  const [ chatslocal, setChatslocal ] = useState(chats)
  secureAxios.interceptors.request.use(config => {
    console.log('axios config', config)
    return config
  })
  secureAxios.interceptors.response.use(res => {
    console.log('axios res', res)
    return res
  }, err => {
    console.log('axios err', err)
  })
  
  useEffect(() => {
    if (exist) return

    secureAxios
      .get("getChat")
      .then(response => {
        const body = response.data
        if (+body.status === 1)
          dispatch({ type: "load_recent", payload: body.chats })
        setChatslocal(body.chats)
      })
      .catch(err => {
        toast.error(err)
        props.history.push("/signin")
      })
  }, [])

  const searching = evt => {
    evt.preventDefault()
    const temp = chats.filter(
      c =>
        c.roomName.includes(evt.target.value) ||
        c.room.includes(evt.target.value)
    )
    if (temp.length == 0) setChatslocal(chats)
    else setChatslocal(temp)
  }

  return (
    <div class={classes.main}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <TextField
            style={{ backgroundColor: "white", borderRadius: "10px" }}
            variant="outlined"
            margin="normal"
            fullWidth
            name="search"
            label="Search Chat"
            type="text"
            onChange={searching}
            autoComplete="current-password"
          />
          <br />
          <br />
          {
            !!chatslocal?.length ?  <List>
            {chatslocal.map((c, index) =>
              <ListItem
                button
                key={c.roomName}
                onClick={() => props.history.push(c.link)}
              >
                <ListItemAvatar>
                  <Avatar src={url + `/uploads/${c.dp}/${token}`}>
                    {c.room === c.roomName
                      ? <GroupIcon color="lightgrey" />
                      : <PersonIcon color="lightgrey" />}
                  </Avatar>
                </ListItemAvatar>

                <ListItemText primary={c.roomName} />
              </ListItem>
            )}
          </List> : <Empty />
          }
        </div>
      </Container>
    </div>
  )
}
