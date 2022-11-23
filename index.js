
const express = require('express');
const mongoose = require('mongoose');
const { connectDatabase } = require('./Database/dbConnect');
const { Cart } = require('./models/cart.model');
const { Product } = require('./models/product.models');
const { User } = require('./models/user.model');
const app = express();




connectDatabase().then(async ()=>{
    
})



