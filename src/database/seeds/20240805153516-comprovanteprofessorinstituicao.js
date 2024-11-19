'use strict';

import '../../database'
import ComprovanteProfessorInstituicao from '../../app/models/usuario_pertence_instituicao/comprovanteprofessorinstituicao';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const comprovantes = [
      {
        login: "Pedro",
        idInstituicao: 2,
        inicio: "2021-04-20",
        comprovante: "Comprovante de Pedro na UFSCar"
      },
      {
        login: "Carlos",
        idInstituicao: 1,
        inicio: "2021-04-20",
        comprovante: "Comprovante de Carlos na UFMG"
      },
      {
        login: "Pietro",
        idInstituicao: 1,
        inicio: "2021-04-20",
        comprovante: "Comprovante de Pietro na UFSCar"
      },
      {
        login: "Kactus",
        idInstituicao: 4,
        inicio: "2021-04-20",
        comprovante: "Comprovante de Kactus na UFTPR"
      }
    ]

    await ComprovanteProfessorInstituicao.bulkCreate(comprovantes, { individualHooks: true })

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('teacher_institution_register', null, {})
  }
};
