const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const navIcon4 = document.querySelector("#nav-icon4");
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    btn.classList.toggle("group");
});