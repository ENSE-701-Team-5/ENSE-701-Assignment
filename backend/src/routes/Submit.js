const express = require("express");
const router = express.Router();
const { sendEvidence, removeEvidenceByID } = require("../Database");

router.post("/", (req, res) => {
  const { connection } = require("../app");
  console.log("submission")
  sendEvidence(connection, req, "ModerationQueue");
});

router.post("/accept", (req, res) => {
  const { connection } = require("../app");
  removeEvidenceByID(req.body._id, connection.db, "ModerationQueue");
  req.body._id = undefined;
  sendEvidence(connection, req, "AnalystQueue");
});

router.post("/reject", (req, res) => {
  const { connection } = require("../app");
  removeEvidenceByID(req.body._id, connection.db, "ModerationQueue");
  req.body._id = undefined;
  sendEvidence(connection, req, "RejectedEvidence");
});

module.exports = router;