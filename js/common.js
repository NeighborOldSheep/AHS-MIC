/* fixed header add transition animation */

var header = document.getElementById("header");

if(window.pageYOffset > header.offsetTop){
    header.className += " fixed";
}
