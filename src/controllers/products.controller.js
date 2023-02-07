const ProductServices = require('../services/products.services');

const getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductServices.getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const ProductCreate = async (req, res, next) => {
  try {
    const {id} = req.params;
    const { body } = req;
    const newProduct = { ...body, id };
    const result = await ProductServices.createProduct(newProduct);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const ProductUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const productoActualizado = req.body;
    const producto = await ProductServices.updateProduct(id, productoActualizado);
    res.status(200).json({ producto });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const ProductDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await ProductServices.deleteProduct(id);
    res.status(200).json({ producto });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllProducts, ProductCreate, ProductUpdate, ProductDelete };
