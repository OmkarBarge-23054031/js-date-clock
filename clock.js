const clock = document.getElementById("clock");
const toggleBtn = document.getElementById("toggleFormat");

let is24Hour = false; // start with 12-hour

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "";

    if (!is24Hour) {
        am_pm = hour >= 12 ? " PM" : " AM";
        hour = hour % 12 || 12; // 0 → 12
    }

    hour = hour.toString().padStart(2, "0");
    min = min.toString().padStart(2, "0");
    sec = sec.toString().padStart(2, "0");

    clock.textContent = `${hour}:${min}:${sec}${is24Hour ? "" : am_pm}`;
}

toggleBtn.addEventListener("click", () => {
    is24Hour = !is24Hour;
    toggleBtn.textContent = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
    showTime();
});

setInterval(showTime, 1000);
showTime();
