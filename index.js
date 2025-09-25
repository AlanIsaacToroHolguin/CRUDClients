const app = require("./app");
require("dotenv").config();
const swaggerDocs = require("./config/swagger");


const PORT = process.env.PORT || 3000;
git 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
