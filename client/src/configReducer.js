import React from 'react';
import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const groupReducer=(state={rooms:[],latest:[],exist:false},action)=>{

    switch(action.type)
    {
        case 'load_group':
          return action.payload

        case 'add_my_group':
          return {...state,rooms:[...state.rooms,action.payload],latest:[...state.latest,action.payload]}

        case 'add_latest_group':
          if(!state.latest.includes(action.payload))
            return {...state,latest:[...state.latest,action.payload]}
          return state

        case 'exit_group':
            return {...state,latest:state.latest.filter(l=>l!=action.payload)}

        case 'edit_group':
            return {...state,exist:false}

        case 'delete_my_group':
            return {...state,rooms:state.rooms.filter(r=>r!=action.payload),latest:state.latest.filter(l=>l!=action.payload)}

        case 'clear':
            return {}

        default:
          return state;
    }
}


const chatReducer=(state={},action)=>{
    let newState=JSON.parse(JSON.stringify(state));
    switch(action.type)
    {
        case 'load_chat':
          if(!newState[action.payload.room])
            newState[action.payload.room]=action.payload.msgs
          else
            newState[action.payload.room]=[...action.payload.msgs,...newState[action.payload.room]]

          return newState

        case 'add_chat':
          if(newState[action.payload.room])
            newState[action.payload.room]=[...newState[action.payload.room],action.payload.msg]
          else
            newState[action.payload.room]=[action.payload.msg]
          //  alert(document.getElementById('messages').scrollHeight)
        //  window.scrollTo({top:document.getElementById('messages').scrollHeight,behaviour:'smooth'})

          return newState

        case 'clear':
            return {}

        default:
          return state;
    }
}

const userReducer=(state={name:null,email:null},action)=>{
    switch(action.type)
    {
        case 'load_user':
           return action.payload

        case 'clear':
            return {}

        default:
          return state;
    }
}


const reducer=combineReducers({groupReducer,chatReducer,userReducer});
export default reducer;
