import React,{useContext,useReducer,useEffect} from 'react';
import {context} from './store';
import {Link} from 'react-router-dom';

export default function Rejected(){

  const [employees,dispatch]=useContext(context);

    return <div>
            {
              employees.filter(e=>e.rejected==true).map(e=>{
                return <div>
                            <div class="card">
                              <div class="card-body">
                              <h4 class="card-title">{e.id}</h4>
                              <p class="card-text">{e.name}</p>
                              </div>
                            </div>
                       </div>

              })
            }


           </div>




}
