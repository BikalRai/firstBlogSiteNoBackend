const navbar = document.querySelector("nav");
const navLinks = document.querySelector(".nav__links");

navbar.addEventListener("click", function (e) {
  const selection = e.target;

  if (selection.classList.contains("hamburger")) {
    navLinks.style.display = "flex";
    navLinks.style.height = "auto";
  }
  if (selection.classList.contains("close")) {
    navLinks.style.display = "none";
    navLinks.style.height = "0";
  }
});

window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 600) {
    navLinks.style.display = "flex";
    navLinks.style.height = "auto";
  } else {
    navLinks.style.display = "none";
    navLinks.style.height = "0";
  }
});
