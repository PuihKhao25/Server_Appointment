'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_infor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor_infor.belongsTo(models.User, {foreignKey:'doctorId'});

      Doctor_infor.belongsTo(models.allcodes,{foreignKey:'priceId',targetKey:'keyMap', as:'priceIdTypeData'})
      Doctor_infor.belongsTo(models.allcodes,{foreignKey:'provinceId',targetKey:'keyMap', as:'provinceIdTypeData'})
      Doctor_infor.belongsTo(models.allcodes,{foreignKey:'paymentId',targetKey:'keyMap', as:'paymentIdTypeData'})
    }
  };

  Doctor_infor.init({
    doctorId: DataTypes.INTEGER,
    priceId: DataTypes.STRING,
    provinceId: DataTypes.STRING,
    paymentId: DataTypes.STRING,
    addressClinic: DataTypes.INTEGER,
    nameClinic: DataTypes.STRING,
    note: DataTypes.STRING,
    count: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Doctor_infor',
    freezeTableName: true
  });
  return Doctor_infor;
};