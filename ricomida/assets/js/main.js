$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();

  $("#enviar").click(function () {
    alert("El correo fue enviado.....");
  });

  $(".underline").dblclick(function () {
    $(this).css({
      color: "red",
    });
  });
});
