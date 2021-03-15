'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SixPackBeers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BeerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Beers',
          key: 'id',
        },
        onDelete: 'CASCADE'
      },  
      SixPackId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'SixPacks',
          key: 'id',
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SixPackBeers');
  }
};