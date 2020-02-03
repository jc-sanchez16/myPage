'use strict';
var circle = document.querySelector(".circuloImg");
//Scroll listener to  contol circle animation
window.addEventListener("scroll",()=>{
    var value = window.scrollY+150;
    console.log(value)
    circle.style.clipPath="circle("+value+"px at center)"
})