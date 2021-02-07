import {Redirect} from 'react-router-dom'

export default function Authredirect({redirect}){
  return <Redirect to={'/'+redirect} />

}
