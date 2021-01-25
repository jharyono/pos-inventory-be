module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('UserGroup', {
    gp_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });
  return UserGroup;
};
