const menuToggle = document.querySelector(".menuToggle");
const navbar = document.querySelector(".navBar");
const menuCollapse = document.querySelector(".menuCollapse");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("");
});
