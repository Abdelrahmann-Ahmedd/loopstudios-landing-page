var menuIcon = document.querySelector('.menuIcon');
var navRight = document.querySelector('nav .rightSide');
var nav = document.querySelector("nav")

menuIcon.addEventListener('click', () => {
    navRight.classList.toggle("hide");
    nav.classList.toggle("dark");
});