import express, { Express, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import routes from './routes'

const app: Express = express()

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: 'GET, POST, PUT,DELETE',
  }),
)

app.use(routes)

export { app }
