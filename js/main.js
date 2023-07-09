let burger = document.querySelector(".burger");
let navigation = document.querySelector(".navigation");
let body = document.querySelector("body")
// console.log(burger);

burger.addEventListener("click", function () {
    burger.classList.toggle("active")
    navigation.classList.toggle("active")
    body.classList.toggle("hidden")
})