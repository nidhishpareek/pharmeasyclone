const express = require('express');
const { getCartItems, addItemToCart, removeItemFromCart, updateCartItem } = require('../controllers/cart.controller');
const cartRouter = express.Router();


cartRouter.get('/',getCartItems)
cartRouter.post('/',addItemToCart)
cartRouter.patch('/:id',updateCartItem)
cartRouter.delete('/:id',removeItemFromCart)



module.exports = {cartRouter}