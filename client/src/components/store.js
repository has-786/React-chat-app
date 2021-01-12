import React,{useState,useReducer,useEffect} from 'react';
const context=React.createContext();

function Store(props)
{

    const reducer=(state,action)=>{
      let obj;

         switch (action.type) {
            case 'accept_employee':
              obj=state.find(s=>s.id==action.payload);
              obj.accepted=true; obj.rejected=false;
              return state.filter(s=>s.id!=action.payload).concat(obj);

            case 'reject_employee':
              obj=state.find(s=>s.id==action.payload);
              obj.accepted=false; obj.rejected=true;
              return state.filter(s=>s.id!=action.payload).concat(obj);

           default:
            return state;

         }

    };
    const arr=[{id:1,name:'Hasnain'},{id:2,name:'Saqlain'},{id:3,name:'Sayan'},{id:4,name:'Shajer'},{id:5,name:'Siraj'}]
    const [state,dispatch]=useReducer(reducer,arr);

    return  <context.Provider value={{state,dispatch}}>
              {props.children}
        </context.Provider>

}
export {Store,context};
