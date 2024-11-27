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
      },
      eixoTematico: {
        type: Sequelize.STRING,
        allowNull: false
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })

    await queryInterface.addConstraint('disciplinaespecializacao', {
      fields: ['nome', 'categoria'],
      type: 'unique',
      name: 'unique_nome_categoria_disciplinaespecializacao'
    })
  },

  down: () => {}
};
