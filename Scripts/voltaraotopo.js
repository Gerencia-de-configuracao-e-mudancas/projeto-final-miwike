let button = document.getElementById("voltaraotopo");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
});
button.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});