const dateDiv = document.getElementById("date");

function showDate() {
    const today = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    dateDiv.textContent = today.toLocaleDateString("en-US", options);
}

showDate();
