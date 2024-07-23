const toggle_button = document.querySelector(".toggle_button");

toggle_button.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});