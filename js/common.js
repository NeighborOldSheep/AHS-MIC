/* fixed header add transition animation */

var header = document.getElementById("header");
//获取导航栏到父元素的顶部距离
var headerbarTop = header.offsetTop;

window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

    //滚动高度 > 元素距离的位置时添加类，否则移除类
    if(scrollTop > headerbarTop){
        header.classList.add('fixed');
    }
    else{
        header.classList.remove("fixed");
    }
}


const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", ()=>{
    nav.classList.toggle("mobile-menu");
})