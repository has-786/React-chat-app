import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios'
import url from '../url'
import Loading from '../components/loading'



export default function Authenticatedposts(Posts,Authredirect){

  return function Authenticate(props){
  const [auth,setAuth]=useState(0)
  const email=useSelector(state=>state.userReducer.email)
  const dispatch=useDispatch()

  useEffect(()=>{
      if(email)setAuth(1)
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

          secureAxios.get('getUser')
          .then((response)=>{
                const body=response.data
                dispatch({type:'start',payload:1})
                dispatch({type:'load_user',payload:{name:body.name,email:body.email,path:body.path}})
                setAuth(1)
          })
          .catch(err=>{  setAuth(2);  })
      }
   },[])
   return (auth==0)?<Loading />:(auth==1)?<Posts {...props}/>:<Authredirect redirect='signin'/>
//  return (auth)?<Home {...props}/>:<Authredirect/>
 }

}
