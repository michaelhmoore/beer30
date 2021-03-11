const csv = require('csv-parser')
const fs = require('fs')

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

    const getBeerData = new Promise((resolve, reject) => {
      const beers = []
      fs.createReadStream('beer.csv')
      .pipe(csv())
      .on('data', (beer) => {
        beer.createdAt = new Date()
        beer.updatedAt = new Date()
        beers.push(beer)
      })
      .on('end', async () => {
        resolve(beers)
      })
    })
    const beerData = await getBeerData
    await queryInterface.bulkInsert('Beers', beerData)
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
