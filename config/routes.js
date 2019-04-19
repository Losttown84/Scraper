var scrape = require("../scripts/scraped");
var headlineControl = require("../controllers/headlines");
var noteControl = require("../controllers/notes");

module.exports = function(router) {
  router.get("/", function(req, res) {
    res.render("home");
  });
  router.get("/saved", function(req, res) {
    res.render("saved");
  });
  router.get("/api/fetch", function(req, res) {
    headlineControl.fetch(function(err, docs) {
      if(!docs || docs.insertedCount === 0) {
        res.json({
          message: "Nothing new to see here. Check tomorrow"
        });
      }
      else {
        res.json({
          message: "New items added: " + docs.insertedCount
        });
      }
    });
  });
}