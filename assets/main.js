window.onscroll = function () {
  stickyNavbar();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("bg-sky-blue");
    navbar.classList.add("shadow-white");
  } else {
    navbar.classList.remove("bg-sky-blue");
    navbar.classList.remove("shadow-white");
  }
}
