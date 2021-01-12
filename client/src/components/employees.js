import React,{useState,useReducer,useEffect,useContext} from 'react';
import {context,Store} from './store';
import Accepted from './accepted';
import Employeeid from './employeeid';
import Rejected from './rejected';
import {Link,withRouter} from 'react-router-dom';

 function Employees(props)
{
    const {state,dispatch}=useContext(context);

    return <div>
            <button onClick={()=>props.history.push('/employees')} class='btn btn-primary'>Home</button>&nbsp;
            <button onClick={()=>props.history.push('/accepted')} class='btn btn-success'>Accepted Employees</button>&nbsp;
            <button onClick={()=>props.history.push('/rejected')} class='btn btn-danger'>Rejected Employees</button>

              {state.sort(sortfunc).map(e=>{
                return   <div>
                  <div>{e.id}&nbsp;&nbsp; {e.name} &nbsp;&nbsp; <Link to={'employees/'+e.id}>See Profile</Link></div>
                </div>
              })
            }
        </div>

}
function sortfunc(a,b){
  return (a.id<b.id)?-1:(a.id>b.id)?1:0;
}

//export default HOC(withRouter(Employees),Employeeid,Accepted,Rejected);
export default Employees;
