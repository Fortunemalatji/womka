// Function to check if element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
  }
  
  // Apply show class to elements as they enter the viewport
  function addScrollEffect() {
    const fadeInElements = document.querySelectorAll('.fade-in-scroll');
    fadeInElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('show');
      }
    });
  }
  
  // Add show class to elements with fade-in effect on page load
  window.addEventListener('load', () => {
    const fadeInOnLoad = document.querySelectorAll('.fade-in');
    fadeInOnLoad.forEach(element => element.classList.add('show'));
  
    // Trigger scroll effect for any in-view elements on load
    addScrollEffect();
  });
  
  // Trigger the scroll effect when scrolling
  window.addEventListener('scroll', addScrollEffect);

  document.getElementById('quote-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from form
    const service = document.getElementById('service').value;
    const details = document.getElementById('details').value;
    const budget = document.getElementById('budget').value;

    // Basic validation
    if (!service || !details || !budget) {
        alert('Please fill out all fields before requesting a quote.');
        return; // Exit the function if any field is empty
    }

    // Display quote summary
    document.getElementById('summary-service').textContent = service;
    document.getElementById('summary-details').textContent = details;
    document.getElementById('summary-budget').textContent = budget;

    // Calculate total (for simplicity, using a fixed formula)
    let total = parseInt(budget) + 50;  // Adding a processing fee
    document.getElementById('quote-total').textContent = total;

    // Show quote summary and payment section
    document.getElementById('quote-summary').style.display = 'block';
    document.getElementById('payment-section').style.display = 'block';

    // Scroll to the quote summary for a smoother user experience
    window.scrollTo({ top: document.getElementById('quote-summary').offsetTop, behavior: 'smooth' });
});
