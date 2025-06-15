// Dark Mode Toggle with persistence in localStorage

const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

// Initialize theme from localStorage or system preference
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = 'Light Mode';
  } else if(savedTheme === 'light') {
    body.classList.remove('dark-mode');
    toggleBtn.textContent = 'Dark Mode';
  } else {
    // Default to system preference
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.add('dark-mode');
      toggleBtn.textContent = 'Light Mode';
    } else {
      toggleBtn.textContent = 'Dark Mode';
    }
  }
}
initTheme();

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if(body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = 'Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = 'Dark Mode';
  }
});
