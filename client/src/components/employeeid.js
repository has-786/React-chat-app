import React,{useState,useReducer,useEffect,useContext} from 'react';
import {context,Store} from './store';
function Employeeid(props)
{

    const {state,dispatch}=useContext(context);
    const employee=state.find(e=>e.id==props.match.params.id);

    return  <div>
    <button onClick={()=>props.history.push('/employees')} class='btn btn-primary'>Home</button>
    <button onClick={()=>props.history.push('/accepted')} class='btn btn-success'>Accepted Employees</button>
    <button onClick={()=>props.history.push('/rejected')} class='btn btn-danger'>Rejected Employees</button>

             <div>
             <p>{employee.id}&nbsp;&nbsp;</p><p>{employee.name}&nbsp;&nbsp;</p>
             <p>{(employee.accepted==true)?"Accepted":(employee.rejected==true)?"Rejected":""}</p>
              <button class='btn btn-success' onClick={()=>{dispatch({type:'accept_employee',payload:employee.id});} }>Accept</button>
              <button class='btn btn-danger' onClick={()=>{dispatch({type:'reject_employee',payload:employee.id});}}>Reject</button>
             </div>
            </div>
}


export default Employeeid;
