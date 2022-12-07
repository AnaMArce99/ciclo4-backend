import Router from 'express'
import * as orderCtrl from '../controllers/order.controller'

const router = Router()

// POST
router.post('/create_order', orderCtrl.createOrder)
router.post('/order', orderCtrl.updateOrder)

// GET
router.get('/list_order', orderCtrl.listOrders)
router.get('/order/:id', orderCtrl.orderDetail)


export default router