'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports', [
    {
      name : 'Kempegoada International Airport',
      cityid: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name : 'Shivaji Airport',
      cityid: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name : 'Mengaluru International Airport',
      cityid: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name : 'Mysuru Airport',
      cityid: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
