// Form Submission Handler
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por contactarnos! Responderemos a tu mensaje pronto.');
    this.reset();
});

// Responsive Navigation Adjustment
window.addEventListener('resize', function() {
    const nav = document.querySelector('nav ul');
    if (window.innerWidth < 768) {
        nav.style.flexDirection = 'column';
    } else {
        nav.style.flexDirection = 'row';
    }
});

// Dynamic Menu Highlight (optional feature)
const menuLinks = document.querySelectorAll('nav ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Smooth Scroll (optional for single-page navigation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
