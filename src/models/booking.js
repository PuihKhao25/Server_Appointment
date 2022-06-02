'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      booking.belongsTo(models.User,
        { foreignKey: 'patientId', targetKey: 'id', as: 'patientData' })
        booking.belongsTo(models.allcodes, { foreignKey: 'timeType', targetKey: 'keyMap', as: 'timeTypeDataPatient' })
    }
  };
  booking.init({
    statusId: DataTypes.STRING,
    doctorId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER,
    date: DataTypes.STRING, 
    timeType: DataTypes.STRING, 
    token:  DataTypes.STRING, 
  }, {
    sequelize,
    modelName: 'booking',
  });
  return booking;
};