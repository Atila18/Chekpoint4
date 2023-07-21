const router = require("express").Router();

const favoriteControllers = require("../controllers/favoriteControllers");

router.get("/", favoriteControllers.browse);
router.get("/:id", favoriteControllers.browseByUser);
router.get("/by-fav/:id", favoriteControllers.read);
router.put("/:id", favoriteControllers.edit);
router.post("/", favoriteControllers.add);
router.delete("/:id", favoriteControllers.destroy);

module.exports = router;
