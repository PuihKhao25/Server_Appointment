'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class allcodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      allcodes.hasHooks(models.User, { foreignKey: 'positionId', as: 'positionData' })
      allcodes.hasHooks(models.User, { foreignKey: 'gender', as: 'genderData' })
    }
  };
  allcodes.init({
    keyMap: DataTypes.STRING,
    type: DataTypes.STRING,
    valueEn: DataTypes.STRING,
    valueVi: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'allcodes',
  });
  return allcodes;
};