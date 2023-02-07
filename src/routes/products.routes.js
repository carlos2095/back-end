const { Router } = require("express");
const {
  getAllProducts,
  ProductCreate,
  ProductUpdate,
  ProductDelete,
} = require("../controllers/products.controller");

const router = Router();
/**
 * @openapi
 * /api/v1/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       description: Required fields to create a new product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/productCreate'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: prodcut create
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 *   get:
 *     summary: Request all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Successful operation, return all products
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
 *                     $ref: "#/components/schemas/ProductGet"
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
* /api/v1/products/{id}: 
*   put:
 *     summary: Update an existing product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: ID product update
 *     requestBody:
 *       description: product update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/ProductUpdate"
 *     responses:
 *       200:
 *         description: Product updated succes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: ok
 *               data:
 *                 type: array
 *                 items:
 *                   $ref: "#/components/schemas/ProductUpdate"
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
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         require: true
 *         schema:
 *           type: integer
 *         description: ID product deleted
 *     responses:
 *       200:
 *         description: Deleted product succes
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
 *                     $ref: "#/components/schemas/PoductDelete"
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
router.get("/", getAllProducts);
router.post("/", ProductCreate);
router.put("/:id", ProductUpdate);
router.delete("/:id", ProductDelete);
module.exports = router;
