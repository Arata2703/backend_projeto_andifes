"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class ComprovanteAlunoInstituicao extends _sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                idInstituicao: {
                    type: _sequelize2.default.BIGINT,
                    references: {
                      model: 'instituicaoensino',
                      key: 'idInstituicao',
                      name: 'fk_comprovante_instituicao'
                    },
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                    primaryKey: true
                  },
                login: {
                    type: _sequelize2.default.STRING,
                    references: {
                        model: 'alunoisfdeinstituicao',
                        key: 'login'
                    },
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                    primaryKey: true
                },
                inicio: {
                    type: _sequelize2.default.DATEONLY,
                    allowNull: false,
                    primaryKey: true
                },
                termino: _sequelize2.default.DATEONLY,
                comprovante: {
                    type: _sequelize2.default.STRING,
                    allowNull: false
                }
            },
            {
                sequelize,
                timestamps: false,
                tableName: 'comprovantealunoinstituicao',
                indexes: [{
                    name: 'primary_key',
                    unique: true,
                    using: 'BTREE',
                    fields: [
                        { name: 'login'},
                        { name: 'idInstituicao'},
                        { name: 'inicio'}
                    ]
                }]
            }
        )

        return this
    
    }
}

exports. default = ComprovanteAlunoInstituicao