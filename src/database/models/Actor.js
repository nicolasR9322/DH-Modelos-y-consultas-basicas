module.exports = (sequelize, dataTypes) => {

    const alias = "actors"
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull:false,
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull:false,
        },
        rating: {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull:false,
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            defaultValue: null
    }
}
    const config = {
        tableName: "actors",
        createdAt: "created_at",
        updatedAt: "updated_at",
    }

    const ACTORS = sequelize.define(alias,cols,config);

    return ACTORS;
}