$(document).ready(function() {
  console.log(viewModel)
  viewModel.tweet = true;
  var html = jade.render($("#panel-card-div").text(), {viewModel: viewModel})
  console.log(html);
  $("#container-card").html(html);
});
