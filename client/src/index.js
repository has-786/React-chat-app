import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/home';

import AcademicActivities from './components/academicActivities';
import Result from './components/result';
import University from './components/university';
import Admission from './components/admission';
import Gallery from './components/gallery';

import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';

ReactDom.render(
<BrowserRouter>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route  path='/academicActivities' component={AcademicActivities} />
    <Route  path='/result' component={Result} />
    <Route  path='/university' component={University} />
    <Route  path='/admission' component={Admission} />
    <Route  path='/gallery' component={Gallery} />

  </Switch>
</BrowserRouter>,
document.getElementById('root'));
