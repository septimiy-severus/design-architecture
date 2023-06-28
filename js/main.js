let burger = document.querySelector(".burger");
let navigation = document.querySelector(".navigation");
// console.log(burger);

burger.addEventListener("click", function () {
    burger.classList.toggle("active")
    navigation.classList.toggle("active")
})