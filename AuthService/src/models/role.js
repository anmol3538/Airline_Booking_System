'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association between Role and Usermodel
      this.belongsToMany(models.Usermodel, {
        through: 'user_roles', // Join table for the many-to-many relationship
      });
    }
  }

  // Initialize the Role model with a 'name' field
  Role.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Role', // Capitalized model name
    }
  );

  return Role;
};
