'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      schedule.belongsTo(models.allcodes,
        {
          foreignKey: 'timeType', targetKey: 'keyMap', as: 'timeTypeData'
        })
      schedule.belongsTo(models.User,
        { foreignKey: 'doctorId', targetKey: 'id', as: 'doctorData' })

    }
  };
  schedule.init({
    currentNumber: DataTypes.INTEGER,
    maxNumber: DataTypes.INTEGER,
    date: DataTypes.STRING,
    timeType: DataTypes.STRING,
    doctorId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'schedule',
  });
  return schedule;
};