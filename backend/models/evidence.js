const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const evidenceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: false,
  },
  journal: {
    type: String,
    required: false,
  },
  year: {
    type: Number,
    required: false,
  },
  volume: {
    type: Number,
    required: false,
  },
  number: {
    type: Number,
    required: false,
  },
  pages: {
    type: String,
    required: false,
  },
  month: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model("Evidence", userSchema, "Evidence");
