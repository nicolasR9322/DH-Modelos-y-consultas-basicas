Trabajo práctico de Digital House donde se trabaja con modelos y se realizan consultas básicas

descripcion: El objetivo será el de únicamente listar y mostrar la información utilizando sequelize y sus metodos

    desafio 1:
    se usa una base de datos y un proyecto previamente creados

        -instalar paquete sequelize
        -creacion de archivo .sequelizerc
        -correr sequelize init en terminal
        -modificar el archivo config.js

    desafio 2:

        -crear los modelos de "movies" y "genres"
        -aclarar los nombres de las tablas, timestamps y todas las columnas con su tipo y constraints
    
    desafio 3:
        -importar la variable db en moviesController.js
        crear las siguientes rutas:
            -/movies(GET)
                -lista todas las peliculas de la base de datos, cada titulo debe ser un hipervinculo par ver el detalle
            -/movies/detail/:id(GET)
                -detalle de pelicula correspondiente al id de la URL, cada pelicula debera listar sus datos ( titulo,rating,premios,duracion y fecha de estreno)
            -/movies/new(GET)
                -obtener las peliculas en el orden de fecha mas reciente
            -/movies/recommended
                -debera mostrar las ultimas mejores 5 peliculas ordenadas segun su rating
        -importar la variable db par genresController.js
            -crear las siguientes rutas
                -/genres(GET)
                    -listar todos los generos de la base de datos, cada genero debe ser un hipervinculo
                -/genres/detail/:id(GET)
                    -detalle de cada genero, debe listar (id, name, ranking)
    
            