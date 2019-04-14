// Dependencies
var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

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

// i'm listening
app.listen(PORT, function() {
  console.log("Listening on port:", PORT);
});