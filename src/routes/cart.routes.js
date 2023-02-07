const express = require('express');
const cartsController = require('../controllers/cart.controllers');
const router = express.Router();

/**
 * @openapi
 * /api/v1/cart/{id}:
 *   get:
 *     summary: get cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *           descroption: id
 *     responses:
 *       200:
 *         description: Successful operation, return cart
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                    $ref: "#/components/schemas/getCart"
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product not found / something wrong /
 *   put:
 *     summary: Update an existing product
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         description: ID product update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             $ref: "#/components/schemas/ProductUpdate"
 *     responses:
 *       200:
 *         description: Product updated succes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ProductUpdate"
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product not found / something wrong /
 *   delete:
 *     summary: delete product
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         description: ID product deleted
 *     responses:
 *       200:
 *         description: Deleted product succes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/PoductDelete"
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product not found / something wrong /
 */
// Obtener todos los elementos del carrito
//router.get("/", cartsController.getCartAll);

// Obtener el carrito de compras de un usuario específico
router.get("/:id", cartsController.getUserCart);

// Agregar un elemento al carrito
router.post("/", cartsController.addProductToCart);

// Modificar la cantidad de un elemento en el carrito
router.put("/:id", cartsController.updateCartItemQty);

// Eliminar un elemento del carrito
router.delete("/:id", cartsController.removeCartItem);



module.exports = router;
