import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import url from '../url'
import Loading from '../components/loading'

export default function Authenticatedpersonalchatting(Chatting,Authredirect){
  let friendName="",friendDp="";

  return function Authenticate(props){
  const [auth,setAuth]=useState(0)
  const [redirect,setRedirect]=useState('')

  const [email,myEmail]=props.match.params.emails.split('-')

  const dispatch=useDispatch()

  const exist=useSelector(state=>state.friendReducer.exist)
  const friends=useSelector(state=>state.friendReducer.friends)

  useEffect(()=>{

        if(exist){
          //alert(JSON.stringify(friends))
          friendName=friends.find(f=>f.email==email)?.name
          friendDp=friends.find(f=>f.email==email)?.path

      //    alert(friendName)
          if(!friendName){ setRedirect(''); setAuth(2); }
          else setAuth(1);

        }
        else
        {
          const token=localStorage.getItem('token')
          const secureAxios=axios.create(
                                {
                                 baseURL:url,
                                 headers:{
                                  "Authorization":`bearer ${token}`
                                }
                              })
          secureAxios.get('getFriend')
          .then((response)=>{
                const body=response.data
                dispatch({type:'load_friend',payload:{friends:body.friends,pendings:body.pendings,sent:body.sent,exist:true}})

                friendName=body.friends.find(f=>f.email==email)?.name
                friendDp=body.friends.find(f=>f.email==email)?.path
            //    alert(friendName)

                if(!friendName){ setRedirect(''); setAuth(2); }
                else setAuth(1);
          })
          .catch(err=>{
            setAuth(2)
          })
        }
      //  alert(friendName)

  },[])

  return (auth==0)?<Loading />:(auth==1)?<Chatting roomName={friendName} dp={friendDp} {...props}/>:<Authredirect redirect={redirect}/>

 }

}
