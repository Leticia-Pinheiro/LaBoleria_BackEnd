import { Router } from "express"
import PostCake from "../controllers/cakesController.js"

const cakesRouter = Router()

cakesRouter.post('/cakes', PostCake)

export default cakesRouter 