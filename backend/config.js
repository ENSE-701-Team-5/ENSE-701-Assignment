const dotenv = require("dotenv");
dotenv.config({path: __dirname + '/.env'});
module.exports = {
  testUsername: process.env.TEST_USERNAME,
  testPassword: process.env.TEST_PASSWORD
};
