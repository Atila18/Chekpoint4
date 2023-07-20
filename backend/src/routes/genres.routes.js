const router = require("express").Router();

const genreControllers = require("../controllers/genreControllers");

router.get("/", genreControllers.browse);
router.get("/:id", genreControllers.read);
router.put("/:id", genreControllers.edit);
router.post("/", genreControllers.add);
router.delete("/:id", genreControllers.destroy);

module.exports = router;
