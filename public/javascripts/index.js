$(document).ready(function() {
  viewModel.tweet = true;
  var html = jade.render($("#panel-card-div").text())
  $("#container-card").html(html);
});
