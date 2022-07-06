$(document).ready(function () {
  const table = $("table tbody");
  $("#newTodo").click(createTodo);
  function createTodo() {
    var str = $(".form-control").val();
    table.append(
      `<tr class="table-warning d-block w-75" id="item"><td>${str}</td><td><button>X</button></td> </tr>`
    );
  }

  $("table").on("click", "button", function () {
    $(this).closest("tr").remove();
  });
});
