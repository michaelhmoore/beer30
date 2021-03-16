'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SixPack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SixPack.belongsTo(models.User)
      SixPack.belongsToMany(models.Beer, {
        through: {
          model:'SixPackBeers',
          unique:false
        }
      })
    }
  };
  SixPack.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'SixPack',
  });
  return SixPack;
};