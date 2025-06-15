// Helper function to handle form submission with reCAPTCHA validation
function handleFormSubmit(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const captchaResponse = grecaptcha.getResponse();

    if (captchaResponse.length === 0) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    // Optionally, disable the submit button to prevent multiple submits
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    // Submit the form normally
    form.submit();
  });
}

// Initialize both forms if they exist
document.addEventListener('DOMContentLoaded', () => {
  handleFormSubmit('join-form');
  handleFormSubmit('contact-form');
});
