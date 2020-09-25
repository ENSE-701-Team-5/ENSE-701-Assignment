const express = require("express");
const router = express.Router();
const { searchEvidence } = require("../Database");

router.get("/:query", (req, res) => {
  searchEvidence(res, req.params.query);  
});

module.exports = router;
