module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    cs_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cs_address: DataTypes.STRING,
    cs_phone: DataTypes.STRING,
    cs_mobile: DataTypes.STRING,
  });
  return Customer;
};
