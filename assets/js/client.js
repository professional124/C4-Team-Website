// client.js

// Function to handle form submission with reCAPTCHA and backend
async function handleFormSubmit(event, formId) {
  event.preventDefault();

  const form = document.getElementById(formId);
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;

  try {
    // Execute reCAPTCHA v3 and get token
    const token = await grecaptcha.execute('6LeWhmErAAAAAMHNcFq-vmAaAPBWN1c69Ts2iKQ0', { action: 'submit' });

    // Prepare form data including recaptcha token
    const formData = new FormData(form);
    formData.append('recaptchaToken', token);

    // Convert FormData to JSON object
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Send data to your backend API
    const response = await fetch('https://c4-form-backend.onrender.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      alert('Form submitted successfully! Thank you.');
      form.reset();
      grecaptcha.reset();
    } else {
      alert('Error submitting form: ' + (result.message || 'Unknown error'));
    }
  } catch (error) {
    alert('Network error submitting form. Please try again later.');
    console.error('Form submit error:', error);
  } finally {
    submitButton.disabled = false;
  }
}

// Initialize event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const joinForm = document.getElementById('join-form');
  if (joinForm) {
    joinForm.addEventListener('submit', (e) => handleFormSubmit(e, 'join-form'));
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => handleFormSubmit(e, 'contact-form'));
  }
});
