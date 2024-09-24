"use strict";'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('disciplinaespecializacao', {
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },

  down: () => {}
};