import { Router } from "express"
import PostClient from "../controllers/clientsController.js"
import GetClientById from "../controllers/clientsController.js"

const clientsRouter = Router()

clientsRouter.post('/clients', PostClient)

clientsRouter.get('/clients/:id/orders', GetClientById)

export default clientsRouter 