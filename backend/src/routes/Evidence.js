const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.send({"test" : 1});
});

router.get("/:evidenceID", (req, res) => {
  return res.send({"test" : req.params.evidenceID});
});

module.exports = router;
