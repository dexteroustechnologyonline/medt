const HomeBanner = require("../models/homeBannerModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

exports.createHomeBanner = async (req, res, next) => {
  try {
    const homeBanner = await HomeBanner.create(req.body);
    res.status(201).json({
      success: true,
      homeBanner,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error: error,
    });
  }
};

exports.getAllHomeBanner = catchAsyncErrors(async (req, res) => {
  try {
    const homeBanners = await HomeBanner.find();
    res.status(200).json({
      success: true,
      homeBanners,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error: error,
    });
  }
});

exports.UploadDeskImage = catchAsyncErrors(async (req, res, next) => {
  try {
    const desktopImage = await cloudinary.v2.uploader.upload(
      req.body.desktopImage,
      {
        folder: "Product/Desktop",
        width: 1198,
        height: 355,
        crop: "scale",
      }
    );

    const desktopImages = {
      public_id: desktopImage.url.slice(60, 71),
      url: desktopImage.secure_url,
    };

    res.status(200).json({
      success: true,
      desktopImages,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error: error,
    });
  }
});

exports.UploadMobImage = catchAsyncErrors(async (req, res, next) => {
  try {
    const mobileImage = await cloudinary.v2.uploader.upload(
      req.body.mobileImage,
      {
        folder: "Product/Mobile",
        width: 740,
        height: 340,
        crop: "scale",
      }
    );

    const mobileImages = {
      public_id: mobileImage.url.slice(60, 71),
      url: mobileImage.secure_url,
    };

    res.status(200).json({
      success: true,
      mobileImages,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error: error,
    });
  }
});

exports.UpdateHomeBanner = catchAsyncErrors(async (req, res, next) => {
  try {
    let homeBanner = await HomeBanner.findById(req.params.id);
    if (!homeBanner) {
      return res.status(500).json({
        success: false,
        message: "homeBanner not found",
      });
    }
    homeBanner = await homeBanner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      homeBanner: homeBanner,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error: error,
    });
  }
});

exports.DeleteHomeBanner = catchAsyncErrors(async (req, res, next) => {
  try {
    let homeBanner = await HomeBanner.findById(req.params.id);
    if (!homeBanner) {
      return res.status(500).json({
        success: false,
        message: "homeBanner not found",
      });
    }
    await homeBanner.remove();
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error: error,
    });
  }
});
