const express = require("express");
const router = express.Router();
const { submitEvidence } = require("../Database");

router.post("/", (req, res) => {
  submitEvidence(req, res);
});

module.exports = router;