const mongoose = require("mongoose");
const { Schema } = mongoose;

const CertSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  issued: Date,
  expiration: Date,
  image: String
});

mongoose.model("certs", CertSchema);
