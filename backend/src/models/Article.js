const { mongoose } = require("../Database");
const Evidence = require("./Evidence");
const Schema = mongoose.Schema
const articleSchema = Evidence.discriminator(
  "Article",
  new Schema({
    authors: {
      type: [String],
    },
    journal: {
      type: String,
    },
    year: {
      type: Number,
    },
    month: {
      type: String,
    },
    volume: {
      type: Number,
    },
    pages: {
      type: String,
    },
  })
);

module.exports = articleSchema;
