import React,{lazy,Suspense} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './configStore';


import Authenticatedgroups from './Auth/AuthenticatedGroups';
//const Authenticatedgroups=lazy(()=>import('./Auth/AuthenticatedGroups'))

import Authenticatedprofile from './Auth/AuthenticatedProfile';
//const Authenticatedprofile=lazy(()=>import('./Auth/AuthenticatedProfile'))

import Authenticatedchatting from './Auth/AuthenticatedChatting';
//const Authenticatedchatting=lazy(()=>import('./Auth/AuthenticatedChatting'))

import AuthenticatedpersonalChatting from './Auth/AuthenticatedPersonalChatting';
//const AuthenticatedpersonalChatting=lazy(()=>import('./Auth/AuthenticatedPersonalChatting'))

import Authenticatedenterroom from './Auth/AuthenticatedEnterroom';
//const Authenticatedenterroom=lazy(()=>import('./Auth/AuthenticatedEnterroom'))

import Authenticatednewroom from './Auth/AuthenticatedNewroom';
//const Authenticatednewroom=lazy(()=>import('./Auth/AuthenticatedNewroom'))

import Authenticatedposts from './Auth/AuthenticatedPosts'
//const Authenticatedposts=lazy(()=>import('./Auth/AuthenticatedPosts'))
import Authenticatedfriends from './Auth/AuthenticatedFriends'
//const Authenticatedfriends=lazy(()=>import('./Auth/AuthenticatedFriends'))

import Authenticatedchats from './Auth/AuthenticatedChats'
//const Authenticatedchats=lazy(()=>import('./Auth/AuthenticatedChats'))


import Loading from './components/loading'

//import Authredirect from './Auth/AuthRedirect'
const Authredirect=lazy(()=>import('./Auth/AuthRedirect'))

//import Groups from './components/groups';
const Groups=lazy(()=>import('./components/groups'))

//import Chats from './components/chats';
const Chats=lazy(()=>import('./components/chats'))

//import Chatting from './components/chatting';
const Chatting=lazy(()=>import('./components/chatting'))

//import Profile from './components/profile';
const Profile=lazy(()=>import('./components/profile'))

//import Friends from './components/friends';
const Friends=lazy(()=>import('./components/friends'))

//import Signin from './components/signin';
const Signin=lazy(()=>import('./components/signin'))

//import Signup from './components/signup';
const Signup=lazy(()=>import('./components/signup'))

//import Newroom from './components/newroom';
const Newroom=lazy(()=>import('./components/newroom'))

//import Enterroom from './components/enterroom';
const Enterroom=lazy(()=>import('./components/enterroom'))

//import Changepassword from './components/changePassword';
const Changepassword=lazy(()=>import('./components/changePassword'))

//import Posts from './components/posts';
const Posts=lazy(()=>import('./components/posts'))

//import Uploadpost from './components/uploadpost';
const Uploadpost=lazy(()=>import('./components/uploadpost'))




ReactDom.render(
<Provider store={store}>
<Suspense fallback={<Loading />}>
  <BrowserRouter>
    <Switch>
      <Route  exact path='/' component={Authenticatedposts(Posts,Authredirect)} />
      <Route  path='/chats' component={Authenticatedgroups(Chats,Authredirect)} />
      <Route  path='/groups' component={Authenticatedgroups(Groups,Authredirect)} />
      <Route  path='/enterroom' component={Authenticatedenterroom(Enterroom,Authredirect)} />
      <Route  path='/newroom' component={Authenticatednewroom(Newroom,Authredirect)} />
      <Route  path='/profile/:profile' component={Authenticatedprofile(Profile,Authredirect)} />
      <Route  path='/friends' component={Authenticatedfriends(Friends,Authredirect)} />
      <Route  exact path='/chat/:room' component={Authenticatedchatting(Chatting,Authredirect)} />
      <Route  exact path='/personal/:room/:emails' component={AuthenticatedpersonalChatting(Chatting,Authredirect)} />

      <Route  path='/signin' component={Signin} />
      <Route  path='/signup' component={Signup} />
      <Route  path='/changePassword' component={Changepassword} />
      <Route  path='/uploadpost' component={Uploadpost} />
    </Switch>
  </BrowserRouter>
</Suspense>
</Provider>
,
document.getElementById('root'));
