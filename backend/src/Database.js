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
  const evidenceCollection = connection.db.collection("Evidence");
  // collection.find().toArray((err, evidence) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(evidence);
  // });


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
  console.log(res.params);
    // const Article = require("./models/Article");
  // const ResearchDesign = require("./models/ResearchDesign");

  // var researchDesign = await ResearchDesign.create({
  //   researchMethod: ["Case Study"],
  //   researchMetric: "Test",
  //   researchParticipants: ["Undergraduates"],
  // });

  // var article = await Article.create({
  //   authors: ["Dell", "New"],
  //   title: "Implications of Test-Driven Development A Pilot Study",
  //   year: 2003,
  //   pages: "1-2",
  //   month: "aug",
  //   researchDesign: researchDesign,
  // });
  // console.log(article);
  // await evidenceCollection.insertMany([article]);
}
mongoose.set('debug', true);
module.exports = { mongoose, connection, searchEvidence, submitEvidence };
