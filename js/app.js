const slides = [...document.querySelectorAll('.slide')];
const dots = [...document.querySelectorAll('.dots a')];

// Resalta el punto de navegación de la diapositiva que se está viendo.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const index = slides.indexOf(entry.target);
    dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
  });
}, { threshold: 0.6 });

slides.forEach((slide) => observer.observe(slide));

// Oculta la imagen si todavía no existe y mantiene el mensaje de reemplazo visible.
document.querySelectorAll('.image-frame img').forEach((image) => {
  image.addEventListener('error', () => image.style.display = 'none');
});

// Anima las tarjetas de evidencia (Parcial 1 y Parcial 2) cuando entran en pantalla.
const evidenceCards = [...document.querySelectorAll('.evidence-card')];
if (evidenceCards.length) {
  const evidenceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      evidenceObserver.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  evidenceCards.forEach((card) => evidenceObserver.observe(card));
}
