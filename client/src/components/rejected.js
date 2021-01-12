import React,{useState,useReducer,useEffect,useContext} from 'react';
import {context,Store} from './store';
function Rejected(props)
{
    const {state,dispatch}=useContext(context);
    const employees=state.filter(e=>e.rejected==true);
    return  <div>
    <button onClick={()=>props.history.push('/employees')} class='btn btn-primary'>Home</button>
    <button onClick={()=>props.history.push('/accepted')} class='btn btn-success'>Accepted Employees</button>
    <button onClick={()=>props.history.push('/rejected')} class='btn btn-danger'>Rejected Employees</button>

                  <h3>Rejected</h3>
                  {employees.map(e=>{  return   <div>
                      <div>{e.id}&nbsp; {e.name} </div>
                    </div>
                  })
                }
            </div>
}

export default Rejected;
