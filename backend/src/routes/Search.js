const express = require("express");
const router = express.Router();
const { searchEvidence } = require("../Database");

router.get("/:query", (req, res) => {
  console.log(req.params.query);
  searchEvidence(res, req.params.query);  
});

module.exports = router;
