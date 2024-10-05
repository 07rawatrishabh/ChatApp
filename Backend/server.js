const app= require('express')();
const server =require('http').createServer(app);
const io=require('socket.io')(server,{
    cors: {
        origin: "*", // Adjust this to your client URL
        
    }   
} )



io.on('connection',(socket)=>{
    console.log('what is socket ',socket);
    
    socket.on("chat",(payload)=>{
        console.log('what is payload ',payload);
        io.emit('chat',payload)
        
    })
})

server.listen(5000,()=>{
    console.log('server is running on 5000');
    
})