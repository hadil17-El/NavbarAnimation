const hamburger_menu = document.querySelector(".hamburger-menu");
container = document.querySelector(".container");
hamburger_menu.addEventListener("click", () => {
    container.classlist.toggle("active");
});