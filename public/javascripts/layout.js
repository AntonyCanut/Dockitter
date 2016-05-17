$(document).ready(function() {
  String.prototype.replaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
  }
  viewModel = viewModel.replaceAll('\n', '');
  viewModel = JSON.parse(viewModel);
  viewModel.profile_image_url = viewModel.profile_image_url.replaceAll('_normal', '');
  var html = jade.render($("#header-jade").text())
  $("#header").html(html);
});
