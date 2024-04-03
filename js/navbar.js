document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.header-navbar');

    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
