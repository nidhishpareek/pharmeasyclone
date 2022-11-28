const express = require('express');
const {  getProductById, getAllProductsByCategory, getCategories, getAllProductsBySubCategory, getProductsBySearch } = require('../controllers/products.controller');
const productsRouter = express.Router();



productsRouter.get('/search',getProductsBySearch)
productsRouter.get('/single/:id',getProductById)
productsRouter.get('/category/:category',getAllProductsByCategory)
productsRouter.get('/category/:category/:sub_category',getAllProductsBySubCategory)
productsRouter.get('/',getCategories)




module.exports = {productsRouter}