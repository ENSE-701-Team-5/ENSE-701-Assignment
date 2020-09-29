const express = require("express");
const router = express.Router();
const { searchEvidence} = require("../Database");

router.get("/:query", (req, res) => {
  const { connection } = require("../app");
  searchEvidence(connection.db, res, req.params.query);  
});

module.exports = router;
