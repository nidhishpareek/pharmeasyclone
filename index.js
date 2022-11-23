const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const { connectDatabase } = require('./Database/dbConnect');
const { Cart } = require('./models/cart.model');
const { Product } = require('./models/product.models');
const { User } = require('./models/user.model');
const { cartRouter } = require('./routes/cart.router');
const { orderRouter } = require('./routes/order.router');
const { productsRouter } = require('./routes/products.router');
const { userRouter } = require('./routes/user.router');
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8080;




app.use("/user",userRouter);
app.use("/cart",cartRouter);
app.use("/orders",orderRouter);
app.use("/products",productsRouter);




connectDatabase().then(()=>{
    app.listen(PORT,()=>{
        console.log(`listening on ${PORT}`);
    })
    
})



