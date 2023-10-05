const daysvar = document.getElementById("days");
const hoursvar = document.getElementById("hours");
const minsvar = document.getElementById("mins");
const secsvar = document.getElementById("secs");
const milliesecsvar = document.getElementById("milliesecs");


const newYears = "1 Jan 2024";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = Math.floor(newYearsDate - currentDate);

    const days = Math.floor(totalSeconds / 1000 / 3600 / 24);
    const hours = Math.floor(totalSeconds / 1000 / 3600 % 24);
    const mins = Math.floor(totalSeconds / 1000 / 3600 % 60);
    const secs = Math.floor(totalSeconds / 1000 % 60);
    const milliesecs = Math.floor(totalSeconds % 1000);

    console.log(newYearsDate, currentDate, totalSeconds, days, hours, mins, secs, milliesecs);

    daysvar.innerHTML = days;
    hoursvar.innerHTML = formatTime(hours);
    minsvar.innerHTML = formatTime(mins);
    secsvar.innerHTML = formatTime(secs);
    milliesecsvar.innerHTML = formatTime(milliesecs);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);