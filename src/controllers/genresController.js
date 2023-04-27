const db = require("../database/models");

module.exports = {
    list: (req,res) => {
        db.genres.findAll()
            .then((genres) => {
                res.render("genresList",{
                    genres
                })
            })
    },
    detail:(req,res) => {
        let id = req.params.id;

        db.genres.findByPk(id)
            .then((genre) => {
                res.render("genresDetail", {
                    genre
                })
            })
    }
}