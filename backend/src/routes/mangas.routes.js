const router = require("express").Router();

const mangaControllers = require("../controllers/mangaControllers");
const uploadMangaImage = require("../controllers/uploadMangaImageControllers");

router.get("/", mangaControllers.browse);
router.get("/:id", mangaControllers.read);
router.put(
  "/:id",
  uploadMangaImage.uploadMangaImageForEdition,
  mangaControllers.edit
);
router.post("/", uploadMangaImage.uploadMangaImage, mangaControllers.add);
router.delete("/:id", mangaControllers.destroy);

module.exports = router;
