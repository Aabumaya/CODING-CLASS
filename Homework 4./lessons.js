const instruments = ["Piano", "Guitar", "Violin", "Drums", "Saxophone", "Flute"];

const instrumentsList = document.getElementById("instrument-list");

for(let i = 0; i < instruments.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = instruments[i];
    listItem.appendChild(item);
}
