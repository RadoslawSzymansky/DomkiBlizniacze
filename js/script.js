const burger = document.querySelector(".burger");
const menuItems = document.querySelectorAll('.menu__link');

burger.addEventListener("click", () => {
    document.body.classList.toggle("opened");
});
