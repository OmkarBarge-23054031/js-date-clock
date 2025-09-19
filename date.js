// Create a date div and add it to the page
const dateDiv = document.createElement("div");
dateDiv.id = "date";
dateDiv.style.fontSize = "1.5rem";
dateDiv.style.fontFamily = "monospace";
dateDiv.style.textAlign = "center";
dateDiv.style.marginTop = "10px";
document.body.appendChild(dateDiv);

function showDate() {
    const today = new Date();

    const day = today.getDate().toString().padStart(2, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0"); // months start at 0
    const year = today.getFullYear();

    // Format: DD/MM/YYYY
    dateDiv.textContent = `${day}/${month}/${year}`;
}

showDate(); // runs once
