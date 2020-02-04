'use strict';

 /* Juan sebastian Vaca: La funcionaliadad que se esta relizando por medio de javascript es bastante util , al revisarla tiene un buen 
 funcionamiento. Respecto a la documetacion yo la haria siendo un poco mas espcifica. Por ultimo y siendo mas importante queda mas que 
 claro que no hizo uso de eslint puesto que al momento de correr el js se generan errores.*/

var circle = document.querySelector(".circuloImg");
//Scroll listener to  contol circle animation
window.addEventListener("scroll",()=>{
    var value = window.scrollY+150;
    console.log(value)
    circle.style.clipPath="circle("+value+"px at center)"
})
