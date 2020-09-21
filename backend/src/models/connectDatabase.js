const { testPassword, testUsername } = require("../config");
const mongoose = require("mongoose");
const connectionURL =
  "mongodb+srv://" +
  testUsername +
  ":" +
  testPassword +
  "@seer.qz7vq.mongodb.net/SEER?retryWrites=true&w=majority";
console.log(connectionURL);
mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});


export const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", function () {
  connection.db.collection("Evidence", function (err, collection) {
    collection.find({}).toArray(function (err, data) {
      console.log(data); // it will print your collection data
    });
  });
});
