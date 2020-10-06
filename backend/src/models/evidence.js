const { mongoose } = require("../app");
const Schema = mongoose.Schema;
const Review = require("./Review").schema;
const ResearchDesign = require("./ResearchDesign").schema;

const evidenceSchema = new Schema({
  title: {
    type: String,
  },
  authors: {
    type: [String],
  },
  year: {
    type: Number,
  },
  month: {
    type: String,
  },
  doi: {
    type: String,
  },
  file: {
    data: Buffer,
    contextType: String
  },
  submittedDate: {
    type: Date,
  },
  reviews: {
    type: [Review],
  },
  researchDesign: {
    type: ResearchDesign,
  },
  avgRating: {
    type: Number,
  },
});
module.exports = mongoose.model("Evidence", evidenceSchema);
