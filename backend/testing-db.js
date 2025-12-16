const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "citas_db",
  "postgres",
  "1234",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Unable to connect:", error);
  }
})();
