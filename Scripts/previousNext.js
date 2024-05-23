document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    const pages = [
        "week1.html", "week2.html", "week3.html", "week4.html",
        "week6.html", "week8.html", "week9.html", "week10.html",
        "week11.html", "week12.html", "week13.html", "lectures.html"
    ];

    
    const currentIndex = window.currentIndex; // Access the variable that is defined in the HTML
    //console.log("Current Index:")

    // Update button functionality based on current index
    function updateButtons() {
        //console.log("Update buttons with currentIndex"
        if (currentIndex > 0) {
            prevButton.disabled = false;
            prevButton.onclick = function() {
                window.location.href = pages[currentIndex - 1];
            };
        } else {
            prevButton.disabled = true;
        }

        if (currentIndex < pages.length - 1) {
            nextButton.disabled = false;
            nextButton.onclick = function() {
                window.location.href = pages[currentIndex + 1];
            };
        } else {
            nextButton.disabled = true;
        }
    } 

    updateButtons(); 
});
