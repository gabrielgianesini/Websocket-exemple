import {io} from './App'


io.on('connection',(socket)=>{
  console.log('New user connected. '+socket.id)

  socket.on('infoEvent', (information) => {
      console.log(`Information received: ${information} ${socket.id}`)
      socket.emit("receive_ok",'true')
      
  })
  socket.on('disconnect', () => {
      console.log('User disconnected')
  })
})

