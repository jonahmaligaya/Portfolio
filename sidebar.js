const togglebutton = document.querySelector(".togglebutton");

togglebutton.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});