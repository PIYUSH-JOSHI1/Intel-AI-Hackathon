// Contact Form JavaScript for RetailMind

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const company = document.getElementById('company').value;
      const phone = document.getElementById('phone').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      const subscribe = document.getElementById('subscribe').checked;
      
      // Validate form
      let isValid = true;
      
      if (!name) {
        isValid = false;
        document.getElementById('name').classList.add('error');
      } else {
        document.getElementById('name').classList.remove('error');
      }
      
      if (!email || !isValidEmail(email)) {
        isValid = false;
        document.getElementById('email').classList.add('error');
      } else {
        document.getElementById('email').classList.remove('error');
      }
      
      if (!subject) {
        isValid = false;
        document.getElementById('subject').classList.add('error');
      } else {
        document.getElementById('subject').classList.remove('error');
      }
      
      if (!message) {
        isValid = false;
        document.getElementById('message').classList.add('error');
      } else {
        document.getElementById('message').classList.remove('error');
      }
      
      // If form is valid, submit it (in a real app, this would send data to the server)
      if (isValid) {
        // Create a success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.innerHTML = `
          <h3>Thank you for your message!</h3>
          <p>We've received your inquiry and will get back to you as soon as possible.</p>
        `;
        
        // Replace form with success message
        contactForm.innerHTML = '';
        contactForm.appendChild(successMessage);
        
        // In a real app, you would send the form data to the server here
        console.log({
          name,
          email,
          company,
          phone,
          subject,
          message,
          subscribe
        });
      }
    });
  }
  
  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});