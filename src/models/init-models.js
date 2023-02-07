const DataTypes = require("sequelize").DataTypes;
const _cart = require("./cart");
const _orders = require("./orders");
const _product_in_cart = require("./product_in_cart");
const _product_in_order = require("./product_in_order");
const _products = require("./products");
//const _products_in_carts = require("./products_in_carts");
//const _products_in_orders = require("./products_in_orders");
const _users = require("./users");

function initModels(sequelize) {
  const cart = _cart(sequelize, DataTypes);
  const orders = _orders(sequelize, DataTypes);
  const productInCart = _product_in_cart(sequelize, DataTypes);
  const productInOrder = _product_in_order(sequelize, DataTypes);
  const products = _products(sequelize, DataTypes);
  //const productsInCarts = _products_in_carts(sequelize, DataTypes);
  //const productsInOrders = _products_in_orders(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  productInCart.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(productInCart, { as: "product_in_cart", foreignKey: "cart_id"});
  productInOrder.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(productInOrder, { as: "product_in_order", foreignKey: "order_id"});
  productInCart.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(productInCart, { as: "product_in_cart", foreignKey: "product_id"});
  productInOrder.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(productInOrder, { as: "product_in_order", foreignKey: "product_id"});
  cart.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(cart, { as: "carts", foreignKey: "user_id"});
  orders.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(orders, { as: "orders", foreignKey: "user_id"});
  products.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(products, { as: "products", foreignKey: "user_id"});

  return {
    cart,
    orders,
    //productsInCarts,
    //productsInOrders,
    products,
    productInCart,
    productInOrder,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
