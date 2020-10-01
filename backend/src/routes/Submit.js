const express = require("express");
const router = express.Router();
const { submitEvidence } = require("../Database");

router.post("/", (req, res) => {
  const { connection } = require("../app");
  submitEvidence(connection, req);
});

module.exports = router;