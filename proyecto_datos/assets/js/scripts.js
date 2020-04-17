$(document).ready(function () {
  $("#particular-btn").click((e) => {
    e.preventDefault();
    $("#name").attr("placeholder", "Nombre");
    $("#main-step").hide();
    $("#action-step").show();
  });

  $("#organization-btn").click((e) => {
    e.preventDefault();
    $("#name").attr("placeholder", "Nombre de la organización");
    $("#main-step").hide();
    $("#action-step").show();
  });

  $("#consult-btn").click((e) => {
    e.preventDefault();
    $("#action-step").hide();
    $("#consult-step").show();
  });

  $("#collaborate-btn").click((e) => {
    e.preventDefault();
    $("#action-step").hide();
    $("#collaborate-step").show();
  });

  $("#request-collaborate-btn").click((e) => {
    e.preventDefault();
    $("#collaborate-step").hide();
    $("#thanks-step").show();
  });

  $("#request-consult-btn").click((e) => {
    e.preventDefault();
    alert($("#data-type").val());
    alert($("#country").val());
    $("#consult-step").hide();
    $("#data-step").show();
  });
});
