// main.js
// This file contains all general JavaScript for the site
// Dark mode toggle logic removed as requested

document.addEventListener('DOMContentLoaded', () => {
  // Sticky header functionality
  const header = document.querySelector('header');
  const stickyOffset = header.offsetTop;

  function handleScroll() {
    if (window.pageYOffset > stickyOffset) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }

  window.addEventListener('scroll', handleScroll);

  // Optional: Form submission event handlers to validate and handle forms if needed
  const joinForm = document.getElementById('join-form');
  if (joinForm) {
    joinForm.addEventListener('submit', (e) => {
      // Example: Add any client-side validation here if needed
      // For now, let default browser validation handle it
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // Example: Add any client-side validation here if needed
    });
  }
});
