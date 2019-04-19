var request = require("request");
var cheerio = require("cheero");

var request = require("request");
var cheerio = require("cheerio");

var scrape = function (cb) {
  request("http://www.mlb.com", function(err, res, body) {
    var $ = cheerio.load(body);

    var articles = [];

    $(".mediawall__article-preview").each(function(i, element) {
      var head = $(this).children("mediawall__kicker").text().trim();
      var sum = $(this).children("mediawall__blurb").text().trim();

      if(head && sum) {
        var neatHead = head.replace(/(\r\n\|\n|\r|\t|\t|\s+)/gm, "").trim();
        var neatSum = sum.replace(/(\r\n\|\n|\r|\t|\t|\s+)/gm, "").trim();
        var data = {
          headline = neatHead,
          summary: neatSum
        };

        articles.push(datatoAdd);
      }
    })
    cb(articles);
  });
};

modules.export = scrape;