function toggleMenu() {
  var x = document.getElementsByClassName("nav-links");
  if (x[0].style.display === "grid") {
    x[0].style.display = "none";
  } else {
    x[0].style.display = "grid";
  }
}