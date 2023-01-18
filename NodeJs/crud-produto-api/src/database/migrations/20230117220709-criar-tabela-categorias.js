'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('categorias', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      criadoEm: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      atualizadoEm: {
        type: Sequelize.DATE,
        defaultValue: null,
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('categorias');
  }
};
