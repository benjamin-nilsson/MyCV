const menu = document.getElementById("menu");
const collapsible = document.querySelectorAll(".collapsible");
const openMenu = document.getElementById("openMenu");
const hideMenu = document.getElementById("hideMenu");
const main = document.getElementById("main");
const nav = document.getElementsByClassName(".nav");

/**
 * Makes the menu collapse and come forth.
 */
hideMenu.addEventListener("click", function () {
  openMenu.style.visibility = "visible";
  hideMenu.style.visibility = "hidden";
  menu.style.height = "0";
  menu.style.zIndex = "0";
  menu.style.width = "0";
  nav.style.height = "0vh";
  main.style.visibility = "visible";
  collapsible.forEach((item) => {
    item.classList.toggle("collapsible--expanded");
  });
});

openMenu.addEventListener("click", function () {
  openMenu.style.visibility = "hidden";
  hideMenu.style.visibility = "visible";
  menu.style.height = "100%";
  menu.style.zIndex = "1000";
  menu.style.width = "100vw";
  menu.style.visibility = "visible";
  nav.style.height = "100vh";
  main.style.visibility = "hidden";
  collapsible.forEach((item) => {
    item.classList.toggle("collapsible--expanded");
  });
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    openMenu.style.visibility = "hidden";
    menu.style.height = "100%";
    menu.style.width = "120px";
    menu.style.zIndex = "1000";
    menu.style.visibility = "visible";
  } else if (window.innerWidth < 768) {
    openMenu.style.visibility = "visible";
    openMenu.style.zIndex = "1001";
    hideMenu.style.visibility = "visible";
    menu.style.width = "100vw";
    menu.style.visibility = "hidden";
  }
});
