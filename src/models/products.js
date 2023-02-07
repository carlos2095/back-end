const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return products.init(sequelize, DataTypes);
}

/**
 * @openapi
 * components:
 *   schemas:
 *     productCreate:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: collar
 *         price:
 *           type: number
 *           example: 220
 *         description:
 *           type: string
 *           example: description
 *         availableQty:
 *           type: number
 *           example: 5
 *         status:
 *           type: boolean
 *           example: true
 *     ProductGet:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Product name
 *         price:
 *           type: number
 *           example: 19.00
 *         description:
 *           type: string
 *           example: product description
 *         availableQty:
 *           type: boolean
 *           example: 36
 *         status:
 *           type: boolean
 *           example: true
 *         userId:
 *           type: number
 *           example: 3
 *     ProductUpdate:
 *       type: object
 *       properties:
 *         name:
 *           type: string,
 *           example: Product name
 *         price:
 *           type: number
 *           example: 19.99
 *         availableQty:
 *           type: number
 *           example: 22
 *         status:
 *           type: boolean
 *           example: true
 *         user_id:
 *           type: number
 *           example: 2
 *     PoductDelete:
 *       type: object
 *       properties:
 *         message:
 *           type: string,
 *           example: Product deleted
 */

class products extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    available_qty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'products',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "products_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
