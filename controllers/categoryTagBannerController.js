const CategoryTagBanner = require("../models/categoryTagBannerModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

exports.createCategoryTagBanner = async (req, res, next) => {
  try {
    const categorytagBanner = await CategoryTagBanner.create(req.body);
    res.status(201).json({
      success: true,
      categorytagBanner,
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

exports.getAllCategoryTagBanner = catchAsyncErrors(async (req, res) => {
  try {
    const categorytagBanners = await CategoryTagBanner.find();
    res.status(200).json({
      success: true,
      categorytagBanners,
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
        width: 75,
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
      error:error
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error:error
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error:error
    });
  }
});

exports.UploadMobImage = catchAsyncErrors(async (req, res, next) => {
  try {
    
    const mobileImage = await cloudinary.v2.uploader.upload(
      req.body.mobileImage,
      {
        folder: "Product/Mobile",
        width: 75,
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
      error:error
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error:error
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error:error
    });
  }
});

exports.UpdateCategoryTagBanner = catchAsyncErrors(async (req, res, next) => {
  try {
    let categorytagBanner = await CategoryTagBanner.findById(req.params.id);
    if (!categorytagBanner) {
      return res.status(500).json({
        success: false,
        message: "categorytagBanner not found",
      });
    }
    categorytagBanner = await categorytagBanner.findByIdAndUpdate(
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
      categorytagBanner: categorytagBanner,
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

exports.DeleteCategoryTagBanner = catchAsyncErrors(async (req, res, next) => {
  try {
    let categorytagBanner = await CategoryTagBanner.findById(req.params.id);
    if (!categorytagBanner) {
      return res.status(500).json({
        success: false,
        message: "categorytagBanner not found",
      });
    }
    await categorytagBanner.remove();
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
