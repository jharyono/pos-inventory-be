module.exports = (sequelize, DataTypes) => {
  const DrugCategory = sequelize.define('DrugCategory', {
    ct_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });
  return DrugCategory;
};
