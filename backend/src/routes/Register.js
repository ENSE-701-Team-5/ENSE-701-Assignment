const express = require("express");
const router = express.Router();
const { registerUser } = require("../Database");

router.post("/", (req, res) => {
  const { connection } = require("../app");
  registerUser(connection.db, req);
});

module.exports = router;