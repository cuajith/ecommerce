const Order = require("../model/orderModel");
const asyncHandler = require("express-async-handler");

const addOrderItem = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    payment,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(404).json("No Order Found");
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      payment,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createOrder = await order.save();
    res.status(200).json(createOrder);
  }
});
module.exports = addOrderItem;
