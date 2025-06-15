// client.js - Misc client-side enhancements

// Smooth scroll for anchor links (redundant if CSS scroll-behavior is supported, but for wider support)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form validation example for join form (only racer link required)
const joinForm = document.getElementById('join-form');
if(joinForm) {
  joinForm.addEventListener('submit', e => {
    const racerInput = joinForm.querySelector('input[name="racer_link"]');
    if(!racerInput.value.trim()) {
      e.preventDefault();
      alert('Please enter your Nitro Type racer link.');
      racerInput.focus();
    }
  });
}

// Add active class to nav links based on current URL
const navLinks = document.querySelectorAll('.navbar nav ul li a');
navLinks.forEach(link => {
  if(link.href === window.location.href) {
    link.classList.add('active');
  }
});
