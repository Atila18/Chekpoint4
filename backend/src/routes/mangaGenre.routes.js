const router = require("express").Router();

const mangaGenreControllers = require("../controllers/mangaGenreControllers");

router.get("/", mangaGenreControllers.browse);
router.get("/:id", mangaGenreControllers.read);
router.put("/:id", mangaGenreControllers.edit);
router.post("/", mangaGenreControllers.add);
router.delete("/:id", mangaGenreControllers.destroy);

module.exports = router;
