const express = require("express");
const router = express.Router();
const { getAnalystQueue } = require("../Database");

router.get("/", (req, res) => {
  const { connection } = require("../app");
  getAnalystQueue(connection.db, res);  
});

module.exports = router;
