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
  router.get("/api/headlines", function(req, res) {
    var query = {};
    if (req.query.saved) {
      query = req.query;
    }
    headlineControl.get(query, function(data) {
      res.json(data);
    });
  });
  router.delete("/api/headlines/:id", function(req, res) {
    var query = {};
    query.id = req.params.id;
    headlineControl.delete(query, function(err, data) {
      res.json(data);
    });
  });
  router.patch("/api/headlines", function(req, res) {
    headlineControl.update(req.body, function(err, data) {
      res.json(data);
    });
  });
  router.get("/api/notes/:headline_id", function(req, res) {
    var query = {};
    if (req.params.headline_id) {
      query._id = req.params.headline_id;
    }
    noteControl.get(query, function (err, data) {
      res.json(data);
    });
  });
  router.post("api/notes", function(req, res) {
    noteControl.save(req.body, function(data) {
      res.json(data);
    });
  });
}