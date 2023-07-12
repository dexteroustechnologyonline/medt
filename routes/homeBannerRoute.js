const express = require("express");
const {
  createHomeBanner,
  getAllHomeBanner,
  UpdateHomeBanner,
  DeleteHomeBanner,
  UploadDeskImage,
  UploadMobImage,
} = require("../controllers/homeBannerController");

const router = express.Router();

router.route("/new").post(createHomeBanner);
router.route("/all").get(getAllHomeBanner);
router.route("/deskimages").post(UploadDeskImage);
router.route("/mobimages").post(UploadMobImage);
router.route("/:id").put(UpdateHomeBanner);
router.route("/:id").delete(DeleteHomeBanner);

module.exports = router;
