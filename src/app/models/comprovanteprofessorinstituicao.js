import Sequelize, { Model } from 'sequelize'

class ComprovanteProfessorInstituicao extends Model {
  static init(sequelize) {
    super.init(
      {
        login: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true
        },
        idInstituicao: {
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true
        },
        inicio: {
          type: Sequelize.DATEONLY,
          allowNull: false,
          primaryKey: true
        },
        termino: Sequelize.DATEONLY,
        comprovante: {
          type: Sequelize.TEXT,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'comprovanteprofessorinstituicao',
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

export default ComprovanteProfessorInstituicao