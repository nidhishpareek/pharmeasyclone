const cors = require('cors');
const bodyParser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');
const { connectDatabase } = require('./Database/dbConnect');
const { Cart } = require('./models/cart.model');
const { Product } = require('./models/product.models');
const { User } = require('./models/user.model');
const { productsRouter } = require('./routes/products.router');
const { cartRouter } = require('./routes/cart.router');
// const { orderRouter } = require('./routes/order.router');

const { userRouter } = require('./routes/user.router');
const { authMiddleware } = require('./middlewares/auth');
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8080;
app.use(bodyParser.json());




<<<<<<< HEAD

app.use("/user",authMiddleware,userRouter);
app.use("/cart",authMiddleware,cartRouter);
=======
app.use("/user",userRouter);

// app.use("/cart",cartRouter);
>>>>>>> 1c442bc2aa58b6ac6ac3df113f9798110d042d36
// app.use("/orders",orderRouter);
   app.use("/products",productsRouter);

<<<<<<< HEAD


async function getCart(){
   const data = await Cart.find();
   console.log(data);
}
getCart();
=======
// async function cart  (){
    
    // const user = await  Cart.create({
    //     userId:'637e6071895d22ca7a477f50',
    //     cartItems:[{
    //         productId:'637e45bbe056124f16be5c9d',
    //         quantity:1,
    //         discount:10,

    //     }]
    // });
    // console.log(await Cart.find());

// }
// cart();
>>>>>>> 1c442bc2aa58b6ac6ac3df113f9798110d042d36




<<<<<<< HEAD
=======

>>>>>>> 1c442bc2aa58b6ac6ac3df113f9798110d042d36
connectDatabase().then(()=>{
    app.listen(PORT,()=>{
        console.log(`listening on ${PORT}`);
    })
    
})



