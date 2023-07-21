const router = require("express").Router();

const categoryControllers = require("../controllers/categoryControllers");

router.get("/", categoryControllers.browse);
router.get("/:id", categoryControllers.read);
router.put("/:id", categoryControllers.edit);
router.post("/", categoryControllers.add);
router.delete("/:id", categoryControllers.destroy);

module.exports = router;
