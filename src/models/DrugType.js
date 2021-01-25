module.exports = (sequelize, DataTypes) => {
  const DrugType = sequelize.define('DrugType', {
    ty_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });
  return DrugType;
};
