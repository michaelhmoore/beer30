'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Beer.belongsToMany(models.SixPack, {
        through: {
          model:'SixPackBeers',
          unique:false
        }
      })
    }
  };
  Beer.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    brewery: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Beer',
  });
  return Beer;
};

