let button = document.querySelector(".button")
let btn = document.querySelector(".btn")
let sidebar = document.querySelector(".Sidebar")
let overlay = document.querySelector(".overlay")

button.addEventListener("click", function () {
    sidebar.classList.add("add");
    overlay.classList.add("show");
})
btn.addEventListener("click", function () {
    sidebar.classList.remove("add")
    overlay.classList.remove("show")
})