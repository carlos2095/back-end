const {
  order,
  products,
  cart,
  users,
  productInOrder,
  productInCart,
} = require("../models");

const db = require("../utils/database")
const initModels = require("../models/init-models");

initModels(db);

const Users = [
  {
    username: "carlos",
    email: "carlos@mail.com",
    password: "123",
  },
  {
    username: "pedro",
    email: "pedro@mail.com",
    password: "123",
  },
  {
    username: "ricardo",
    email: "ricardo@mail.com",
    password: "123",
  },
  {
    username: "juan",
    email: "juan@mail.com",
    password: "4444",
  },
];

const Products = [
  {
    name: "cola",
    price: 5.0,
    available_qty: 2,
    status: true,
    user_id: 1,
  },
  {
    name: "zapato",
    price: 20.0,
    available_qty: 3,
    status: true,
    user_id: 2,
  },
  {
    name: "camisa",
    price: 30.0,
    available_qty: 10,
    status: true,
    user_id: 3,
  },
  {
    name: "reloj",
    price: 50.0,
    available_qty: 2,
    status: true,
    user_id: 4,
  },
];

const Orders = [
  {
    total_price: 5.0,
    user_id: 1,
    status: true,
  },
  {
    total_price: 20.0,
    user_id: 2,
    status: true,
  },
  {
    total_price: 30.0,
    user_id: 3,
    status: true,
  },
  {
    total_price: 50.0,
    user_id: 4,
  },
];

const Carts = [
  {
    user_id: 1,
    total_price: 5.0,
  },
  {
    user_id: 2,
    total_price: 20.0,
  },
  {
    user_id: 3,
    total_price: 30.0,
  },
  {
    user_id: 4,
    total_price: 50.0,
  },
];

const ProductInCart = [
  {
    cart_id: 1,
    product_id: 1,
    quantity: 1,
    price: 5.0,
    status: true,
  },
  {
    cart_id: 2,
    product_id: 2,
    quantity: 2,
    price: 20.0,
    status: true,
  },
  {
    cart_id: 3,
    product_id: 3,
    quantity: 3,
    price: 30.0,
  },
  {
    cart_id: 4,
    product_id: 4,
    quantity: 4,
    price: 50.0,
    status: true,
  },
];

const ProductInOrder = [
  {
    order_id: 1,
    product_id: 1,
    quantity: 1,
    price: 5.0,
    status: true,
  },
  {
    order_id: 2,
    product_id: 2,
    quantity: 2,
    price: 20.0,
  },
  {
    order_id: 3,
    product_id: 3,
    quantity: 3,
    price: 30.0,
    status: true,
  },
  {
    order_id: 4,
    product_id: 4,
    quantity: 4,
    price: 50.0,
    status: true,
  },
];

db.sync({ force: true })
  .then(() => {
    console.log("starting seed");
    Users.forEach((user) => {
      users.create(user);
    });
    setTimeout(() => {
      Products.forEach((element) => {
        products.create(element);
      });
    }, 1000);
    setTimeout(() => {
      Orders.forEach((element) => {
        order.create(element);
      });
    }, 2000);
    setTimeout(() => {
      Carts.forEach((element) => {
        cart.create(element);
      });
    }, 3000);
    setTimeout(() => {
      ProductInCart.forEach((product) => {
        productInCart.create(product);
      });
    }, 4000);
    setTimeout(() => {
      ProductInOrder.forEach((product) => {
        productInOrder.create(product);
      });
    }, 5000);
  })
  .catch((error) => console.log(error));
