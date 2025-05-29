// Dashboard JavaScript for RetailMind

document.addEventListener('DOMContentLoaded', function() {
  // Tab switching functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Show corresponding content
      const tabId = button.getAttribute('data-tab');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });
  
  // Initialize charts if they exist
  if (typeof Chart !== 'undefined') {
    // Sales Chart
    const salesChartEl = document.getElementById('salesChart');
    if (salesChartEl) {
      const salesChart = new Chart(salesChartEl, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Monthly Revenue',
            data: [65000, 72000, 85000, 92000, 110000, 124500],
            borderColor: '#1a3a6d',
            backgroundColor: 'rgba(26, 58, 109, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              mode: 'index',
              intersect: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  return '$' + value.toLocaleString();
                }
              }
            }
          }
        }
      });
    }
    
    // Customer Chart
    const customerChartEl = document.getElementById('customerChart');
    if (customerChartEl) {
      const customerChart = new Chart(customerChartEl, {
        type: 'doughnut',
        data: {
          labels: ['New', 'Returning', 'Loyal', 'VIP'],
          datasets: [{
            data: [30, 25, 35, 10],
            backgroundColor: [
              '#1a3a6d',
              '#00b8a9',
              '#ff6b6b',
              '#ffc107'
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right'
            }
          },
          cutout: '70%'
        }
      });
    }
    
    // Inventory Chart
    const inventoryChartEl = document.getElementById('inventoryChart');
    if (inventoryChartEl) {
      const inventoryChart = new Chart(inventoryChartEl, {
        type: 'bar',
        data: {
          labels: ['Apparel', 'Electronics', 'Home', 'Beauty', 'Sports', 'Food'],
          datasets: [{
            label: 'In Stock',
            data: [82, 65, 90, 45, 72, 88],
            backgroundColor: '#1a3a6d'
          }, {
            label: 'Low Stock',
            data: [12, 22, 6, 35, 18, 8],
            backgroundColor: '#ff6b6b'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top'
            }
          },
          scales: {
            x: {
              stacked: true
            },
            y: {
              stacked: true,
              beginAtZero: true
            }
          }
        }
      });
    }
  }
});