const express = require('express');
const { getCartItems, addItemToCart, removeItemFromCart, updateCartItem } = require('../controllers/cart.controller');
const cartRouter = express.Router();


cartRouter.get('/',getCartItems)
cartRouter.post('/',addItemToCart)
cartRouter.patch('/',updateCartItem)
cartRouter.delete('/',removeItemFromCart)



module.exports = {cartRouter}