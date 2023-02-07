const initModels = require("./init-models");
const db = require("../utils/database");

const models = initModels(db);

const { orders, products, cart, users, productInOrder, productInCart } = models;

module.exports = {
  orders,
  products,
  cart,
  users,
  productInOrder,
  productInCart,
};
