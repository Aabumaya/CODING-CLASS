const cardRef = document.querySelector(".card");
const dayCareRef = document.querySelector("#daycare");


function onPokemonDrop() {
    console.log("Ahh you dropped our baby!!!");
    console.log("currentTarget", e.currentTarget);
}

for(let i = 0; i < cardRef.length; i++) {
cardsRed[i].ondragend = onPokemonDrop;
}