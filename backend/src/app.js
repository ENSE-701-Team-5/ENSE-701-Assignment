const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: true}));

const PORT = process.env.PORT || 5000;

const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));
app.use
if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("../frontend/build"));

  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

router = express.Router();
router.use("/evidence", require("./routes/Evidence"));
router.use("/search", require("./routes/Search"));
router.use("/submit", require("./routes/Submit"));
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});


