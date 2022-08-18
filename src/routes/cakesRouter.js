import { Router } from "express"
import validateSchema from "../middlewares/schemasValidator.js"
import CakeSchema from "../schemas/cakesSchema.js"
import {PostCake} from "../controllers/cakesController.js"

const cakesRouter = Router()

cakesRouter.post('/cakes', validateSchema(CakeSchema), PostCake)

export default cakesRouter 