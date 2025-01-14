document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por contactarnos! Responderemos a tu mensaje pronto.');
    this.reset();
});

// Ajuste de diseño responsivo dinámico
window.addEventListener('resize', function() {
    const nav = document.querySelector('nav ul');
    if (window.innerWidth < 768) {
        nav.style.flexDirection = 'column';
    } else {
        nav.style.flexDirection = 'row';
    }
});
