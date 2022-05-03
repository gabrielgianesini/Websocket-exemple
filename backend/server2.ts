import express, { Express} from 'express'
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'
const port =  3010

const app: Express = express()


app.use(
  cors({
    origin: true,
    credentials: true,
    methods: '*',
  }),
)

app.use(express.json({}))


const serverHttp = http.createServer(app)


const io = new Server(serverHttp);

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



serverHttp.listen(port, () => console.log(`🚀App running on port: ${port}`))


