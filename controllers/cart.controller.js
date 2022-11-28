const { Cart } = require("../models/cart.model");

async function getCartItems(req, res) {
  try {
    const { user } = req;

    if (!user) {
      return res.status(401).send({ message: "Not logged in" });
    }
    // console.log(user._id);
    const cart = await Cart.findOne({ userId: user._id }).populate({ path: 'userId', select: ['name','_id','email' ]}).populate({path: 'cartItems',
    
    populate: { path: 'productId' }});
    if (!cart) {
      return res.send({ message: "Empty Cart" });
    }
    return res.send({ data: cart });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

async function addItemToCart(req, res) {
  try {
    const { user } = req;

    if (!user) {
      return res.status(401).send({ message: "Not logged in" });
    }
    let cart = await Cart.findOne({ userId: user._id });
    if (!cart) {
      cart = await Cart.create({
        userId: user._id,
        cartItems: [
          { productId: req.body.productId, quantity: req.body.quantity },
        ],
      })
    }else{
        const cart = await Cart.findOneAndUpdate({userId:user._id}, {
            $push: {
              cartItems: {
                productId: req.body.productId,
                quantity: req.body.quantity,
              },
            },
          })
    }
    

    return res.status(201).send({ message: "Item Added To Cart", data: cart });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

async function removeItemFromCart(req, res) {
  try {
    const { user } = req;
    const {id} = req.params

    if (!user) {
      return res.status(401).send({ message: "Not logged in" });
    }
    const resp = await Cart.findOneAndUpdate({userId:user._id}, {
      $pull: { cartItems: { productId: id } },
      
    },{new: true})
    
    return res.send({message:"Item Deleted Successfully",data: resp})
  } catch (error) {
    return res.status(500).send({message:error.message})
  }
}
async function updateCartItem(req,res){
    try {

        const { user } = req;
        const {id} = req.params

    if (!user) {
      return res.status(401).send({ message: "Not logged in" });
    }
    const product  = await  Cart.findOne({userId:user._id,"cartItems.productId":id})
    if(!product){
      return res.status(404).send({message:'product not found'})
    }
    const cart = await Cart.updateOne({userId:user._id,"cartItems.productId":id},{
        $set:{"cartItems.$.quantity":req.body.quantity}
    })



    return res.send({message:'success',data:cart})


        
    } catch (error) {
        return res.status(500).send({message:error.message})
        
    }
}
module.exports = {
  getCartItems,
  addItemToCart,
  removeItemFromCart,
  updateCartItem
};
