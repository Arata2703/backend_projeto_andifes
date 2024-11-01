"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _alunoestrangeiro = require('../../models/usuarios/alunoestrangeiro'); var _alunoestrangeiro2 = _interopRequireDefault(_alunoestrangeiro);
var _alunoIsFController = require('./alunoIsFController'); var _alunoIsFController2 = _interopRequireDefault(_alunoIsFController);
var _alunoisf = require('../../models/usuarios/alunoisf'); var _alunoisf2 = _interopRequireDefault(_alunoisf);
var _usuario = require('../../models/usuarios/usuario'); var _usuario2 = _interopRequireDefault(_usuario);
var _messages_pt = require('../../utils/messages/messages_pt'); var _messages_pt2 = _interopRequireDefault(_messages_pt);

class alunoEstrangeiroController {
    async post(req, res) {
        try {
            await _alunoIsFController2.default.post(req, res, 0)
            
            const existingStudent = await _alunoestrangeiro2.default.findOne({
                where: {
                    login: req.body.login
                }
            })
    
            if(existingStudent) {
                return res.status(409).json({
                    error: `${existingStudent.login} ` + _messages_pt2.default.ALREADY_IN_SYSTEM
                })
            }
    
            const aluno = await _alunoestrangeiro2.default.create({
                paisOrigem: req.body.paisOrigem,
                comprovante: req.body.comprovante,
                tipo: req.body.tipo,
                login: req.body.login,
                codigo: req.body.codigo
            })
        
            return res.status(201).json(aluno)
        } catch (error) {
            console.log(error)
            return res.status(500).json(_messages_pt2.default.INTERNAL_SERVER_ERROR + error)
        }

    }

    async get(_, res) {
        try {
            const alunos = await _alunoestrangeiro2.default.findAll({
                include: [
                    {
                        model: _alunoisf2.default,
                        attributes: {
                            exclude: ['login']
                        },
                        include: [{
                            model: _usuario2.default,
                            attributes: {
                                exclude: ['login', 'senha_encriptada', 'ativo', 'tipo']
                            }
                        }]
                    }
                ]
            })

            return res.status(200).json(alunos)
        } catch (error) {
            return res.status(500).json(_messages_pt2.default.INTERNAL_SERVER_ERROR + error)
        }
    }
}

exports. default = new alunoEstrangeiroController()