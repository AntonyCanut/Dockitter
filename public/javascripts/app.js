$(document).ready(function() {
  String.prototype.replaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
  }
  test = test.replaceAll("\"", "\'")
  test = test.replaceAll('&quot;', '\'');
  test = test.replaceAll('\n', '');
  // var data = JSON.parse(test);
});
