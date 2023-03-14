const newYears = "1 Jan 2024";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function countdown(){
    const currentDate = new Date();
    const newYearDate = new Date(newYears);

    //get total second to the 1 jan 2022
    const totalsecond = (newYearDate-currentDate) / 1000;

    const days = Math.floor(totalsecond / 3600 /24);
    const hours = Math.floor(totalsecond /3600) % 24;
    const mins = Math.floor(totalsecond / 60) % 60;
    const seconds = Math.floor(totalsecond) % 60;

    /* console.log( newYearDate- currentDate); */

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

//inital call
countdown();

//every 1s call function countdown
setInterval(countdown,1000);


