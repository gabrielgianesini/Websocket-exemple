import {io} from './App'


io.on('connection',(socket)=>{
  console.log('New user connected. '+socket.id)

  socket.on('infoEvent', (information) => {
      console.log(`Information received: ${information}`)
      io.sockets.emit('infoEvent', information)
  })
  socket.on('disconnect', () => {
      console.log('User disconnected')
  })
})
