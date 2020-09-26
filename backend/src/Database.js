const {
  testPassword,
  testUsername,
  adminUsername,
  adminPassword,
} = require("../../config");
const mongoose = require("mongoose");
const connectionURL =
  "mongodb+srv://" +
  adminUsername +
  ":" +
  adminPassword +
  "@seer.qz7vq.mongodb.net/SEER?retryWrites=true&w=majority";
mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", async function () {
  console.log("Connected!");
});

async function searchEvidence(res, text) {
  var regex = new RegExp(text, "i"); // 'i' makes it case insensitive
  const collection = connection.db.collection("Evidence");

  collection.find({ $or: [{ title: regex }] }).toArray((err, evidence) => {
    if (err) {
      evidence = { message: "An error occured" };
    } else if (evidence.length == 0) {
      evidence = { message: "No results found" };
    }
    res.send(evidence);
  });
}

async function submitEvidence(req, res) {
  var evidence = null;
  switch (req.body.type) {
    case "Article":
      evidence = await createArticleEvidence(req.body);
  }
  const evidenceCollection = connection.db.collection("Evidence");

  if (evidence != null) {
    await evidenceCollection.insertMany([evidence]);
  } else {
    console.log("Evidence not found.");
  }
}

async function createArticleEvidence(data) {
  const Article = require("./models/Article");
  return await Article.create(data);
}

module.exports = { mongoose, connection, searchEvidence, submitEvidence };
