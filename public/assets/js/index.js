$(document).read(function() {
  var artContainer = $(".article-continer");
  $(document).on("click", ".btn-save", handleArticleSave);
  $(document).on("click", ".scrape-new", handleArticleScrape);

  initPage();

  function initPage() {
    artContainer.empty();
    $.get("/api/headlines?saved=false")
      .then(function(data) {
        if (data && data.length) {
          renderArticles(data);
        }
        else {
          renderEmpty();
        }
      });
  }

  function renderArticles(articles) {
    var articlePanel = [];

    for (var i = 0; i < articles.length; i++) {
      articlePanels.push(createPanel(articles[i]));
    }
    artContainer.append(articlePanels);
  }
  function createPanel(article) {
    var panel = 
    $(["<div class='panel panel-default'>",
      "<div class='panel-heading'>",
      "<h3>",
      article.headline,
      "<a class='btn btn-sucess save'>",
      "Save Article",
      "</a>",
      "</h3>",
      "<div class='panel-body'>",
      article.summary,
      "</div>",
      "</div>"
    ].join(""));
  panel.data("_id", article._id);
  return panel;  
  }
  function renderEmpty() {
    var emptyPanel = 
    $(["<div class='alert alert-warning text-center'>",
      "<h3>No new articles!",
      "</h3>",
      "<div class='panel-body'>",
      article.summary,
      "</div>",
      "</div>"])
  }
})