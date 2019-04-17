var request = require("request");
var cheerio = require("cheero");

var request = require("request");
var cheerio = require("cheerio");

var scrape = function (cb) {
  request("http://www.mlb.com", function(err, res, body) {
    var $ = cheerio.load(body);

    var articles = [];

    $(".mediawall__kicker").each(function(i, element))
  })
}