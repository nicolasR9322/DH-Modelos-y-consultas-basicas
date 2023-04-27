module.exports = (sequelize, dataTypes) => {

    const alias = "movies"
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull:false,
        },
        rating: {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull:false,
        },
        awards: {
            type: dataTypes.INT(10).UNSIGNED,
            allowNull:false,
            defaultValue: 0
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull:false,
        },
        length: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            defaultValue: null
        },
        genre_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            defaultValue: null
        }
    }
    const config = {
        tableName: "movies",
        createdAt: "created_at",
        updatedAt: "updated_at",
    }

    const MOVIES = sequelize.define(alias,cols,config);

    return MOVIES;
}