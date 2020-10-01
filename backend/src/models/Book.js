const { mongoose } = require("../app");
const Evidence = require("./Evidence");
const Schema = mongoose.Schema
const bookSchema = Evidence.discriminator(
  "Book",
  new Schema({
    publisher: {
      type: String,
    }
  })
);

module.exports = bookSchema;
