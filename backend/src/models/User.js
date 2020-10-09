const { mongoose } = require("../app");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
  userAffiliation : {
    type: String,
    required: true
  },
  role : {
    type: String,
    required: true
  },
  gender  : {
    type: String,
    required: false
  },
  age : {
    type: Number,
    required: false
  }
});
module.exports = mongoose.model("User", UserSchema);
