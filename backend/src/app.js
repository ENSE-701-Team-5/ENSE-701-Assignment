const path = require("path");
const express = require("express");
const app = express();
var cors = require('cors')
const bodyParser = require("body-parser");
const { connectToDatabase } = require("./Database");
//Currently giving admin rights in-order to submit evidence. They do not have full control over the database though
const { adminUsername, adminPassword, testUsername, testPassword } = require("../../config");

app.use(cors())
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

const PORT = process.env.PORT || 5000;

const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("../frontend/build"));

  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

var router = express.Router();
router.use("/evidence", require("./routes/Evidence"));
router.use("/search", require("./routes/Search"));
router.use("/submit", require("./routes/Submit"));
router.use("/register", require("./routes/Register"));
router.use("/moderate", require("./routes/Moderate"));
router.use("/analyse", require("./routes/Analyse"));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

const mongoose = connectToDatabase(adminUsername, adminPassword);
const connection = mongoose.connection;
module.exports = { mongoose, connection };