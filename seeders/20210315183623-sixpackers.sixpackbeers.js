'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('SixPackBeers', [
    {
      BeerId: '1',
      SixPackId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '2',
      SixPackId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '3',
      SixPackId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '4',
      SixPackId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '5',
      SixPackId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '6',
      SixPackId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '7',
      SixPackId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '8',
      SixPackId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '9',
      SixPackId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '10',
      SixPackId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '11',
      SixPackId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '12',
      SixPackId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '13',
      SixPackId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '14',
      SixPackId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '15',
      SixPackId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '16',
      SixPackId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '17',
      SixPackId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '18',
      SixPackId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '19',
      SixPackId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '20',
      SixPackId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '21',
      SixPackId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '22',
      SixPackId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '23',
      SixPackId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '24',
      SixPackId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '25',
      SixPackId: '5',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '26',
      SixPackId: '5',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '27',
      SixPackId: '5',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '28',
      SixPackId: '5',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '29',
      SixPackId: '5',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '30',
      SixPackId: '5',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '10',
      SixPackId: '6',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '20',
      SixPackId: '6',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '30',
      SixPackId: '6',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '14',
      SixPackId: '6',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '25',
      SixPackId: '6',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      BeerId: '6',
      SixPackId: '6',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
