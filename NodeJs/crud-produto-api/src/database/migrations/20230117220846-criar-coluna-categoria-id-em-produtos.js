'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('produtos', 'categoriaId', Sequelize.BIGINT);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('produtos', 'categoriaId')
  }
};
