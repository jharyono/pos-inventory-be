module.exports = (sequelize, DataTypes) => {
  const ProductMaster = sequelize.define("ProductMaster", {
    serialNo: DataTypes.STRING,
    barcode: DataTypes.INTEGER,
    prodId: DataTypes.STRING,
    prodName: DataTypes.STRING,
    prodDesc: DataTypes.STRING,
    prodCat: DataTypes.STRING,
    prodType: DataTypes.STRING,
    trackingType: DataTypes.STRING,
    uom: DataTypes.STRING,
    reorderlevel: DataTypes.INTEGER,
  });
  return ProductMaster;
};
