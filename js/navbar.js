window.onscroll = function() {stickyNavbar()};

var navbar = document.querySelector("nav");
var heroSection = document.querySelector(".hero-section");

var sticky = heroSection.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}