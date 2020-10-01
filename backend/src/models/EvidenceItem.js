const { mongoose } = require("../app");
const Schema = mongoose.Schema;

const evidenceItemSchema = new Schema({
  outcome: {
    type: String,
    required: true,
  },
  context: {
    type: String,
    required: true,
  },
  results: {
    type: String,
    required: true,
  },
  confidenceRating: {
    type: Number,
  },
  implementationIntegrity: {
    type: String,
  },
});
module.exports = mongoose.model("EvidenceItem", evidenceItemSchema);
