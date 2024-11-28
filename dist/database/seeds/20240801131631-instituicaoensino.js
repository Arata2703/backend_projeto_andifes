"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }'use strict';

require('../../database');
var _instituicaoensino = require('../../app/models/instituicao/instituicaoensino'); var _instituicaoensino2 = _interopRequireDefault(_instituicaoensino);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const instituicoes = [
      {
        idInstituicao: 1,
        nome: "Universidade Federal de Minas Gerais",
        documentoVinculo: "Documento de vinculo da UFMG",
        brasileira: 1
      },
      {
        idInstituicao: 2,
        nome: "Massachusets Institute of Tecnology",
        documentoVinculo: "Documento de vinculo do MIT",
        brasileira: 0
      },
      {
        idInstituicao: 3,
        nome: "Universidade de São Paulo",
        documentoVinculo: "Documento de vinculo da USP",
        brasileira: 1
      },
      {
        idInstituicao: 4,
        nome: "Universidade Federal Tecnologica do Parana",
        documentoVinculo: "Documento de vinculo da UFTPR",
        brasileira: 1
      },
      {
        idInstituicao: 5,
        nome: "Universidade Federal de São Carlos",
        documentoVinculo: "Documento de vinculo da UFSCar",
        brasileira: 1
      },
      {
        idInstituicao: 6,
        nome: "Cambridge",
        documentoVinculo: "Documento de vinculo de Cambridge",
        brasileira: 0
      },
      {
        idInstituicao: 7,
        nome: "Tokyo University",
        documentoVinculo: "Documento de vinculo da UTokyo",
        brasileira: 0
      },
    ]

    try {  
      await _instituicaoensino2.default.bulkCreate(instituicoes, { individualHooks: true })
    } catch (error) {
      throw error
    }

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('instituicao_ensino', null, {})
    await queryInterface.sequelize.query('ALTER TABLE instituicaoensino AUTO_INCREMENT = 1')
  }
};
