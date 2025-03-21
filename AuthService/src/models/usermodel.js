'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
const { SALT } = require('../config/serverConfig');

module.exports = (sequelize, DataTypes) => {
  class Usermodel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association between Usermodel and Role
      this.belongsToMany(models.Role, {
        through: 'user_roles', // Define the join table
      });
    }
  }

  // Define the model with email and password fields
  Usermodel.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 10], // Password length validation
      },
    },
  }, {
    sequelize,
    modelName: 'Usermodel', // Make sure it's capitalized
  });

  // Before creating a user, hash the password
  Usermodel.beforeCreate((user) => {
    const encryptedPassword = bcrypt.hashSync(user.password, parseInt(SALT));
    user.password = encryptedPassword;
  });

  return Usermodel;
};
