module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define("UserGroup", {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: DataTypes.STRING,
  });
  return UserGroup;
};
