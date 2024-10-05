import React from 'react'
import "./App.css"
import { useState,useEffect } from 'react'
import io from 'socket.io-client'
import nanoid from 'nanoid'

const socket = io('http://localhost:5000')

function App() {
  const[message , setmessage]=useState('');
  const[username , setname]=useState('');
  const[chat , setchat]=useState([]);
  
  const sendChat=(e)=>{
    e.preventDefault();
   
    
      socket.emit('chat', {message,username});
      setmessage('');
    
  }
  

 

  useEffect(()=>{
     socket.on('chat',(payload)=>{
      setchat([...chat,payload])
     })
  })
  return (
    <div>
    
    <form onSubmit={sendChat}>
          <input
            type='text'
            placeholder="Send text"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
          />
          <button type='submit'>Send</button>
     </form>



    
          <input
            type='text'
            placeholder="Enter Name"
            value={username}
            onChange={(e) => setname(e.target.value)}
          />
          
   
      <h1>Chat APP</h1>
      <div>
        {chat.map((c,index)=>{
          return (<p key ={index}>{c.message} : <span>{username}</span></p>)
        })}
      </div>
    </div>
  )
}

export default App