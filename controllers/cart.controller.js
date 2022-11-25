const { Cart } = require("../models/cart.model");

async function getCartItems(req, res) {
  try {
    const { user } = req;

    if (!user) {
      return res.status(401).send({ message: "Not logged in" });
    }
    const cart = await Cart.find({ userId: user._id });
    if (!cart) {
      return res.send({ message: "Empty Cart" });
    }
    return res.send({ data: cart.cartItems });
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
    const cart = await Cart.find({ userId: user._id });
    if (!cart) {
      cart = await Cart.create({
        userId: user._id,
        cartItems: [
          { productId: req.body.productId, quantity: req.body.quantity },
        ],
      });
    }
    const resp = await Cart.findByIdAndUpdate(user._id, {
      $push: {
        cartItems: {
          productId: req.body.productId,
          quantity: req.body.quantity,
        },
      },
    });

    return res.status(201).send({ message: "Item Added To Cart", data: resp });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

async function removeItemFromCart(req, res) {
  try {
    const { user } = req;

    if (!user) {
      return res.status(401).send({ message: "Not logged in" });
    }
    const resp = await Cart.findByIdAndUpdate(user._id, {
      $pullAll: { cartItems: [{ productId: req.body.productId }] },
    });
    return resp.send({message:"Delete Success",data: resp})
  } catch (error) {}
}

module.exports = {
  getCartItems,
  addItemToCart,
  removeItemFromCart
};
