const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API CRUD Utilisateurs",
      version: "1.0.0",
      description:
        "Documentation de l'API CRUD avec Express, MongoDB et Swagger",
    },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: ["./src/routes/*.js"], // chemin vers les fichiers où tu documenteras les routes
};

const specs = swaggerJsdoc(options);

function setupSwagger(app) {
  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));
}

module.exports = setupSwagger;
