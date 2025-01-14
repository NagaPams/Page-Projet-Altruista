document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por contactarnos! Responderemos a tu mensaje pronto.');
    this.reset();
});
