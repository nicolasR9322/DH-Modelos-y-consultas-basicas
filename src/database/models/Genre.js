module.exports = (sequelize, dataTypes) => {

    const alias = "genres"
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull:false,
        },
        ranking: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull:false,
            unique:true,
        },
        active: {
            type: dataTypes.TINYINT(1),
            allowNull:false,
            defaultValue: 1,
        }
    }
    const config = {
        tableName: "genres",
        createdAt: "created_at",
        updatedAt: "updated_at",
    }

    const GENRES = sequelize.define(alias,cols,config);

    return GENRES;
}