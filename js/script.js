const menuToggle = document.querySelector(".menuToggle");
const navbar = document.querySelector(".navBar");
const menuCollapse = document.querySelector(".menuCollapse");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("showMenu");
  if (navbar.classList.contains("showMenu")) {
    menuCollapse.style.maxHeight = menuCollapse.scrollHeight + "px";
    setTimeout(() => {
      menuCollapse.style.overflow = "visible";
    }, 300);
  } else {
    menuCollapse.style.maxHeight = "0px";
    menuCollapse.style.overflow = "hidden";
  }
});
