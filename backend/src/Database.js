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

async function sendEvidence(db, req, collectionName, res) {
  var evidence = null;
  req.body._id = null;
  switch (req.body.type) {
    case "Article":
      evidence = await createArticleEvidence(req.body);
      break;
    case "Proceedings":
      evidence = await createProceedingsEvidence(req.body);
      break;
    case "Book":
      evidence = await createBookEvidence(req.body);
      break;
    default:
      console.log(req.body);
  }
  const collection = db.collection(collectionName);

  var response = { message: "Success!" };
  if (evidence != null) {
    await collection.insertMany([evidence]);
  } else {
    response = { message: "There was an error!" };
  }

  res.send(response);
}

async function getModerationQueue(db, res) {
  const moderationQueueCollection = db.collection("ModerationQueue");

  moderationQueueCollection.find({}).toArray(function (err, queue) {
    if (queue !== undefined) {
      res.send(queue);
    } else {
      res.send({ err: "There was an error in getting the moderation queue" });
    }
  });
}

async function getAnalystQueue(db, res) {
  const analystQueueCollection = db.collection("AnalystQueue");

  analystQueueCollection.find({}).toArray(function (err, queue) {
    if (queue !== undefined) {
      res.send(queue);
    } else {
      res.send({ err: "There was an error in getting the analyst queue" });
    }
  });
}

async function registerUser(db, req) {}

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

async function moveRecordToCollection(
  db,
  orginalCollectionName,
  newCollectionName,
  id,
  req,
  res
) {
  const orginalCollection = await db.collection(orginalCollectionName);
  var ObjectId = require("mongodb").ObjectID;
  var out = await orginalCollection.deleteOne({ _id: ObjectId(id) });

  if (out.deletedCount === 0) {
    res.send({message: "There was an error!"});
  } else {
    await sendEvidence(db, req, newCollectionName, res);
  }
}

module.exports = {
  searchEvidence,
  sendEvidence,
  connectToDatabase,
  registerUser,
  getModerationQueue,
  getAnalystQueue,
  moveRecordToCollection,
};
