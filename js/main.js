/* selectors */
let nav = document.querySelector("nav");
let hamburgerMenu = nav.querySelector(".hamburgerMenu");
let navMenu = hamburgerMenu.nextElementSibling;
let menuLinks = navMenu.querySelectorAll("li");
let allID = [];

/* listeners */
window.addEventListener("scroll", changeNav);
window.addEventListener("resize", hideMenu);
hamburgerMenu.addEventListener("click", showMenu);
menuLinks.forEach((li) => {
  li.addEventListener("click", activeLink);
  allID.push(li.children[0]);
});

/* change nav on scroll */
function changeNav() {
  let scrY = window.scrollY;

  hideMenu();
  if (scrY > 10) {
    nav.className = "scrolled";
  } else {
    nav.className = "";
  }

  if (scrY > 915) {
  }
}

/* show hamburger menu */
function showMenu() {
  navMenu.classList.toggle("showMenu");
}
/* hide hamburger menu */
function hideMenu() {
  navMenu.classList.remove("showMenu");
}

/* remove active class on li */
function resetActiveLink() {
  menuLinks.forEach((li) => {
    li.classList.remove("active");
  });
}

/* add active class on li */
function activeLink() {
  resetActiveLink();
  this.className = "active";
}
