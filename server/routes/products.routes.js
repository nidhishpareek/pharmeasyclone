const express = require('express');
const {  getProductById, getAllProductsByCategory, getCategories, getAllProductsBySubCategory } = require('../controllers/products.controller');
const productsRouter = express.Router();

productsRouter.get('/:id',getProductById)
productsRouter.get('/category/:category',getAllProductsByCategory)
productsRouter.get('/category/:category/:sub_category',getAllProductsBySubCategory)
productsRouter.get('/',getCategories)



module.exports = {productsRouter}