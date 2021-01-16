module.exports = (sequelize, DataTypes) => {
  const ControlData = sequelize.define('ControlData', {
    cd_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cd_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return ControlData;
};
