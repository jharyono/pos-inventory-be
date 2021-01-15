const bcrypt = require("bcryptjs");

function hashPassword(user, options) {
  const SALT_FACTOR = 10;
  if (!user.changed("password")) {
    return;
  }
  return bcrypt
    .genSalt(SALT_FACTOR)
    .then((salt) => bcrypt.hash(user.password, salt, null))
    .then((hash) => {
      user.setDataValue("password", hash);
    });
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      group: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeSave: hashPassword,
      },
    }
  );

  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
  };

  return User;
};
