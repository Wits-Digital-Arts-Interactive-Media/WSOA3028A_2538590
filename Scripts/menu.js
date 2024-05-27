const root = "/WSOA3028A_2538590";

const menuItems = [
    { name: "Home", href: root + "/index.html"},
    { name: "Blogs", href: `${root}/Blogs/index.html` },
    { name: "Design", href: `${root}/Design/index.html` },
    { name: "Portfolio", href: `${root}/Portfolio/index.html` },
    { name: "Essays", href: `${root}/Essays/index.html` },
    { name: "About Me", href: `${root}/AboutMe/index.html` },
];


export function initialise(currentPage) {
    const nav = document.querySelector("header > nav");
    const ul = document.createElement("ul");
    ul.className = "nav__links";

    for (let menuItem of menuItems) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        if (currentPage !== menuItem.name) {
            a.innerText = menuItem.name;
            a.setAttribute("href", menuItem.href);
            li.appendChild(a);
        } else {
            li.innerText = menuItem.name;
            li.classList.add("current-page");
        }

        ul.appendChild(li);
    }

    nav.appendChild(ul);

    // Create hamburger icon
    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    for (let i = 0; i < 3; i++) {
        const bar = document.createElement("div");
        hamburger.appendChild(bar);
    }
    nav.appendChild(hamburger);

   // Toggle menu visibility on hamburger click
const menuToggle = document.querySelector(".hamburger");
menuToggle.addEventListener("click", () => {
    const menu = document.querySelector(".nav__links");
    menu.classList.toggle("show");
});

}




