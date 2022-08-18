import { Router } from "express"
import {PostOrder, GetOrder, GetOrderById} from "../controllers/ordersController.js"
import validateSchema from "../middlewares/schemasValidator.js"
import OrderSchema from "../schemas/ordersSchema.js"


const ordersRouter = Router()

ordersRouter.post('/order', validateSchema(OrderSchema), PostOrder)

ordersRouter.get('/orders', GetOrder)

ordersRouter.get('/orders/:id', GetOrderById)

export default ordersRouter 