const AuthenticationController = require("../controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("../policies/AuthenticationControllerPolicy");
const ProductsController = require("../controllers/ProductsController");

module.exports = (app) => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );

  app.post("/login", AuthenticationController.login);

  app.get("/products", ProductsController.index);

  // app.get("/songs/:songId", SongsController.show);

  // app.put("/songs/:songId", SongsController.put);

  app.post("/product", ProductsController.post);
};
