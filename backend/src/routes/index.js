const router = require("express").Router();
const usersRouter = require("./users.routes");
const authorsRouter = require("./authors.routes");
const categoriesRouter = require("./categories.routes");
const favoritesRouter = require("./favorites.routes");
const rolesRouter = require("./roles.routes");
const genresRouter = require("./genres.routes");
const mangasRouter = require("./mangas.routes");
const mangaGenresRouter = require("./mangaGenre.routes");

router.use("/users", usersRouter);
router.use("/authors", authorsRouter);
router.use("/categories", categoriesRouter);
router.use("/favorites", favoritesRouter);
router.use("/roles", rolesRouter);
router.use("/genres", genresRouter);
router.use("/mangas", mangasRouter);
router.use("/mangaGenres", mangaGenresRouter);

module.exports = router;
