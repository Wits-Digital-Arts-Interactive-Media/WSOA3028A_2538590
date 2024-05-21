// const blogItems = [
//     { name: "Week1", href: "week1.html" },
//     { name: "Week2", href: "week2.html" },
//     { name: "Week3", href: "week3.html" },
//     { name: "Week4", href: "week4.html" },
//     { name: "Week6", href: "week6.html" },
//     { name: "Week8", href: "week8.html" },
//     { name: "Week9", href: "week9.html" },
//     { name: "Week10", href: "week10.html"},
//     { name: "Week11", href: "week11.html"},
//     { name: "Week12", href: "week12.html"},
//     { name: "Week13", href: "week13.html"},
//     { name: "Lectures", href: "lectures.html"}
// ];

// export function initialise(currentPage) {
//     const nav = document.querySelector("header > nav");
//     const ul = document.createElement("ul");

//     blogItems.forEach((blogItem, index) => {
//         const li = document.createElement("li");
//         const a = document.createElement("a");
//         let weekId = `Week${index + 1}Hover`; // Generate ID based on index

//         if (blogItem.name.toLowerCase() === "Lectures") {//Specific to the 'Lectures' id
//             weekId = "LecturesHover"; 
//         }

//         if (currentPage.toLowerCase() !== blogItem.name.toLowerCase()) {
//             a.innerText = blogItem.name;
//             a.setAttribute("href", blogItem.href);
//             a.id = weekId;  // Set ID for hover effects
//             li.appendChild(a);
//         } else {
//             li.innerText = blogItem.name; // Current page not having a link, just text
//             li.id = weekId; // Set ID for hover effects
//         }

//         ul.appendChild(li);
//     });

//     nav.appendChild(ul);
// }

