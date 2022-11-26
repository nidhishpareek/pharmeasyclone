const express = require('express');
const {  getProductById, getAllProductsByCategory, getCategories, getAllProductsBySubCategory } = require('../controllers/products.controller');
const productsRouter = express.Router();


productsRouter.get('/:category',getAllProductsByCategory)
productsRouter.get('/:category/:sub_category',getAllProductsBySubCategory)
productsRouter.get('/:id',getProductById)
productsRouter.get('/',getCategories)



module.exports = {productsRouter}