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

router.route("/categorytagbanner/new").post(createCategoryTagBanner);
router.route("/categorytagbanner/all").get(getAllCategoryTagBanner);
router.route("/categorytagbanner/deskimages").post(UploadDeskImage);
router.route("/categorytagbanner/mobimages").post(UploadMobImage);
router.route("/categorytagbanner/:id").put(UpdateCategoryTagBanner);
router.route("/categorytagbanner/:id").delete(DeleteCategoryTagBanner);

module.exports = router;
