const app = require("./app");
require("dotenv").config();
const swaggerDocs = require("./config/swagger");

const PORT = process.env.PORT || 3000;

// 🚀 Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);

  // 📄 Activar Swagger
  swaggerDocs(app, PORT);
});
