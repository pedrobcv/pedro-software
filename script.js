/* La página funciona sin JavaScript. Solo mejora el enfoque al usar enlaces internos. */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (!target || target === document.getElementById('contenido')) return;
    const heading = target.querySelector('h2');
    if (!heading) return;
    heading.setAttribute('tabindex', '-1');
    heading.focus({preventScroll: true});
  });
});
