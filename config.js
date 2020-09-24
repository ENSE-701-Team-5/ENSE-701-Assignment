const dotenv = require("dotenv");
dotenv.config({path: __dirname + '/.env'});
module.exports = {
  testUsername: process.env.TEST_USERNAME,
  testPassword: process.env.TEST_PASSWORD,
  adminUsername: process.env.ADMIN_USERNAME,
  adminPassword: process.env.ADMIN_PASSWORD
};
