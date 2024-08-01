"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _turmaoc = require('../models/turmaoc'); var _turmaoc2 = _interopRequireDefault(_turmaoc);
var _curso = require('../models/curso'); var _curso2 = _interopRequireDefault(_curso);

class turmaOCController {
    async post(req, res) {
        const turmaExistente = await _turmaoc2.default.findOne({
            where: {
                nome: req.body.nome
            }
        })

        if(turmaExistente) {
            return res.status(422).json({
                msg: "Turma da Oferta Coletiva ja cadastrada"
            })
        }

        try {
            const turma = await _turmaoc2.default.create({
                idCurso: req.body.idCurso,
                nVagas: req.body.nVagas,
                nome: req.body.nome,
                nInscritos: req.body.nInscritos,
                nConcluintes: req.body.nConcluintes,
                nReprovados: req.body.nReprovados,
            })

            return res.status(201).json(turma)
        } catch (error) {
            return res.status(422).json(error)   
        }

    }

    async get(_, res) {
        try {
            const turmas = await _turmaoc2.default.findAll({
                include: [
                    {
                        model: _curso2.default,
                        attributes: ['nome', 'idioma', 'categoria', 'nivel', 'cargaHoraria']
                    }
                ],
                order: [
                    ['idCurso', 'ASC'],
                    ['idTurma', 'ASC']
                ]
            })

            return res.status(200).json(turmas)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

}

exports. default = new turmaOCController()