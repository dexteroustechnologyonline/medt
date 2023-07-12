const mongoose = require("mongoose");

const categoryBanner = new mongoose.Schema({
  name: {
    type: String,
  },

  slugUrl: {
    type: String,
  },

  websiteSlider: {
    public_id: String,
    url: String,
  },

  mobileSlider: {
    public_id: String,
    url: String,
  },
    supercategoryid: {
    type: mongoose.Schema.ObjectId,
    //  required: [true, "supercategoryid Require"],
    ref: "Supercategory",
  },
  supercategory: {
    name: String,
    // required: [true, "Please enter supercategory name"]
  },
  categoryid: {
    type: mongoose.Schema.ObjectId,
     required: [true, "categoryid Require"],
    ref: "category"
  },
  category:
  {
    type: String,
    required: [true, "Please enter category name"]
  },


  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CategoryBanner", categoryBanner);
