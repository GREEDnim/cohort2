const digital=document.querySelector(".digital")
const secondsNeedle=document.querySelector('.seconds')
const minutesNeedle=document.querySelector('.minutes')
const hoursNeedle=document.querySelector('.hours')

function updateTime(){

    const date=new Date();
    const h=date.getHours()%12;
    const m=date.getMinutes();
    const s=date.getSeconds();

    // digital
    const dateString=`${h}:${m}:${s}`;
    digital.innerText=dateString;

    //analog
    secondsDegree=(270+s*6)%360;
    minutesDegree=(270+m*(6))%360;
    hoursDegree=(270+h*30)%360;

    secondsNeedle.style.transform=`rotate(${secondsDegree}deg)`;
    minutesNeedle.style.transform=`rotate(${minutesDegree}deg)`;
    hoursNeedle.style.transform=`rotate(${hoursDegree}deg)`;



}

setInterval( updateTime,1000)