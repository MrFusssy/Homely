const headerNav = document.querySelector(".header_nav");
const burgerBtn = document.querySelector(".header_burger");
burgerBtn.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    burgerBtn.classList.toggle("open");
});