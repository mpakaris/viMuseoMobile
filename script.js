function toggleMenu() {
  var x = document.getElementsByClassName("nav-links");
  if (x[0].style.display === "block") {
    x[0].style.display = "none";
  } else {
    x[0].style.display = "block";
  }
}