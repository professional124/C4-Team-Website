// ===== Chill 4 Eva | client.js =====

document.addEventListener('DOMContentLoaded', () => {
  console.log("Chill 4 Eva site loaded successfully 🚀");

  // Animate on scroll (if AOS is loaded)
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }

  // Auto-activate nav link based on page
  const navLinks = document.querySelectorAll('.navbar nav ul li a');
  const currentPage = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Show confirmation after join form submits (Formspree)
  const joinForm = document.querySelector('#join-form');
  const joinMessage = document.querySelector('#join-success');
  if (joinForm) {
    joinForm.addEventListener('submit', () => {
      setTimeout(() => {
        if (joinMessage) joinMessage.style.display = 'block';
      }, 500);
    });
  }

  // Add hover effect to team cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'translateY(-6px)';
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  // Smooth scroll to top (optional utility)
  const scrollTopBtn = document.querySelector('#scroll-to-top');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
