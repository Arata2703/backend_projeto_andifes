import { Router } from "express"
import AuthMiddleware from '../../app/middlewares/auth'
import ProeficienciaAlunoIsFController from "../controllers/proeficienciaAlunoIsFController"

const router = new Router()

router.post('/', AuthMiddleware, ProeficienciaAlunoIsFController.post)

export default router