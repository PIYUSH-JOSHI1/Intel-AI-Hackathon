// Main JavaScript file for RetailMind

// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
  // Manually implement AOS-like functionality
  const animateElements = document.querySelectorAll('[data-aos]');
  
  function checkIfInView() {
    animateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('aos-animate');
      }
    });
  }
  
  // Check elements on page load
  setTimeout(checkIfInView, 100);
  
  // Check elements on scroll
  window.addEventListener('scroll', checkIfInView);
  
  // Handle FAQ accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close all other FAQs
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current FAQ
      item.classList.toggle('active');
    });
  });
});