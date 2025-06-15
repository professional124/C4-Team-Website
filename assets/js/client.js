document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('[data-stat]');
  counters.forEach(counter => {
    const end = parseInt(counter.getAttribute('data-stat'));
    let current = 0;
    const step = () => {
      current += Math.ceil(end / 50);
      if (current >= end) {
        counter.textContent = end;
      } else {
        counter.textContent = current;
        requestAnimationFrame(step);
      }
    };
    step();
  });
});
