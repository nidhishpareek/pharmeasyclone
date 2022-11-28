const cors = require('cors');
const express = require('express');
const { connectDatabase } = require('./Database/dbConnect');
const { productsRouter } = require('./routes/products.routes');
const { cartRouter } = require('./routes/cart.routes');
// const { orderRouter } = require('./routes/order.routes');
const { userRouter } = require('./routes/user.routes');
// app.use("/payment/", paymentRoutes);
const { authMiddleware } = require('./middlewares/auth');
const { paymentRouter } = require('./routes/payment.routes');
const { orderRouter } = require('./routes/order.routes');
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8080;





app.use("/api/payment/",authMiddleware,paymentRouter);
app.use("/user",authMiddleware,userRouter);
app.use("/cart",authMiddleware,cartRouter);
app.use("/orders",authMiddleware,orderRouter);
app.use("/products",productsRouter);








connectDatabase().then(()=>{
    app.listen(PORT,()=>{
        console.log(`listening on ${PORT}`);
    })
    
})



