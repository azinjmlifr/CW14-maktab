$(document).ready(function () {
  $("button").click(function () {
    $("div").text($("form").serialize());
    console.log("first");
  });
});
