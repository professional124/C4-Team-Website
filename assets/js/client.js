// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for nav links with hash (#)
  const navLinks = document.querySelectorAll('nav a[href^="#"], nav a:not([href^="http"])');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Animate counters on homepage features
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = target / 200; // speed factor
      if (count < target) {
        counter.innerText = Math.ceil(count + increment).toLocaleString();
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCount();
  });

  // Add hover subtle movement to .join-box (index.html)
  const joinBoxes = document.querySelectorAll('.join-box');
  joinBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      box.style.transform = 'translateY(-5px)';
      box.style.boxShadow = '0 0 12px #3df4e0, 0 0 20px #15babb';
    });
    box.addEventListener('mouseleave', () => {
      box.style.transform = 'translateY(0)';
      box.style.boxShadow = 'none';
    });
  });

  // Button hover glow effect for all buttons with class join-btn or nav links
  const buttons = document.querySelectorAll('.join-btn, nav a');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.boxShadow = '0 0 8px #0ff, 0 0 15px #0ff';
      btn.style.transition = 'box-shadow 0.3s ease-in-out';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.boxShadow = 'none';
    });
  });

  // Fade-in effect for elements with class fade-in on scroll
  const fadeEls = document.querySelectorAll('.fade-in');
  const fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => {
    fadeInObserver.observe(el);
  });

  // Simple form validation & friendly feedback for join and contact forms
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault(); // Prevent actual submission for demo

      let valid = true;
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        if (!input.checkValidity()) {
          valid = false;
          input.classList.add('input-error');
        } else {
          input.classList.remove('input-error');
        }
      });

      if (valid) {
        alert('Thanks for your submission! We will get back to you soon.');
        form.reset();
      } else {
        alert('Please fill out all fields correctly.');
      }
    });
  });

  // Optional: Add focus/blur styling to inputs for better UX
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.outline = '2px solid #0ff';
      input.style.boxShadow = '0 0 8px #0ff';
    });
    input.addEventListener('blur', () => {
      input.style.outline = '';
      input.style.boxShadow = '';
    });
  });
});
