'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addIndex('usuario', ['DDI', 'DDD', 'telefone'], {
      unique: true,
      name: 'unique_telefone',
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeIndex('Usuarios', 'unique_telefone')
  }
};
