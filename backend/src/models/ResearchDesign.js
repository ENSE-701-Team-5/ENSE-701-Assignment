const { mongoose } = require("../Database");
const Schema = mongoose.Schema;

const researchDesignSchema = new Schema({
  researchMethod: {
    type: [String],
    required: true,
  },
  researchMetric: {
    type: String,
    required: true,
  },
  researchParticipants: {
    type: [String],
    required: true,
  },
});
module.exports = mongoose.model("ResearchDesign", researchDesignSchema);
