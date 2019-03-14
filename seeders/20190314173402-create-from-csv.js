'use strict';
import { getInformationFromCSVFile } from "../helpers";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('people', getInformationFromCSVFile(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('people', null, {});
  }
};
