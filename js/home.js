 /* Juan sebastian Vaca: La funcionaliadad que se esta relizando por medio de javascript es bastante util , al revisarla tiene un buen 
 funcionamiento. Respecto a la documetacion yo la haria siendo un poco mas espcifica. Por ultimo y siendo mas importante queda mas que 
 claro que no hizo uso de eslint puesto que al momento de correr el js se generan errores.*/

 /* Juan sebastian Vaca: esto es un error en eslint y es el single quote.*/
'use strict';
 /* Juan sebastian Vaca: yo lo declararia "use strict";*/

var count;
var sizes
var texts;
var textGroup;
var html = document.querySelector('html');

 /* Juan sebastian Vaca: esto es un error en eslint y son los espacios entre los brackets y el codigo que tiene.*/
/*Juan sebastian vaca:yo lo corregiria de la siguinte manera

window.onload=function() {
    this.init();
    // wait before run the text animation
    setTimeout(function() {
        window.requestAnimationFrame(AnimateText);
    }, 3000);
}*/

//Runs once the window have load
window.onload=function(){
    this.init();
    // wait before run the text animation
    setTimeout(function() {
        window.requestAnimationFrame(AnimateText);
    }, 3000);
}

/* Juan sebastian Vaca: esto es un error en eslint y son los espacios entre los brackets y el codigo que tiene adicionalmentee 
errores en os espacios entre los operadores.*/
/*Juan sebastian vaca:yo lo corregiria de la siguinte manera

function init() {    
    count = 0;
    texts = document.querySelectorAll(".ani-text");
    textGroup = document.querySelector(".text-wrapper");
    sizes = [];
    texts.forEach((text) => {
        sizes.push(text.offsetWidth+10)
    });    
    textGroup.style.width = sizes[0];
}*/


//init function to get some variables 
function init(){    
    count=0;
    texts=document.querySelectorAll(".ani-text");
    textGroup=document.querySelector(".text-wrapper");
    sizes=[];
    texts.forEach(text => {
        sizes.push(text.offsetWidth+10)
    });    
    textGroup.style.width=sizes[0];
}

/* Juan sebastian Vaca: esto es un error en eslint y son los espacios entre los brackets y el codigo que tiene adicionalmentee 
errores en os espacios entre los operadores.*/
/*Juan sebastian vaca:yo lo corregiria de la siguinte manera

function AnimateText(){
    textGroup.style.width=0;
    texts[count].classList.toggle("opa-0");
    count + 1 == texts.length?count = 0:count += 1;
    texts[count].classList.toggle("opa-0");
    setTimeout(()=>textGroup.style.width=sizes[count]+"px",1000)
    //call again the function in 4 seconds
    setTimeout(function() {
        window.requestAnimationFrame(AnimateText);
    }, 4000);
}*/
//function to animate the text
function AnimateText() {
    textGroup.style.width = 0;
    texts[count].classList.toggle("opa-0");
    count+1==texts.length?count=0:count+=1;
    texts[count].classList.toggle("opa-0");
    setTimeout(()=>textGroup.style.width=sizes[count]+"px",1000)
    //call again the function in 4 seconds
    setTimeout(function() {
        window.requestAnimationFrame(AnimateText);
    }, 4000);
}
