import React from 'react';
import ReactDom from 'react-dom';


import Authenticatedhome from './Auth/AuthenticatedHome';
import Authenticatedchatting from './Auth/AuthenticatedChatting';
import Authenticatedenterroom from './Auth/AuthenticatedEnterroom';
import Authenticatednewroom from './Auth/AuthenticatedNewroom';
import Authredirect from './Auth/AuthRedirect'

import Home from './components/home';
import Chatting from './components/chatting';
import Signin from './components/signin';
import Signup from './components/signup';
import Newroom from './components/newroom';
import Enterroom from './components/enterroom';

import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';

ReactDom.render(
<BrowserRouter>
  <Switch>
    <Route  exact path='/' component={Authenticatedhome(Home,Authredirect)} />
    <Route  path='/signin' component={Signin} />
    <Route  path='/signup' component={Signup} />
    <Route  path='/enterroom' component={Authenticatedenterroom(Enterroom,Authredirect)} />
    <Route  path='/newroom' component={Authenticatednewroom(Newroom,Authredirect)} />
    <Route  path='/chat/:room' component={Authenticatedchatting(Chatting,Authredirect)} />
  </Switch>
</BrowserRouter>
,
document.getElementById('root'));
