const navBar = document.querySelectorAll("li");
navBar.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector("ul .active").classList.remove("active");
        item.classList.add("active");
    });
}) 