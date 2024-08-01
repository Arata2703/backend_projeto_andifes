'use strict';

import '../../database'
import TurmaOC from '../../app/models/turmaoc';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const turmas = [
      {
        idCurso: 1,
        nVagas: 50,
        nome: "2024/2_japonesbasico1_turma1",
        nInscritos: 30,
        nConcluintes: 20,
        nReprovados: 1
      },
      {
        idCurso: 1,
        nVagas: 50,
        nome: "2024/2_japonesbasico1_turma2",
        nInscritos: 30,
        nConcluintes: 20,
        nReprovados: 1
      },
      {
        idCurso: 1,
        nVagas: 50,
        nome: "2024/2_japonesbasico1_turma3",
        nInscritos: 30,
        nConcluintes: 20,
        nReprovados: 1
      },
      {
        idCurso: 1,
        nVagas: 50,
        nome: "2024/2_japonesbasico1_turma4",
        nInscritos: 30,
        nConcluintes: 20,
        nReprovados: 1
      },
      {
        idCurso: 2,
        nVagas: 50,
        nome: "2024/_inglesbasico1_turma1",
        nInscritos: 30,
        nConcluintes: 20,
        nReprovados: 1
      },
      {
        idCurso: 2,
        nVagas: 50,
        nome: "2024/_inglesbasico1_turma2",
        nInscritos: 30,
        nConcluintes: 20,
        nReprovados: 1
      },
      {
        idCurso: 2,
        nVagas: 50,
        nome: "2024/_inglesbasico1_turma3",
        nInscritos: 30,
        nConcluintes: 20,
        nReprovados: 1
      },
      {
        idCurso: 2,
        nVagas: 50,
        nome: "2024/_inglesbasico1_turma4",
        nInscritos: 30,
        nConcluintes: 20,
        nReprovados: 1
      },
      {
        idCurso: 3,
        nVagas: 50,
        nome: "2024/2_alemaobasico1_turma1",
        nInscritos: 30,
        nConcluintes: 20,
        nReprovados: 1
      },
      {
        idCurso: 3,
        nVagas: 50,
        nome: "2024/2_alemaobasico1_turma2",
        nInscritos: 30,
        nConcluintes: 20,
        nReprovados: 1
      },
      {
        idCurso: 3,
        nVagas: 50,
        nome: "2024/2_alemaobasico1_turma3",
        nInscritos: 30,
        nConcluintes: 20,
        nReprovados: 1
      },
      {
        idCurso: 3,
        nVagas: 50,
        nome: "2024/2_alemaobasico1_turma4",
        nInscritos: 30,
        nConcluintes: 20,
        nReprovados: 1
      },
      {
        idCurso: 4,
        nVagas: 50,
        nome: "2024/2_italianobasico1_turma1",
        nInscritos: 30,
        nConcluintes: 20,
        nReprovados: 1
      },
      {
        idCurso: 4,
        nVagas: 50,
        nome: "2024/2_italianobasico1_turma2",
        nInscritos: 30,
        nConcluintes: 20,
        nReprovados: 1
      },
    ]

    await TurmaOC.bulkCreate(turmas, { individualHooks: true })

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('turmaoc', null, {})
  }
};
