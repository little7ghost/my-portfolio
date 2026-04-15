const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');
const navLinks = navbar ? navbar.querySelectorAll('a') : [];


function toggleNavbar() {
    if (!navbar) return;

    navbar.classList.toggle('active');
    navbar.style.display = navbar.classList.contains('active') ? 'flex' : '';
}

function closeNavbar() {
    if (!navbar) return;

    navbar.classList.remove('active');
    navbar.style.display = '';
}

// Toggle menu on hamburger click
if (mobileMenu && navbar) {
    mobileMenu.addEventListener('click', function () {
        toggleNavbar();
    });
}

// Close menu when a link is clicked
if (navLinks.length && navbar) {
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            closeNavbar();
        });
    });
}

// Close menu when clicking outside
document.addEventListener('click', function (event) {
    if (navbar && navbar.classList.contains('active') && !event.target.closest('#container')) {
        navbar.classList.remove('active');
    }
});
