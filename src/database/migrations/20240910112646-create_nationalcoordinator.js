'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('national_coordinator', {
      login: {
        type: Sequelize.STRING,
        primaryKey: true
      },
    })

    await queryInterface.addConstraint('national_coordinator', {
      fields: ['login'],
      type: 'foreign key',
      name: 'fk_login_coordenadornacional',
      references: {
        table: 'user',
        field: 'login'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('national_coordinator')
  }
};
