/* Fangs — Portafolio
   Activa las animaciones de Figma (Branding, Ilustración, Hablemos)
   cuando cada bloque entra en pantalla. Los tiempos están en css/styles.css (:root). */
(function () {
  var items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.25 });

  items.forEach(function (el) { io.observe(el); });
})();
