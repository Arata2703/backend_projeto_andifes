import Sequelize, { Model } from "sequelize"

class CursistaEspecializacao extends Model {
    static init (sequelize) {
        super.init(
            {
                login: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    primaryKey: true
                },
                practical_hours: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0
                },
                nc_hours: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0
                },
                ccti_hours: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0
                },
                ccip_hours: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0
                },
                cci_hours: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0
                },
            },
            {
                sequelize,
                timestamps: false,
                tableName: 'specialization_student',
                indexes: [{
                    name: "primary",
                    unique: true,
                    using: 'BTREE', 
                    fields: [
                      { name: 'login' }
                    ]
                  }]
            }
        )

        return this
    }

    static associate(models) {
        this.hasMany(models.RelatorioPratico, {
            foreignKey: 'login',
            as: 'material'
        })

        this.belongsTo(models.ProfessorIsF, {
            foreignKey: 'login'
        })

        this.belongsToMany(models.TurmaDisciplinaEspecializacao, {
            through: 'cursistacursaturmaespecializacao',
            foreignKey: 'login',
            sourceKey: 'login',
            targetKey: 'nome',
            timestamps: false,
            as: 'turma'
        })

        this.belongsToMany(models.DocenteOrientador, {
            through: 'orientadororientacursista',
            foreignKey: 'loginCursista',
            sourceKey: 'login',
            targetKey: 'login',
            timestamps: false,
            as: "orientador"
        })

        this.hasMany(models.InteresseNaDisciplina, {
            foreignKey: 'login',
            as: 'interesse'
        })

        this.hasOne(models.OuvidoriaCursoEspecializacao, {
            foreignKey: 'login',
            as: 'reclamation'
        })
    }
}

export default CursistaEspecializacao