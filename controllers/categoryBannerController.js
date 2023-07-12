const CategoryBanner = require("../models/categoryBannerModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

exports.createCategoryBanner = async (req, res, next) => {
  try {
    const categoryBanner = await CategoryBanner.create(req.body);
    res.status(201).json({
      success: true,
      categoryBanner,
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

exports.getAllCategoryBanner = catchAsyncErrors(async (req, res) => {
  try {
    const categoryBanners = await CategoryBanner.find();
    res.status(200).json({
      success: true,
      categoryBanners,
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
        folder: "Product/CatBanner",
        width: 436,
        height: 224,
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
        folder: "Product/CatBanner",
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

exports.UpdateCategoryBanner = catchAsyncErrors(async (req, res, next) => {
  try {
    let categoryBanner = await CategoryBanner.findById(req.params.id);
    if (!categoryBanner) {
      return res.status(500).json({
        success: false,
        message: "categorytagBanner not found",
      });
    }
    categoryBanner = await categoryBanner.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        useFindAndModify: false,
        runValidators: true,
      }
    );
    res.status(200).json({
      success: true,
      categoryBanner: categoryBanner,
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

exports.DeleteCategoryBanner = catchAsyncErrors(async (req, res, next) => {
  try {
    let categoryBanner = await CategoryBanner.findById(req.params.id);
    if (!categoryBanner) {
      return res.status(500).json({
        success: false,
        message: "categoryBanner not found",
      });
    }
    await categoryBanner.remove();
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
