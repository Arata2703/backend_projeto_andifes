"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _instituicaoEnsinoController = require('../controllers/instituicaoEnsinoController'); var _instituicaoEnsinoController2 = _interopRequireDefault(_instituicaoEnsinoController);

const router = new (0, _express.Router)()

router.post('/', _instituicaoEnsinoController2.default.post)

exports. default = router