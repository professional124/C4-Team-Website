// AOS Initialization
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
  });
});

// Example Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    contactForm.reset();
  });
}

// Optional: Add smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // GSAP animations on load
window.addEventListener('load', () => {
  gsap.from(".logo", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
  gsap.from(".main-nav a", {
    duration: 1,
    x: 100,
    opacity: 0,
    stagger: 0.1,
    delay: 0.5,
    ease: "power2.out"
  });
});


