/* fixed header add transition animation */

var header = document.getElementById("header");
//获取导航栏到父元素的顶部距离
var headerbarTop = header.offsetTop;

window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

    //滚动高度 > 元素距离的位置时添加类，否则移除类
    if (scrollTop > headerbarTop) {
        header.classList.add('fixed');
    }
    else {
        header.classList.remove("fixed");
    }
};


//mobile device menue-btn
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("mobile-menu");
});




//mobile device remove class center
function removeClass(number) {
    var middle = document.querySelectorAll(".center");

    if (number.matches) {
        console.log("您的屏幕小于900px");
        //遍历所有带有center class的元素
        for (var i = 0; i < middle.length; i++) {
            //循环删除带有center class
            middle[i].classList.remove("center");
        }
    }
    else {
        for (var i = 0; i < middle.length; i++) {
            middle[i].classList.add("center");
        }
    }
};


var mq = window.matchMedia("(max-width: 900px)");
removeClass(mq);
mq.addEventListener("resize", function () { 
    removeClass(mq);
})

