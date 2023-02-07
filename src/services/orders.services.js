const models = require("../models");
const {products, orders, cart, users, productInCart, productInOrder} = models;
const transporter = require("../utils/mailer");


class OrdersServices {
  static async createOrder(data) {
    try {
      const newOrder = await orders.create(data);
      const user = await users.findOne({ where: {id: data.user_id } });
      await transporter.sendMail({
        from:  "<carlos209504@gmail.com>",
        to: user.email,
        subject: 'Confirmación de orden',
        html: `<p>Gracias por su compra! Su orden con número ${newOrder.id} ha sido recibida y está siendo procesada.</p>`
      });
      return newOrder;
    } catch (error) {
      throw error;
    }
  };
  static async  getAllOrders() {
    try {
      const getorders = await orders.findAll();
      return getorders;
    } catch (error) {
      throw error;
    }
  };
  static async  getOrderById(){
    try {
      const IdOrder = await orders.findOne({ where: { id } });
      return IdOrder ;
    } catch (error) {
      throw error;
    }
  
  };
}

module.exports = OrdersServices;