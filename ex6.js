const API_URL = "https://62ac07b69fa81d00a7a869f3.mockapi.io/api/todoList";

$(document).ready(function () {
  const table = $("table tbody");
  $("#btn-load-users").click(function () {
    $.ajax({ url: API_URL }).done(function (users) {
      $.each(users, function (index, user) {
        table.append(
          `<tr class="table-row"><td>${user.name}</td>
        <td>${user.lastname}</td><td>${user.age}</td>
        </tr>`
        );
      });
    });
  });
});

// const API_URL = "https://62a4d0d547e6e4006398b48b.mockapi.io/api/cities";

// $(document).ready(function () {
//   const table = $("table tbody");
//   $("#btn-load-users").click(function () {
//     $.ajax({ url: "https://api.github.com/users" }).done(function (users) {
//       $.each(users, function (index, user) {
//         table.append(
//           `<tr class="table-row" data-username=${user.login}><td>${user.id}</td><td>${user.login}</td><td><a href=${user.html_url} target=_blank>${user.html_url}</a></td><td><img height='50px' width='50px' class='rounded-circle' src=${user.avatar_url}/></td></tr>`
//         );
//       });
//     });
//   });
// });
