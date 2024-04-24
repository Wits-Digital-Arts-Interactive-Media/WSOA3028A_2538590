const blogItems = [
    { name: "week1", href: "week1.html"},
    { name: "week2", href: "week2.html" },
    { name: "week3", href: "week3.html" },
    { name: "week4", href: "week4.html" },
    { name: "week6", href: "week6.html" },
    { name: "week8", href: "week8.html" },
    { name: "week9", href: "week9.html" }
];

export function initialise(currentPage) {
    const nav = document.querySelector("header > nav");
    const ul = document.createElement("ul");

    for (let blogItem of blogItems) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        if (currentPage !== blogItem.name) {
            a.innerText = blogItem.name;
            a.setAttribute("href", blogItem.href);
            li.appendChild(a);
        } else {
            li.innerText = blogItem.name;
        }

        ul.appendChild(li);
    }

    nav.appendChild(ul);
}


