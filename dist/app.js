"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _routes = require('./app/routes/routes'); var _routes2 = _interopRequireDefault(_routes);
require('./database');

class App {
    constructor() {
        this.server = _express2.default.call(void 0, )
        this.middleware()
        this.routes()
    }

    middleware() {
        this.server.use(_express2.default.json())
    }

    routes() {
        this.server.use(_routes2.default)
    }
}


exports. default = new App().server