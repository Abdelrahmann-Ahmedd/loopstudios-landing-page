const menuIcon = document.querySelector('.menuIcon');
const nav = document.querySelector('nav');
const navLeft = document.querySelector('nav .leftSide');
const navRight = document.querySelector('nav .rightSide');
const navLinks = document.querySelector('nav .rightSide ul');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('nav');
    navLeft.classList.toggle('leftSide');
    navLeft.classList.toggle('nav-leftSide');
    navRight.classList.toggle('rightSide');
    navRight.classList.toggle('nav-rightSide');
    navLinks.classList.toggle('nav-rightSide-ul');
});