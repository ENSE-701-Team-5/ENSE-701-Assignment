const {testPassword, testUsername} =  require('../config')
const mongoose = require('mongoose');
const connection = "mongodb+srv://" + testUsername +":" + testPassword + "@seer.qz7vq.mongodb.net/SEER?retryWrites=true&w=majority";
console.log(connection)
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));