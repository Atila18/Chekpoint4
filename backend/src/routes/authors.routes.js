const router = require("express").Router();

const authorControllers = require("../controllers/authorControllers");

router.get("/", authorControllers.browse);
router.get("/:id", authorControllers.read);
router.put("/:id", authorControllers.edit);
router.post("/", authorControllers.add);
router.delete("/:id", authorControllers.destroy);

module.exports = router;
