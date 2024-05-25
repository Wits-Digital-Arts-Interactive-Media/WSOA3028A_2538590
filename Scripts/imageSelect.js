document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function updateCards() {
        cards.forEach((card, index) => {
            card.style.display = (index >= currentIndex && index < currentIndex + 3) ? 'block' : 'none';
        });
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex -= 3;
            updateCards();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex + 3 < cards.length) {
            currentIndex += 3;
            updateCards();
        }
    });

    // Initialize
    updateCards();
});
