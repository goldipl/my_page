const hamburger = document.querySelector('.top .hamburger');
const mobileMenu = document.querySelector('.top nav');

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('close');
});