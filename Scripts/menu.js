const menuItems = [

    {name: "Blogs", href: "Blogs/week1.html"},
    {name: "Design", href: "design.html"},
    {name: "Portfolio", href: "Portfolio/portfolio.html"},
    {name: "Essays", href: "Essays/essay1.html"},
    {name: "Contact", href: "contact.html"},
]
    export function initialise (currentPage){

    const nav = document.querySelector("header > nav")
    const ul = document.createElement ("ul")
    const li = document.createElement ("li")
    for (let menuItem of menuItems){
        const li = document.createElement("li")
        if (currentPage != menuItem.name){
            const a = document.createElement("a")    
            a.innerText = menuItem.name 
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
            ul.appendChild(li)
        } else {li.innerText = menuItem.name}
        ul.appendChild(li)
    
    }
     nav.appendChild(ul)
     
}

   

