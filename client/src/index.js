import React from 'react';
import ReactDom from 'react-dom';

import Page1 from './components/page1';
import Page2 from './components/page2';



import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';


ReactDom.render(
<BrowserRouter>
  <Switch>
    <Route exact path='/' component={Page1} />
    <Route path='/page2' component={Page2} />

  </Switch>
</BrowserRouter>,
document.getElementById('root'));
