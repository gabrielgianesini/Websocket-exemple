import { Router } from 'express'


const routes = Router()

routes.get('/', (req,res) => res.send('BACKEND TESTE WEBSOCKET'))

export default routes