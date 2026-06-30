/* ==============================
Blue Panther Utility
==============================*/

function playNotify(){

    const audio=new Audio("assets/notify.mp3");

    audio.volume=0.5;

    audio.play();

}

function showElement(el){

    el.classList.remove("fade-out");

    el.classList.add("fade-in");

}

function hideElement(el){

    el.classList.remove("fade-in");

    el.classList.add("fade-out");

}

function random(min,max){

    return Math.floor(

        Math.random()*

        (max-min+1)

    )+min;

}
