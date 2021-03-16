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
     await queryInterface.bulkInsert('SixPacks', [{
      name: 'Staff Favorites',
      description: 'Six of our favorite beers.  They are tried and true and some of our go tos when it comes to beer.',
      UserId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Weekend Warriors',
      description: 'The weekend has started...you need beers...we got you covered on our weekend warriors pack.  Start the weekend off right.',
      UserId: '1',
      createdAt: new Date(),
      updatedAt: new Date() 
    }, 
    {
      name: 'Laid Back N Easy',
      description: 'Lay back and drink some lo key beers.  No need to get all riled up when you have these beers to chill on.',
      UserId: '1',
      createdAt: new Date(),
      updatedAt: new Date() 
    }, 
    {
      name: 'Beach',
      description: 'Suns out, ocean is vibin, grab some beach beers and relax and enjoy.',
      UserId: '1',
      createdAt: new Date(),
      updatedAt: new Date() 
    }, 
    {
      name: 'Long Work Week',
      description: 'It\s been a long work week.  Now do not waste your time and get you some of these beers to get you back in the right mindset.',
      UserId: '1',
      createdAt: new Date(),
      updatedAt: new Date() 
    }, 
    {
      name: 'Just One More',
      description: 'One beer sometimes is just not enough.  This pack when you pop it you can\t stop it',
      UserId: '1',
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
