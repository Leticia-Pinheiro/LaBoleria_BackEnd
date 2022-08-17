import { Router } from "express"
import PostOrder from "../controllers/ordersController.js"
import GetOrder from "../controllers/ordersController.js"
import GetOrderById from "../controllers/ordersController.js"

const ordersRouter = Router()

ordersRouter.post('/order', PostOrder)

ordersRouter.get('/orders', GetOrder)

ordersRouter.get('/orders/:id', GetOrderById)

export default ordersRouter 