import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/home';
import Academics from './components/academics';

import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';

ReactDom.render(
<BrowserRouter>
  <Switch>
    <Route exact path='/' component={Home} />
	<Route  path='/academics' component={Academics} />

  </Switch>
</BrowserRouter>,
document.getElementById('root'));
