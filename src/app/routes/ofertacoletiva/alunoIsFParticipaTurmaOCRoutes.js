import { Router } from "express"
import AlunoIsFParticipaTurmaOCController from '../../controllers/ofertacoletiva/alunoIsFParticipaTurmaOCController'
import AuthMiddleware from '../../middlewares/auth'

const router = new Router()

router.post('/:idTurma', AuthMiddleware, AlunoIsFParticipaTurmaOCController.post)

export default router