/* selectors */
let nav = document.querySelector("nav");
let hamburgerMenu = nav.querySelector(".hamburgerMenu");
let navMenu = hamburgerMenu.nextElementSibling;
let menuLinks = navMenu.querySelectorAll("li");
let anchor = [];

/* listeners */
window.addEventListener("scroll", checkScroll);
window.addEventListener("resize", hideMenu);
hamburgerMenu.addEventListener("click", showMenu);

function initialiseLinks() {
  menuLinks.forEach((li) => {
    li.addEventListener("click", activeLink);
    let idName = li.children[0].getAttribute("href").replace("#", "");
    anchor.push({
      anchorName: idName,
      offTop: document.getElementById(idName).offsetTop,
      offHeight: document.getElementById(idName).offsetHeight,
    });
  });
}

/* change nav on scroll */
function checkScroll() {
  let scrY = window.scrollY;

  hideMenu();
  if (scrY > 10) {
    nav.className = "scrolled";
  } else {
    nav.className = "";
  }
  chekPosition(scrY);
}

/* check position and highlight link */
function chekPosition(posY) {
  let currntSection = anchor.filter((el) => {
    return el.offTop - 15 < posY && posY <= el.offTop + el.offHeight;
  });
  resetActiveLink();
  let currentLi = document.querySelector(
    `[href="#${currntSection[0].anchorName}"]`
  ).parentElement;
  currentLi.className = "active";
}

/* show hamburger menu */
function showMenu() {
  navMenu.classList.toggle("showMenu");
}
/* hide hamburger menu */
function hideMenu() {
  navMenu.classList.remove("showMenu");
  initialiseLinks();
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
