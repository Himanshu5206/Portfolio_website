// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the toggle button
    const toggleButton = document.getElementById('dark-mode-toggle');

    // Check for saved 'darkMode' in localStorage
    let darkMode = localStorage.getItem('darkMode'); 

    const enableDarkMode = () => {
        // Add the class to the body
        document.body.classList.add('darkmode');
        // Update darkMode in localStorage
        localStorage.setItem('darkMode', 'enabled');
    }

    const disableDarkMode = () => {
        // Remove the class from the body
        document.body.classList.remove('darkmode');
        // Update darkMode in localStorage
        localStorage.setItem('darkMode', null);
    }
  
    // If the user already visited and enabled darkMode
    // start things off with it on
    if (darkMode === 'enabled') {
        enableDarkMode();
    }

    // When someone clicks the button
    toggleButton.addEventListener('click', () => {
        // get their darkMode setting
        darkMode = localStorage.getItem('darkMode'); 
        
        // if it not current enabled, enable it
        if (darkMode !== 'enabled') {
            enableDarkMode();
        // if it has been enabled, turn it off  
        } else {  
            disableDarkMode(); 
        }
    });
});
