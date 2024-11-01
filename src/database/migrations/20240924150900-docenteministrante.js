'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('docenteministrante', {
      login: {
        type: Sequelize.STRING,
        primaryKey: true
      },
    })

    await queryInterface.addConstraint('docenteministrante', {
      fields: ['login'],
      type: 'foreign key',
      name: 'fk_login_docenteministrante',
      references: {
        table: 'usuario',
        field: 'login'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('docenteministrante')
  }
};
