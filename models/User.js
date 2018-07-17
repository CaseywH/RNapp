const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleID: String,
  facebook: {
    id: String,
    token: String
  }
});

mongoose.model("users", UserSchema);
