const weeks = [ // Declares an array for the different weeks and stores their Ids 
    "Week1Hover",
    "Week2Hover", 
    "Week3Hover",
    "Week4Hover", 
    "Week6Hover", 
    "Week8Hover", 
    "Week9Hover" 
];

weeks.forEach(weekId => { 
    const weekHover = document.getElementById(weekId); // Select the HTML element by its ID

    // Add event listener for mouseover event
    weekHover.addEventListener("mouseover", event => {
        weekHover.innerText = weekHover.innerText.toUpperCase(); // Convert text to uppercase
    });

    // Add event listener for mouseout event
    weekHover.addEventListener("mouseout", event => {
        const text = weekHover.innerText.toLowerCase(); // It converts the text to lowercase
        weekHover.innerText = text.charAt(0).toUpperCase() + text.slice(1); // It considers that the words are in lowercase but converts the first letter/character to upper case
    });
});
