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
  }
});

mongoose.model("certs", CertSchema);
