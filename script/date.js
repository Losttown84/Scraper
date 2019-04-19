var date = function() {
  var newDate = new Date();
  var format = "";

  format += (d.getMonth() + 1) + "_";

  format += d.getDate() + "_";

  format += d.getFullYear();

  return format;
};

module.exports = date;