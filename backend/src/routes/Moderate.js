const express = require("express");
const router = express.Router();
const { getModerationQueue } = require("../Database");

router.get("/", (req, res) => {
  const { connection } = require("../app");
  getModerationQueue(connection.db, res);  
});

module.exports = router;
