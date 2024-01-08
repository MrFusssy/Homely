const headernav = document.querySelector('.header-nav');
const burgerbtn = document.querySelector('.header-burger');
burgerbtn.addEventListener('click', () => {
    headernav.classList.toggle('open')
    burgerbtn.classList.toggle('open')
})

const hovers = document.querySelectorAll(".header-nav ul li a");
hovers.forEach((hover) => {
    hover.addEventListener("click", () => {
        hover.classList.toggle("open")
    })
})



