import { Router } from "express"
import {PostClient, GetClientById} from "../controllers/clientsController.js"
import validateSchema from "../middlewares/schemasValidator.js"
import ClientSchema from "../schemas/clientsSchema.js"

const clientsRouter = Router()

clientsRouter.post('/clients', validateSchema(ClientSchema), PostClient)

clientsRouter.get('/clients/:id/orders', GetClientById)

export default clientsRouter 