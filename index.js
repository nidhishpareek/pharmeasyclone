const cors = require('cors');
const express = require('express');
const { connectDatabase } = require('./Database/dbConnect');
const { productsRouter } = require('./routes/products.routes');
const { cartRouter } = require('./routes/cart.routes');
// const { orderRouter } = require('./routes/order.routes');
const { userRouter } = require('./routes/user.routes');
const { authMiddleware } = require('./middlewares/auth');
const { paymentRouter } = require('./routes/payment.routes');
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8080;





app.use("/api/payment/",authMiddleware,paymentRouter);
app.use("/user",authMiddleware,userRouter);
app.use("/cart",authMiddleware,cartRouter);
// app.use("/orders",orderRouter);
app.use("/products",productsRouter);



app.get('/', ()=>{
    res.send("Server Homepage")
})




connectDatabase().then(()=>{
    app.listen(PORT,()=>{
        console.log(`listening on ${PORT}`);
    })
    
})



