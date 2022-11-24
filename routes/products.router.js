const express = require('express');
const {  getProductById, getAllProductsByCategory, getCategories } = require('../controllers/products.controller');
const productsRouter = express.Router();


productsRouter.get('/:category',getAllProductsByCategory)
productsRouter.get('/:id',getProductById)
productsRouter.get('/',getCategories)



module.exports = {productsRouter}