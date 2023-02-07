
const models = require("../models");
const {products, orders, cart, users, productInCart, productInOrder} = models;


class CartServices {
  static async addProductToCart(productId, userId) {
    try {
      console.log(userId);
      const product = await products.findById(productId);
      if (!product) throw new Error("Product not found");
  
      const Idcart = await cart.findOne({ user: userId });
      if (!Idcart) {
        const newCart = new Cart({
          user: userId,
          products: [{ product: productId, quantity: 1 }],
        });
        await newCart.save();
        return newCart;
      } else {
        const productIndex = cart.products.findIndex(
          (item) => item.product.toString() === productId
        );
        if (productIndex === -1) {
          cart.products.push({ product: productId, quantity: 1 });
        } else {
          cart.products[productIndex].quantity += 1;
        }
        await cart.save();
        return cart;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  static async getUserCart(id) {
    try {
      const productsInCart = await productInCart.findAll({
        where: { id },
        include: [
          {
            model: products,
            as: "product",
          },
        ],
      });
      return productsInCart;
    } catch (error) {
      throw error;
    }
  }

  static async updateCartItemQty(id, productID, quantity) {
    try {
      const [updated] = await cart.update({ productID, quantity }, {
        where: { id },
        returning: true,
      });
      return updated;
    } catch (error) {
      throw error;
    }
  }

  static async removeCartItem(userId, productId) {
    try {
      const deleted = await productInCart.destroy({
        where: { userId, productId },
      });
      return deleted;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServices;

