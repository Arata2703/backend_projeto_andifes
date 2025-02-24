'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('isfteacher_proeficiency', {
      login: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      idioma: {
        type: Sequelize.ENUM('ingles', 'portuges', 'alemao', 'frances', 'italiano', 'espanhol', 'japones'),
        primaryKey: true
      },
      nivel: {
        type: Sequelize.CHAR(2),
        primaryKey: true
      },
      comprovante: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    })

    await queryInterface.addConstraint('isfteacher_proeficiency', {
      fields: ['login'],
      type: 'foreign key',
      name: 'fk_login_proeficienciaprofessorisf',
      references: {
        table: 'isf_teacher',
        field: 'login'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: () => {}
};
