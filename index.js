const hoursEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

const hEl = document.querySelector(".h");
const mEl = document.querySelector(".m");
const sEl = document.querySelector(".s");
const AMEl = document.querySelector(".AMPM");
const session = "AM";


function UpdateClock(){
    const currentDate = new Date();
    setTimeout(UpdateClock,1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
///////////////////////////////////////////////
    const h = currentDate.getHours();
    const m = currentDate.getMinutes();
    const s = currentDate.getSeconds();
//////////////////////////////////////////////
    if(h==0){
        h=12
    }
    if(h>12){
        h=h-12;
        session ="PM";
    }

    hEl.textContent = h + ":";
    mEl.textContent = m+ ":";
    sEl.textContent = s+ ":";
    AMEl.textContent = session;

/////////////////////////////////////////////
    const hourDegre = (hour / 12) * 360;
    hoursEl.style.transform = `rotate(${hourDegre}deg`;
    const minuteDegre = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDegre}deg`;
    const secondDegre = (second / 60) * 360;
    secondEl.style.transform = `rotate(${secondDegre}deg`;

}


UpdateClock();