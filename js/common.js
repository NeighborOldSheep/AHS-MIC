/* fixed header add transition animation */

/* 
    parament:
        1. obj  object name
        2. ev   event name
        3. fn   return function
*/ 
function addEvent(obj,ev,fn){
    /* normal browser */
    if(obj.addEventListener){
        obj.addEventListener(ev,fn);
    }
    /* IE browser */
    else{
        obj.attachEvent("on" + ev, fn);
    }

}


function fixNav(){
    var header = document.getElementById("header");

    if(window.pageYOffset > header.offsetTop){
        header.className += " fixed";
    }
}

addEvent(window,"scroll",fixNav);