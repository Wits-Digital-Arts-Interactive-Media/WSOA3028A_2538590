document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById('backToTopBtn');// finds the button element with the id 'backToTopBtn' and assign it to the variable 'btn'.
    btn.addEventListener('click', scrollToTop); // adds an event listener to the 'btn' element that listens for a 'click' event and runs the 'scrollToTop' function when clicked.
    
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    }
  });
  