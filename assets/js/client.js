document.addEventListener("DOMContentLoaded", () => {
  // Animated counters
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const speed = 200;

      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  // Join form submission
  const joinForm = document.getElementById('joinForm');
  if (joinForm) {
    joinForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const link = joinForm.ntlink.value;
      await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        body: JSON.stringify({ link }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('Application sent!');
    });
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = contactForm.email.value;
      const message = contactForm.message.value;
      await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        body: JSON.stringify({ email, message }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('Message sent!');
    });
  }
});
