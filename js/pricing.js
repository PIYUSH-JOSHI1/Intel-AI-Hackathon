// Pricing JavaScript for RetailMind

document.addEventListener('DOMContentLoaded', function() {
  const billingToggle = document.getElementById('billing-toggle');
  const monthlyPrices = document.querySelectorAll('.price.monthly');
  const annualPrices = document.querySelectorAll('.price.annual');
  
  // Toggle between monthly and annual pricing
  billingToggle.addEventListener('change', function() {
    if (this.checked) {
      // Show annual prices
      monthlyPrices.forEach(price => {
        price.style.display = 'none';
      });
      
      annualPrices.forEach(price => {
        price.style.display = 'block';
      });
    } else {
      // Show monthly prices
      annualPrices.forEach(price => {
        price.style.display = 'none';
      });
      
      monthlyPrices.forEach(price => {
        price.style.display = 'block';
      });
    }
  });
});