'use strict';
var count;
var sizes
var texts;
var textGroup;
var html = document.querySelector('html');

//Runs once the window have load
window.onload=function(){
    this.init();
    // wait before run the text animation
    setTimeout(function() {
        window.requestAnimationFrame(AnimateText);
    }, 3000);
}
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
//function to animate the text
function AnimateText(){
    textGroup.style.width=0;
    texts[count].classList.toggle("opa-0");
    count+1==texts.length?count=0:count+=1;
    texts[count].classList.toggle("opa-0");
    setTimeout(()=>textGroup.style.width=sizes[count]+"px",1000)
    //call again the function in 4 seconds
    setTimeout(function() {
        window.requestAnimationFrame(AnimateText);
    }, 4000);
}
