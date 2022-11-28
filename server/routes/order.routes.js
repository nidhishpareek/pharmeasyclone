const express = require('express');
const {createOrders,getOrders} = require('../controllers/order.controller')
const orderRouter = express.Router();



orderRouter.get('/create',createOrders)
orderRouter.get('/',getOrders)



module.exports = {orderRouter}