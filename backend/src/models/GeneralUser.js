const { mongoose } = require("../app");
const Schema = mongoose.Schema;

const generalUserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  auth: {
    type: String,
    select: false,
    required: false,
  },
});
module.exports = mongoose.model("GeneralUser", generalUserSchema);
