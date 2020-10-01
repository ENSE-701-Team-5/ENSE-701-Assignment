const { mongoose } = require("../app");
const Evidence = require("./Evidence");
const Schema = mongoose.Schema
const proceedingsSchema = Evidence.discriminator(
  "Proceedings",
  new Schema({
    publisher: {
      type: String,
    }
  })
);

module.exports = proceedingsSchema;
