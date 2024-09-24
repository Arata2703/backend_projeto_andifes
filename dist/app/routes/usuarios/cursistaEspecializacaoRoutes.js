"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _cursistaEspecializacaoController = require('../../controllers/usuarios/cursistaEspecializacaoController'); var _cursistaEspecializacaoController2 = _interopRequireDefault(_cursistaEspecializacaoController);
var _auth = require('../../middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

const router = new (0, _express.Router)()

router.post('/', _cursistaEspecializacaoController2.default.post)

router.get('/', _cursistaEspecializacaoController2.default.get)

router.post('/inserir_material', _auth2.default, _cursistaEspecializacaoController2.default.postMaterial)

router.get('/meus_materiais', _auth2.default, _cursistaEspecializacaoController2.default.getMeusMateriais)

exports. default = router