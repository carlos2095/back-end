const OrderServices = require("../services/orders.services");

const createOrder = async (req, res, next) => {
  try {
    const order = await OrderServices.createOrder(req.body);
    res.status(201).json({ order });
  } catch (error) {
    next(error);
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await OrderServices.getAllOrders();
    res.status(200).json({ orders });
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await OrderServices.getOrder(id);
    res.status(200).json({ order });
  } catch (error) {
    next(error);
  }
};



module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
};
