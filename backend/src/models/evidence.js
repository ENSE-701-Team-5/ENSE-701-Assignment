const { mongoose } = require("../Database");
const Schema = mongoose.Schema;
const Review = require("./Review").schema;
const ResearchDesign = require("./ResearchDesign").schema;

const evidenceSchema = new Schema({
  title: {
    type: String,
  },
  year: {
    type : Number
  },
  doi: {
    type : String
  },
  authors: {
    type: [String],
  },
  reviews: {
    type: [Review],
  },
  researchDesign: {
    type: ResearchDesign,
  },
  avgRating: {
    type: Number
  }
});
module.exports = mongoose.model("Evidence", evidenceSchema);
