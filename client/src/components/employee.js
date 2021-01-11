import React,{useContext,useReducer,useEffect} from 'react';
import {context} from './store';
import {Link} from 'react-router-dom';
import {context} from './homepage';

export default function Employee(){

  const [employees,dispatch]=useContext(context).state;
  const employee=employees.find(e=>e.id==1);
    return  <div>
                            <div class="card">
                              <div class="card-body">
                              <h4 class="card-title">{employee.id}</h4>
                              <p class="card-text">{employee.name}</p>
                              </div>
                            </div>

           </div>
}
