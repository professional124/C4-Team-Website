// client.js

// reCAPTCHA site key
const RECAPTCHA_SITE_KEY = '6LeWhmErAAAAAMHNcFq-vmAaAPBWN1c69Ts2iKQ0';

// Load reCAPTCHA v2 script dynamically if not already loaded
function loadRecaptcha() {
  if (!document.getElementById('recaptcha-script')) {
    const script = document.createElement('script');
    script.id = 'recaptcha-script';
    script.src = `https://www.google.com/recaptcha/api.js`;
    document.head.appendChild(script);
// assets/js/main.js

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
  if (AOS) {
    AOS.init({
      once: true, // animate only once when scrolling down
      duration: 600,
      easing: 'ease-in-out',
    });
  }
}
loadRecaptcha();

// Helper to display messages
function showMessage(elem, msg, isError = false) {
  elem.textContent = msg;
  elem.style.color = isError ? 'red' : 'green';
}

// Join form submission
const joinForm = document.getElementById('join-form');
if (joinForm) {
  joinForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const messageElem = document.getElementById('join-message');
    showMessage(messageElem, '');

    // Get reCAPTCHA response token
    const token = grecaptcha.getResponse();
    if (!token) {
      showMessage(messageElem, 'Please complete the reCAPTCHA', true);
      return;
    }

    // Get form values
    const racerProfile = joinForm.elements['racerProfile'].value.trim();
    if (!racerProfile) {
      showMessage(messageElem, 'Please enter your Nitro Type profile link', true);
      return;
    }

    try {
      const res = await fetch('https://c4-form-backend.onrender.com/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, racerProfile }),
      });

      const data = await res.json();

      if (data.success) {
        showMessage(messageElem, 'Application submitted successfully!');
        joinForm.reset();
        grecaptcha.reset();
  // Sticky header on scroll
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        showMessage(messageElem, data.message || 'Submission failed, try again.', true);
        grecaptcha.reset();
        header.classList.remove('sticky');
      }
    } catch (err) {
      showMessage(messageElem, 'Error submitting form. Please try again later.', true);
      grecaptcha.reset();
    }
  });
}

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const messageElem = document.getElementById('contact-message');
    showMessage(messageElem, '');

    const token = grecaptcha.getResponse();
    if (!token) {
      showMessage(messageElem, 'Please complete the reCAPTCHA', true);
      return;
    }

    const username = contactForm.elements['username'].value.trim();
    const email = contactForm.elements['email'].value.trim();
    const message = contactForm.elements['message'].value.trim();

    if (!username || !email || !message) {
      showMessage(messageElem, 'Please fill all the fields', true);
      return;
    }

    try {
      const res = await fetch('https://c4-form-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, username, email, message }),
      });

      const data = await res.json();
    });
  }

      if (data.success) {
        showMessage(messageElem, 'Message sent successfully!');
        contactForm.reset();
        grecaptcha.reset();
      } else {
        showMessage(messageElem, data.message || 'Submission failed, try again.', true);
        grecaptcha.reset();
  // Smooth scrolling for nav links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {
      showMessage(messageElem, 'Error submitting form. Please try again later.', true);
      grecaptcha.reset();
    }
    });
  });
}

  // Mobile menu toggle (optional)
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-links');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('nav-open');
      navToggle.classList.toggle('open');
    });
  }
});
