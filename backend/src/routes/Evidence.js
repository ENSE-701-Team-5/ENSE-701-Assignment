const express = require("express");
const router = express.Router();

router.get("/:evidenceID", (req, res) => {
  return res.send({"test" : req.params.evidenceID});
});

module.exports = router;
