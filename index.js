const hoursEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function UpdateClock(){
    const currentDate = new Date();
    setTimeout(UpdateClock,1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourDegre = (hour / 12) * 360;
    hoursEl.style.transform = `rotate(${hourDegre}deg`;
    const minuteDegre = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDegre}deg`;
    const secondDegre = (second / 60) * 360;
    secondEl.style.transform = `rotate(${secondDegre}deg`;

}


UpdateClock();