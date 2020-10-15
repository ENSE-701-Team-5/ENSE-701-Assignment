const { mongoose } = require("../app");
const Schema = mongoose.Schema;
const GeneralUser = require("./User").schema;

const reviewSchema = new Schema({
  user: {
    type: GeneralUser,
  },
  rating: {
    type: Number,
  },
  review: {
    type: String,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
