import React,{useContext,useReducer,useEffect} from 'react';
import {Store,context} from './store';
import {Link} from 'react-router-dom';
const context=React.createContext();

 function Homepage(){


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
  const employees=useContext(context).state;
  alert(JSON.stringify(employees));

  useEffect(()=>{
  /*  fetch(url,{ method:'GET'})
         .then(response=>{ return response.json()})
         .then((body)=>{
                dispatch({type:'load_all_employees',payload:body});
                for(let i=0;i<employees.length;i++){employees[i].accepted=false; employees[i].rejected=false;}
            })
         .catch(err=>{});*/



  },[])




    return <context.Provider value={state,dispatch}>

                {
                employees.map(e=>{
                    return <div>
                                <div class="card">
                                  <div class="card-body">
                                  <h4 class="card-title">{e.id}</h4>
                                  <p class="card-text">{e.name}</p>
                                  <Link to={'/employee/'+e.id} class="card-link"><button class='btn btn-primary'>See Profile</button></Link>
                                  </div>
                                </div>
                           </div>

                  })
                }
          </context.Provider>








}
export {Homepage,context};
