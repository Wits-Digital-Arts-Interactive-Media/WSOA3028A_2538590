const weeks = [
    "Week1Hover", 
    "Week2Hover", 
    "Week3Hover", 
    "Week4Hover", 
    "Week6Hover", 
    "Week8Hover",
    "Week9Hover"
];

weeks.forEach(weekId => {
    const weekHover = document.getElementById(weekId);

    weekHover.addEventListener("mouseover", event => {
        weekHover.innerText = weekHover.innerText.toUpperCase();
    });

    weekHover.addEventListener("mouseout", event => {
        const text = weekHover.innerText.toLowerCase();
        weekHover.innerText = text.charAt(0).toUpperCase() + text.slice(1);
    });
});
