const { mongoose } = require("../Database");
const Evidence = require("./Evidence");
const Schema = mongoose.Schema
const articleSchema = Evidence.discriminator(
  "Article",
  new Schema({
    journal: {
      type: String,
    },
    year: {
      type: Number,
    },
    volume: {
      type: Number,
    },
    pages: {
      type: String,
    }
  })
);

module.exports = articleSchema;
