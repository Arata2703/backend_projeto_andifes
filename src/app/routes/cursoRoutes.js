import { Router } from "express"
import cursoController from "../controllers/cursoController"

const router = new Router()

router.post('/', cursoController.post)

router.get('/', cursoController.get)

export default router