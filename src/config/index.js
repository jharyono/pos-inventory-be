const path = require("path");

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || "posinventory",
    user: process.env.DB_USER || "inventory",
    password: process.env.DB_PASS || "inventory",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: path.resolve(__dirname, "./posinventory.sqlite"),
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || "secret",
  },
};
