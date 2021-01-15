module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define("Supplier", {
    sp_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sp_address: DataTypes.STRING,
    sp_phone: DataTypes.STRING,
    sp_contact: DataTypes.STRING,
    sp_contact_phone: DataTypes.STRING,
  });
  return Supplier;
};
