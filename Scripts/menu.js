const menuItems = [
    { name: "Home", href: "index.html"},
    { name: "Blogs", href: "blogpage.html" },
    { name: "Design", href: "design.html" },
    { name: "Portfolio", href: "portfolio.html" },
    { name: "Essays", href: "essaypage.html" },
    { name: "Contact", href: "contact.html" },
];

export function initialise(currentPage) {
    const nav = document.querySelector("header > nav");
    const ul = document.createElement("ul");

    for (let menuItem of menuItems) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        if (currentPage !== menuItem.name) {
            a.innerText = menuItem.name;
            a.setAttribute("href", menuItem.href);
            li.appendChild(a);
        } else {
            li.innerText = menuItem.name;
        }

        ul.appendChild(li);
    }

    nav.appendChild(ul);
}


