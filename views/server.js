// Dependencies
var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Set up port
var PORT = process.env.PORT || 3000;

// Initiate express app
var app = express();

// express router set up
var router = express.Router();

// public folder for directory
app.use(express.static(__dirname + "/public"));

// connect handlebars to express
app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// bodyParser for app
app.use(bodyParser.urlencoded({
  extended: false
}))

// requests go here
app.use(router);

// use database deployed otherwise monghoHeadlines db
var db = process.env.MONGOD_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(db, function(error) {
  if(error) {
    console.log(error);
  }
  else {
    console.log("mongoose connection successful");
  }
});

// i'm listening
app.listen(PORT, function() {
  console.log("Listening on port:", PORT);
});