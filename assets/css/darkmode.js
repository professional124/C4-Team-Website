document.getElementById('dark-mode-toggle')?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

if (!document.getElementById('dark-mode-toggle')) {
  console.warn("Dark mode toggle button not found");
}
