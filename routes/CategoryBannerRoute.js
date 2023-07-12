const express = require("express");
const {
  createCategoryBanner,
  getAllCategoryBanner,
  UpdateCategoryBanner,
  DeleteCategoryBanner,
  UploadDeskImage,
  UploadMobImage
} = require("../controllers/categoryBannerController");

const router = express.Router();

router.route("/new").post(createCategoryBanner);
router.route("/all").get(getAllCategoryBanner);
router.route("/deskimages").post(UploadDeskImage);
router.route("/mobimages").post(UploadMobImage);
router.route("/:id").put(UpdateCategoryBanner);
router.route("/:id").delete(DeleteCategoryBanner);

module.exports = router;
