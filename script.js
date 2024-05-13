const togglenav = document.querySelector(".toggle-btn");

togglenav.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});