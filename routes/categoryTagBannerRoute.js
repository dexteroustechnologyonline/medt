const express = require("express");
const {
  createCategoryTagBanner,
  getAllCategoryTagBanner,
  UpdateCategoryTagBanner,
  DeleteCategoryTagBanner,
  UploadDeskImage,
  UploadMobImage
} = require("../controllers/categoryTagBannerController");

const router = express.Router();

router.route("/new").post(createCategoryTagBanner);
router.route("/all").get(getAllCategoryTagBanner);
router.route("/deskimages").post(UploadDeskImage);
router.route("/mobimages").post(UploadMobImage);
router.route("/:id").put(UpdateCategoryTagBanner);
router.route("/:id").delete(DeleteCategoryTagBanner);

module.exports = router;
