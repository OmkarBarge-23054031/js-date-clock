// Create a clock div and add it to the page
const clock = document.createElement("div");
clock.id = "clock";
clock.style.fontSize = "2rem";
clock.style.fontFamily = "monospace";
clock.style.textAlign = "center";
clock.style.marginTop = "20px";
document.body.appendChild(clock);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";

    // Convert to 12-hour format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour === 0) {
        hour = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = `${hour}:${min}:${sec} ${am_pm}`;
    clock.textContent = currentTime;
}

// Update clock every second
setInterval(showTime, 1000);
showTime();
