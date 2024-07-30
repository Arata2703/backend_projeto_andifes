import Sequelize, { Model } from "sequelize"

class ProfessorIsF extends Model {
    static init (sequelize) {
        super.init(
            {
                login: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    primaryKey: true,
                    references: {
                      model: 'usuarios',
                      key: 'login',
                      name: 'fk_login_professorisf'
                    },
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                },
                poca: {
                type: Sequelize.TEXT,
                allowNull: false
                },
                inicio: {
                type: Sequelize.DATEONLY,
                allowNull: false,
                primaryKey: true
                },
                fim: Sequelize.DATEONLY
            },
            {
                sequelize,
                timestamps: false,
                tableName: 'professorisf',
                indexes: [{
                    name: "primary",
                    unique: true,
                    using: 'BTREE', 
                    fields: [
                      { name: 'login' },
                      { name: 'inicio'}
                    ]
                  }]
            }
        )

        return this
    }

    static associate(models) {
        this.belongsTo(models.Usuario, {
            foreignKey: 'login'
        })
    }

}

export default ProfessorIsF