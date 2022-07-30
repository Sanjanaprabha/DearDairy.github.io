let burger = document.querySelector(".burger");
let navbar = document.querySelector('.navbar');
let nav = document.querySelector('.nav');


burger.addEventListener('click',function(){
    navbar.classList.toggle('.h-nav');
    nav.classList.toggle('.v-nav');
});