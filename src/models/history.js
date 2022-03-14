'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  histories.init({
    patientId: DataTypes.INTEGER,
    doctorId : DataTypes.INTEGER,
    description: DataTypes.TEXT,  
    files: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'histories',
  });
  return histories;
};