// Testimonials JavaScript for RetailMind

document.addEventListener('DOMContentLoaded', function() {
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.testimonial-btn.prev');
  const nextBtn = document.querySelector('.testimonial-btn.next');
  let currentIndex = 0;
  
  // Function to show testimonial by index
  function showTestimonial(index) {
    // Remove active class from all testimonials and dots
    testimonials.forEach(testimonial => {
      testimonial.classList.remove('active');
    });
    
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Add active class to current testimonial and dot
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    
    // Update current index
    currentIndex = index;
  }
  
  // Initialize testimonials
  showTestimonial(0);
  
  // Add click event to dots
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'));
      showTestimonial(index);
    });
  });
  
  // Add click event to prev button
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      let index = currentIndex - 1;
      if (index < 0) {
        index = testimonials.length - 1;
      }
      showTestimonial(index);
    });
  }
  
  // Add click event to next button
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      let index = currentIndex + 1;
      if (index >= testimonials.length) {
        index = 0;
      }
      showTestimonial(index);
    });
  }
  
  // Auto rotate testimonials
  let testimonialInterval = setInterval(function() {
    let index = currentIndex + 1;
    if (index >= testimonials.length) {
      index = 0;
    }
    showTestimonial(index);
  }, 5000);
  
  // Pause auto rotation when hovering over testimonials
  const testimonialContainer = document.querySelector('.testimonial-container');
  if (testimonialContainer) {
    testimonialContainer.addEventListener('mouseenter', function() {
      clearInterval(testimonialInterval);
    });
    
    testimonialContainer.addEventListener('mouseleave', function() {
      testimonialInterval = setInterval(function() {
        let index = currentIndex + 1;
        if (index >= testimonials.length) {
          index = 0;
        }
        showTestimonial(index);
      }, 5000);
    });
  }
});