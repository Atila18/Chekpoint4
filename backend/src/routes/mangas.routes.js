const router = require("express").Router();

const mangaControllers = require("../controllers/mangaControllers");

router.get("/", mangaControllers.browse);
router.get("/:id", mangaControllers.read);
router.put("/:id", mangaControllers.edit);
router.post("/", mangaControllers.add);
router.delete("/:id", mangaControllers.destroy);

module.exports = router;
