var menuBtn = document.querySelector('.menu-btn');
var sideMenu = document.querySelector('.nav-links');
var mainNav = document.querySelector('.main-nav');
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    sideMenu.classList.toggle('active-menu');
    menuBtn.classList.toggle('changeIcon');
}
