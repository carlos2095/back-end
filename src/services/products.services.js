const models = require("../models");
const {Op} = require("sequelize");
const {products, users} = models;

class ProductServices {
  static async getAllProducts() {
    try {
      const Products = await products.findAll({
        where: {
          available_qty: {
            [Op.gt]: 0,
          },
        },
        attributes: {
          exclude: ['user_id'],
        },
        include: {
          model: users,
          as: 'user',
          attributes: {
            exclude: ['password', 'email', "username"],
          },
        },
      });
      return Products;
    } catch (error) {
      throw error;
    }
  }

  static async createProduct(newObject) {
    try {
      const Product = await products.create(newObject);
      return Product;
    } catch (error) {
      throw error;
    }
  }

  static async updateProduct (id, update){
    try {
      const updatedProduct = await products.findOne({where: {id} });
      const sucessUpdate = await updatedProduct.update({...update});
      return sucessUpdate;
    } catch (error) {
      throw error;
    }
  }
  

static async deleteProduct(id) {
    try {
      const deletedProduct = await products.findOne({where:{id}});
      const succesDeleted = await deletedProduct.destroy();
      return succesDeleted;
    } catch (error) {
      throw error;
  }
};
}
module.exports = ProductServices;
