'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('materialcursista', {
      login: {
        type: Sequelize.STRING,
      },
      idioma: {
        type: Sequelize.ENUM('ingles', 'portuges', 'alemao', 'frances', 'italiano', 'espanhol', 'japones'),
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      nivel: {
        type: Sequelize.CHAR(2),
        allowNull: false
      },
      ementa: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      cargaHoraria: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    })

    await queryInterface.addConstraint('materialcursista', {
      fields: ['login', 'nome'],
      type: 'unique',
      name: 'unique_login_nome_materialcursista'
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('materialcursista')
  }
};
