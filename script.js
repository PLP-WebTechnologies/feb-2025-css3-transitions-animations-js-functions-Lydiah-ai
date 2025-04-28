// JavaScript function to store user preferences
function storeUserPreference(key, value) {
    localStorage.setItem(key, value);
  }
  
  // JavaScript function to retrieve user preferences
  function getUserPreference(key) {
    return localStorage.getItem(key);
  }
  
  // JavaScript function to trigger animation
  document.getElementById('animateButton').addEventListener('click', function() {
    this.style.backgroundColor = '#ff0000'; // Change button color to red
    storeUserPreference('buttonColor', '#ff0000'); // Store the new color in localStorage
  });
  
  // Retrieve and apply user preferences on page load
  window.onload = function() {
    const savedColor = getUserPreference('buttonColor');
    if (savedColor) {
      document.getElementById('animateButton').style.backgroundColor = savedColor;
    }
  };
  