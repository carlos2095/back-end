const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

require("dotenv").config();

const options = {
  apis: [
    "./src/routes/auth.routes.js", 
    "./src/models/users.js",
    "./src/routes/products.routes.js",
    "./src/models/products.js",
    "./src/routes/orders.routes.js",
    "./src/models/orders.js",
    "./src/routes/cart.routes.js",
    "./src/models/cart.js",
  ],
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ecommerce api",
      version: "0.0.9",
      description: "API de ecommerce",
    },
  },
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader({ "Content-Type": "aplicaction/json" });
    res.send(swaggerSpec);
  });

  console.log(
    `La documentacion esta disponible en ${process.env.URL}:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs;
