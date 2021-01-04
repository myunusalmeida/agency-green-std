// MENU SHOW HIDDEN
const navMenu    = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu  = document.getElementById('nav-close'),
      navLink    = document.querySelectorAll('.nav-link');

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

function linkAction() {
    navMenu.classList.remove('active');
}

navLink.forEach(n => n.addEventListener('click', linkAction));
