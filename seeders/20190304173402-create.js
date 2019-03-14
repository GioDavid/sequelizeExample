'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('people', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'demo@demo.com',
      gender: 'male',
      'ip_address': '176.30.39.47',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('people', null, {});
  }
};
