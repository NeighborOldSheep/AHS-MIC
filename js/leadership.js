/* get element */
const btn = document.getElementById("load");
const list = document.getElementById("prev-leader");
const back = document.getElementById("back");

/* console.log(btn,list) */

/* 显示往届leader*/
btn.addEventListener("click", ()=>{
    btn.style.display = "none";
    list.style.display = "flex";
    back.style.display = "block";
})

/* 收起往届leader */
back.addEventListener("click", () =>{
    back.style.display = "none";
    list.style.display = "none";
    btn.style.display = "block";
})