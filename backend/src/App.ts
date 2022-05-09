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


const io = new Server(serverHttp,  {maxHttpBufferSize: 1e16}, );

export { serverHttp, io, port }


