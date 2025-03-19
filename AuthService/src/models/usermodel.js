'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
const {SALT} = require ('../config/serverConfig')
module.exports = (sequelize, DataTypes) => {
  class usermodel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usermodel.init({
    email: {type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len : [8,10]
      }
    }
  }, {
    sequelize,
    modelName: 'usermodel',
  });
  usermodel.beforeCreate((user) => {
    const encryptedpassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedpassword;
  })
  return usermodel;
};