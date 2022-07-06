$(document).ready(function () {
  console.log("first");
  $("button").click(function () {
    $("#p-1 ,#p-2, #sp-1, #sp-2").css("background-color", "yellow");
    $("#p-1 ,#p-2, #sp-1, #sp-2").css("border", "7px dashed #59A3D5");
  });
});
