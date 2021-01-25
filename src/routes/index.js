const AuthenticationController = require('../controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');
const ProductsController = require('../controllers/ProductsController');
const GroupController = require('../controllers/group.controller');
const SupplierController = require('../controllers/supplier.controller');
const GoodsController = require('../controllers/goods.controller');
const CustomerController = require('../controllers/customer.controller');
const UserGroupController = require('../controllers/usergroup.controller');
const DrugTypeController = require('../controllers/drugtype.controller');
const DrugCategoryController = require('../controllers/drugcategory.controller');

module.exports = (app) => {
  // app.post(
  //   '/register',
  //   AuthenticationControllerPolicy.register,
  //   AuthenticationController.register
  // );

  // app.post('/login', AuthenticationController.login);

  // app.get('/products', ProductsController.index);

  // // app.get("/songs/:songId", SongsController.show);

  // // app.put("/songs/:songId", SongsController.put);

  // app.post('/product', ProductsController.post);

  // // Router for User Group
  // app.get('/groups', GroupController.get);
  // app.get('/groups/:groupId', GroupController.getOne);
  // app.put('/groups/:groupId', GroupController.put);
  // app.post('/groups', GroupController.post);
  // app.delete('/groups/:groupId', GroupController.delete);

  // Router for Supplier
  app.get('/supplier', SupplierController.get);
  app.get('/supplier/:supplierId', SupplierController.getOne);
  app.put('/supplier/:supplierId', SupplierController.put);
  app.post('/supplier', SupplierController.post);
  app.delete('/supplier/:supplierId', SupplierController.delete);

  // Router for Goods
  app.get('/goods', GoodsController.get);
  app.get('/goods/:goodsId', GoodsController.getOne);
  app.put('/goods/:goodsId', GoodsController.put);
  app.post('/goods', GoodsController.post);
  app.delete('/goods/:goodsId', GoodsController.delete);

  // Router for Customer
  app.get('/customer', CustomerController.get);
  app.get('/customer/:customerId', CustomerController.getOne);
  app.put('/customer/:customerId', CustomerController.put);
  app.post('/customer', CustomerController.post);
  app.delete('/customer/:customerId', CustomerController.delete);

  // Router for User Group
  app.get('/usergroup', UserGroupController.get);
  app.get('/usergroup/:usergroupId', UserGroupController.getOne);
  app.put('/usergroup/:usergroupId', UserGroupController.put);
  app.post('/usergroup', UserGroupController.post);
  app.delete('/usergroup/:usergroupId', UserGroupController.delete);

  // Router for Drug Type
  app.get('/drugtype', DrugTypeController.get);
  app.get('/drugtype/:drugtypeId', DrugTypeController.getOne);
  app.put('/drugtype/:drugtypeId', DrugTypeController.put);
  app.post('/drugtype', DrugTypeController.post);
  app.delete('/drugtype/:drugtypeId', DrugTypeController.delete);

  //Router for DrugCategory
  app.get('/drugcategory', DrugCategoryController.get);
  app.get('/drugcategory/:drugcategoryId', DrugCategoryController.getOne);
  app.put('/drugcategory/:drugcategoryId', DrugCategoryController.put);
  app.post('/drugcategory', DrugCategoryController.post);
  app.delete('/drugcategory/:drugcategoryId', DrugCategoryController.delete);
};
