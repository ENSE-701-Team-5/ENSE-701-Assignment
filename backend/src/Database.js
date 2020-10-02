function connectToDatabase(username, password) {
  const mongoose = require("mongoose");
  const connectionURL =
    "mongodb+srv://" +
    username +
    ":" +
    password +
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

  return mongoose;
}

function searchEvidence(db, res, text) {
  var regex = new RegExp(text, "i"); // 'i' makes it case insensitive
  const collection = db.collection("Evidence");
  collection.find({ $or: [{ title: regex }] }).toArray((err, evidence) => {
    if (err) {
      evidence = { message: "An error occured" };
    } else if (evidence.length == 0) {
      evidence = { message: "No results found" };
    }
    res.send(evidence);
  });
}

async function submitEvidence(db, req) {
  var evidence = null;
  switch (req.body.type) {
    case "Article":
      console.log("test");
      evidence = await createArticleEvidence(req.body);
      break;
    case "Proceedings":
      evidence = await createProceedingsEvidence(req.body);
      break
    case "Book":
      evidence = await createBookEvidence(req.body);
      break;
    default:
      console.log(req.body);
  }
  const evidenceCollection = db.collection("Evidence");

  if (evidence != null) {
    console.log(evidence);
    await evidenceCollection.insertMany([evidence]);
  } else {
    console.log("Evidence not found.");
  }
}

async function createArticleEvidence(data) {
  const Article = require("./models/Article");
  return await Article.create(data);
}

async function createProceedingsEvidence(data) {
  const Proceedings = require("./models/Proceedings");
  return await Proceedings.create(data);
}

async function createBookEvidence(data) {
  const Book = require("./models/Book");
  return await Book.create(data);
}
module.exports = { searchEvidence, submitEvidence, connectToDatabase };
