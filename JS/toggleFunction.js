function toggleDisplay(i) {
  var x = document.getElementById(i);
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
