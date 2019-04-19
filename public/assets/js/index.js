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
      articlePanel.push(createPanel(articles[i]));
    }
  }
})