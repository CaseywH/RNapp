const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProfileSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  nursingSchool: {
    type: String,
    required: true
  },
  postGrad: String,
  employment: []
});

mongoose.model("profile", ProfileSchema);
