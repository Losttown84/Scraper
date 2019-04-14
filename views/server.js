// Dependencies
var express = require("express");

// Set up port
var PORT = process.env.PORT || 3000;

// Initiate express app
var app = express();

// express router set up
var router = express.Router();

// public folder for directory
app.use(express.static(__dirname + "/public"));

// requests go here
app.use(router);

// i'm listening
app.listen(PORT, function() {
  console.log("Listening on port:", PORT);
});