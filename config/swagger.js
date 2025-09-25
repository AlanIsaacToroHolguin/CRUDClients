const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Configuración básica de Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API CRUD de Clientes",
      version: "1.0.0",
      description: "Documentación de la API CRUD usando Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000", // tu server local
      },
    ],
  },
  apis: ["./routes/*.js"], // aquí Swagger leerá las rutas documentadas
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`📄 Documentación disponible en http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;
