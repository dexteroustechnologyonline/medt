const mongoose = require("mongoose");

const homeBanner = new mongoose.Schema({
  name: {
    type: String,

    // required: [true, "Please enter slider name"],
  },
  subtitle: {
    type: String,
  },

  title: {
    type: String,
  },

  url: {
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

  categoryTagList: [
    {
      tagName: {
        type: String,
        required:true
      },
      tagId: {
        type: mongoose.Schema.ObjectId,
        ref: "CategoryTag",
      },
    },
  ],

  user: {
    type: String,
    default: "",
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("HomeBanner", homeBanner);
