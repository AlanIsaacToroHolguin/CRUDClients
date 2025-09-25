const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD,   // 👈 aquí corregido
  {
    host: process.env.DB_HOST || "127.0.0.1",   // 👈 fallback por si falta
    dialect: "mysql"
  }
);

sequelize.authenticate()
  .then(() => console.log("✅ Conexión a la base de datos exitosa"))
  .catch(err => console.error("❌ Error al conectar con la base de datos:", err));

module.exports = sequelize;
