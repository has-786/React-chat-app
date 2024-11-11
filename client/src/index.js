import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./configStore";

import Header from "./components/header";
// import Copyright from "./components/copyright";

import Authenticatedgroups from "./Auth/AuthenticatedGroups";

import Authenticatedprofile from "./Auth/AuthenticatedProfile";

import Authenticatedchatting from "./Auth/AuthenticatedChatting";

import AuthenticatedpersonalChatting from "./Auth/AuthenticatedPersonalChatting";

import Authenticatedenterroom from "./Auth/AuthenticatedEnterroom";

import Authenticatednewroom from "./Auth/AuthenticatedNewroom";

import Authenticatedposts from "./Auth/AuthenticatedPosts";

import Authenticatedfriends from "./Auth/AuthenticatedFriends";

import Authenticatedchats from "./Auth/AuthenticatedChats";

import Loading from "./components/loading";
import { Divider } from "@material-ui/core";

const Authredirect = lazy(() => import("./Auth/AuthRedirect"));

const Groups = lazy(() => import("./components/groups"));

const Chats = lazy(() => import("./components/chats"));

const Chatting = lazy(() => import("./components/chatting"));

const Profile = lazy(() => import("./components/profile"));

const Friends = lazy(() => import("./components/friends"));

const Signin = lazy(() => import("./components/signin"));

const Signup = lazy(() => import("./components/signup"));

const Newroom = lazy(() => import("./components/newroom"));

const Enterroom = lazy(() => import("./components/enterroom"));

const Changepassword = lazy(() => import("./components/changePassword"));

const Posts = lazy(() => import("./components/posts"));

const Uploadpost = lazy(() => import("./components/uploadpost"));

ReactDom.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <div style={{ position: "fixed", width: "100%", zIndex: 10 }}>
          <Header  />
        </div>
        <Divider />
        <Switch>
          <Route
            exact
            path="/"
            component={Authenticatedposts(Posts, Authredirect)}
          />
          <Route
            path="/chats"
            component={Authenticatedgroups(Chats, Authredirect)}
          />
          <Route
            path="/groups"
            component={Authenticatedgroups(Groups, Authredirect)}
          />
          <Route
            path="/enterroom"
            component={Authenticatedenterroom(Enterroom, Authredirect)}
          />
          <Route
            path="/newroom"
            component={Authenticatednewroom(Newroom, Authredirect)}
          />
          <Route
            path="/profile/:profile"
            component={Authenticatedprofile(Profile, Authredirect)}
          />
          <Route
            path="/friends"
            component={Authenticatedfriends(Friends, Authredirect)}
          />
          <Route
            exact
            path="/chat/:room"
            component={Authenticatedchatting(Chatting, Authredirect)}
          />
          <Route
            exact
            path="/personal/:room/:emails"
            component={AuthenticatedpersonalChatting(Chatting, Authredirect)}
          />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/changePassword" component={Changepassword} />
          <Route path="/uploadpost" component={Uploadpost} />
        </Switch>
        {/* <div style={{ position: 'absolute', zIndex: 10, bottom: 10, left: '45%', right: '35%',}}>
            <Copyright />
        </div> */}
      </BrowserRouter>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
