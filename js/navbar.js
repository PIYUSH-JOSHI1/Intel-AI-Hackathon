// Navigation JavaScript for RetailMind

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');
  const navbar = document.getElementById('navbar');
  
  // Handle mobile menu toggle
  mobileMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('#mobile-menu') && !event.target.closest('.nav-menu')) {
      mobileMenu.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
  
  // Handle navbar color change on scroll
  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  // Initialize navbar state
  updateNavbar();
  
  // Update navbar on scroll
  window.addEventListener('scroll', updateNavbar);
  
  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
});