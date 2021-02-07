import {useState,useEffect} from 'react'
import axios from 'axios'
import url from './url'

export default function Authenticatedchatting(Chatting,Authredirect){

  return function Authenticate(props){
  const [auth,setAuth]=useState(0)
  const [redirect,setRedirect]=useState('signin')
  const room=props.match.params.room

  useEffect(()=>{
    const token=localStorage.getItem('token')
    const secureAxios=axios.create(
                          {
                           baseURL:url,
                           headers:{
                            "Authorization":`bearer ${token}`
                          }
                        })

      secureAxios.get('getRooms')
      .then((response)=>{
            const body=response.data
            if(!body.latest.includes(room)){ setRedirect('enterroom'); setAuth(2);}
            else setAuth(1)
      })
      .catch(err=>{
      //  alert(err)
        setAuth(2)
      })
  })

  return (auth==0)?null:(auth==1)?<Chatting {...props}/>:<Authredirect redirect={redirect}/>

 }

}
