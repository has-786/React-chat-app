import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import {Provider} from 'react-redux';


import Authenticatedchats from './Auth/AuthenticatedChats';
import Authenticatedprofile from './Auth/AuthenticatedProfile';
import Authenticatedchatting from './Auth/AuthenticatedChatting';
import AuthenticatedpersonalChatting from './Auth/AuthenticatedPersonalChatting';
import Authenticatedenterroom from './Auth/AuthenticatedEnterroom';
import Authenticatednewroom from './Auth/AuthenticatedNewroom';
import Authenticatedposts from './Auth/AuthenticatedPosts'
import Authenticatedfriends from './Auth/AuthenticatedFriends'
import Authredirect from './Auth/AuthRedirect'

import Chats from './components/chats';
import Chatting from './components/chatting';
import Profile from './components/profile';
import Friends from './components/friends';
import Signin from './components/signin';
import Signup from './components/signup';
import Newroom from './components/newroom';
import Enterroom from './components/enterroom';
import Changepassword from './components/changePassword';
import Posts from './components/posts';

import store from './configStore';


ReactDom.render(
<Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route  exact path='/' component={Authenticatedposts(Posts,Authredirect)} />
      <Route  path='/chats' component={Authenticatedchats(Chats,Authredirect)} />
      <Route  path='/signin' component={Signin} />
      <Route  path='/signup' component={Signup} />
      <Route  path='/enterroom' component={Authenticatedenterroom(Enterroom,Authredirect)} />
      <Route  path='/newroom' component={Authenticatednewroom(Newroom,Authredirect)} />
      <Route  path='/profile/:profile' component={Authenticatedprofile(Profile,Authredirect)} />
      <Route  path='/friends' component={Authenticatedfriends(Friends,Authredirect)} />
      <Route  path='/changePassword' component={Changepassword} />
      <Route  exact path='/chat/:room' component={Authenticatedchatting(Chatting,Authredirect)} />
      <Route  exact path='/personal/:room/:emails' component={AuthenticatedpersonalChatting(Chatting,Authredirect)} />
    </Switch>
  </BrowserRouter>
</Provider>
,
document.getElementById('root'));
