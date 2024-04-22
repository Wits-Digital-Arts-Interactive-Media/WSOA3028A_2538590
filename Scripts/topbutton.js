document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById('backToTopBtn');
    btn.addEventListener('click', scrollToTop);
    
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });
  