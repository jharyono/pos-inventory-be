module.exports = (sequelize, DataTypes) => {
  const Goods = sequelize.define("Goods", {
    gd_code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    gd_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gd_manufacture: DataTypes.STRING,
    gd_tp_code: DataTypes.STRING,
    gd_ct_code: DataTypes.STRING,
    gd_um_code: DataTypes.STRING,
    gd_buy_price: DataTypes.DOUBLE,
    gd_sale_price: DataTypes.DOUBLE,
    gd_stock: DataTypes.INTEGER,
  });
  return Goods;
};
