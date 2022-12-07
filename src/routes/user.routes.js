import Router from 'express'
import * as userCtrl from '../controllers/user.controller'

const router = Router()

// POST
router.post('/user_login', userCtrl.loginUser)
router.post('/user_create', userCtrl.registerUsers)

export default router