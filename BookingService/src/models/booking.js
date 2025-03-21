'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    flightid: {type: DataTypes.INTEGER,
      allowNull: false
    },
    userid: {type: DataTypes.INTEGER, 
      allowNull: false
    },
    status: {type: DataTypes.ENUM,
      allowNull: false,
      values: ['InProcess', 'Booked', 'Cancelled'],
      defaultValue: 'InProcess',
    },
    noOfSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    totalcost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};