import React from 'react';
import ReactDom from 'react-dom';
import Chatting from './components/chatting';
import Home from './components/home';

import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';



ReactDom.render(
<BrowserRouter>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/chat' component={Chatting} />
  </Switch>
</BrowserRouter>
,
document.getElementById('root'));
