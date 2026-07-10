const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
        menuIcon.classList.toggle('bx-menu');
    });

    document.querySelectorAll('.navbar a').forEach((link) => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.add('bx-menu');
            menuIcon.classList.remove('bx-x');
        });
    });
}