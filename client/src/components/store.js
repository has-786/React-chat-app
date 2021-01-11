import React,{useReducer} from 'react';
import Homepage from './homepage';
import Employee from './employee';
import Accepted from './accepted';
import Rejected from './rejected';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

const context=React.createContext();

const Store=(props)=>{



const [state,dispatch]=useReducer((state,action)=>{

  switch(action.type){
      case 'load_all_employees':
          return action.payload;

      case 'accepted_employee':
          return state.filter(s=>s.accepted==true)

      case 'rejected_employee':
          return state.filter(s=>s.rejected==true)

      default:
          return state;

    }

},[{id:1,name:'Hasnain'},{id:2,name:'Saqlain'}]);
return <context.Provider value={{state,dispatch}}>
        {props.children}
      </context.Provider>
}
export {context,Store};
