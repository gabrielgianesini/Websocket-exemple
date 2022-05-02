import express, { Express, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import routes from './routes'
import http from 'http'
const app: Express = express()
const serverHttp = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(serverHttp);

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: 'GET, POST, PUT,DELETE',
  }),
)

app.use(routes)

io.on('connection', (socket: any) => {
  console.log('a user connected');
});



export { serverHttp }
