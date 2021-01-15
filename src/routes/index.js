const AuthenticationController = require("../controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("../policies/AuthenticationControllerPolicy");
const ProductsController = require("../controllers/ProductsController");
const GroupController = require("../controllers/group.controller");
const SupplierController = require("../controllers/supplier.controller");
const GoodsController = require("../controllers/goods.controller");
const CustomerController = require("../controllers/customer.controller");

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

  // Router for User Group
  app.get("/groups", GroupController.get);
  app.put("/groups/:groupId", GroupController.put);
  app.post("/groups", GroupController.post);
  app.delete("/groups/:groupId", GroupController.delete);

  // Router for Supplier
  app.get("/supplier", SupplierController.get);
  app.put("/supplier/:supplierId", SupplierController.put);
  app.post("/supplier", SupplierController.post);
  app.delete("/supplier/:supplierId", SupplierController.delete);

  // Router for Goods
  app.get("/goods", GoodsController.get);
  app.put("/goods/:goodsId", GoodsController.put);
  app.post("/goods", GoodsController.post);
  app.delete("/goods/:goodsId", GoodsController.delete);

  // Router for Customer
  app.get("/customer", CustomerController.get);
  app.put("/customer/:customerId", CustomerController.put);
  app.post("/customer", CustomerController.post);
  app.delete("/customer/:customerId", CustomerController.delete);
};
