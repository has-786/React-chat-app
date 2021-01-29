import io from 'socket.io-client';
import {useRef} from 'react';
const Chatting=(props)=>{
  const name=localStorage.getItem('name');
  const room=localStorage.getItem('room');
  const socket = io.connect('http://192.168.0.6:5000', {reconnect: true})
  socket.emit('create', room);
  socket.emit('new-user-joined',name);

  socket.on('user-joined',name=>{
    const msg=document.createElement('label')
    msg.innerText=`${name} Joined`;
    msg.className='btn btn-sm btn-primary';
    msg.style.marginBottom='5px';

    document.getElementById('messages').append(msg);
  })

  socket.on('user-left',name=>{
    const msg=document.createElement('label')
    msg.innerText=`${name} Left`;
    msg.style.marginBottom='5px';
    msg.className='btn btn-sm btn-danger'
    document.getElementById('messages').append(msg);
  })

  socket.on('receive',data=>{
    const msg=document.createElement('p')
    msg.innerText=data.name+": "+data.message;
    msg.style.marginBottom='5px';
    msg.style.border='2px solid black';
    msg.style.borderRadius='20px';
    document.getElementById('messages').append(msg);
  })

  const msgRef=useRef(null);

  return <div>
          <div id='messages'>
          </div>

          <input type='text' placeholder='Type your message here' ref={msgRef} />
          <button className='btn btn-primary' onClick={()=>{ socket.emit('send',msgRef.current.value); msgRef.current.value='';  }}>Send</button>
         </div>



}


export default Chatting
