const cors = require('cors');
const bodyParser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');
const { connectDatabase } = require('../Database/dbConnect');
const { Cart } = require('./models/cart.model');
const { Product } = require('./models/product.models');
const { User } = require('./models/user.model');
const { productsRouter } = require('../routes/products.routes');
const { cartRouter } = require('../routes/cart.routes');
// const { orderRouter } = require('./routes/order.routes');

const { userRouter } = require('../routes/user.routes');
const { authMiddleware } = require('../middlewares/auth');
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8080;
app.use(bodyParser.json());





app.use("/user",authMiddleware,userRouter);
app.use("/cart",authMiddleware,cartRouter);
// app.use("/orders",orderRouter);
app.use("/products",productsRouter);








connectDatabase().then(()=>{
    app.listen(PORT,()=>{
        console.log(`listening on ${PORT}`);
    })
    
})



