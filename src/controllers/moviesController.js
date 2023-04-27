const db = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
    list: (req,res) => {
        db.movies.findAll()
            .then((movies) => {
                res.render("moviesList", {
                    movies
                })
            })
    },
    detail: (req,res) => {
        let id = req.params.id;
        db.movies.findByPk(id)
            .then(movie => {
                
                res.render("moviesDetail",{
                    movie
                })
            })
    },
    new: (req,res) => {
        db.movies.findAll({
            order: [["release_date", "DESC"]]
        })
            .then((movies) => {
                res.render("newestMovies", {
                    movies
                })
            })
    },
    recommended: (req,res) => {
        db.movies.findAll({
            where: {
                rating : {
                    [Op.gte] : 8 
            }
        }
            ,
            order: [
                ["rating", "DESC"],
                ["release_date", "DESC"],
            ],
            limit : 5
        })
            .then((movies) => {
                res.render("recommendedMovies", {
                    movies
                })
            })
    }
}