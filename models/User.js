const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  google: {
    id: String,
    token: String
  },
  facebook: {
    id: String,
    token: String
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile"
  },
  certifications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cert"
    }
  ]
});

mongoose.model("users", UserSchema);
