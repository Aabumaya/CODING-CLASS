//https://digimon-api.vercel.app/api/digimon

const digimonListRef = document.querySelector("#digimon-list");

async function getDigimons() {
//     fetch("https://digimon-api.vercel.app/api/digimon").
//     then(function (response) {
//         return response.json();
// })
// .then((digiData) => {
//     console.log(digiData);
// }).catch(function (err) {
//     console.warn(err); 
// })
// .finally(() => {
//     console.log("Fetch completed");

// });
try {
    const digiData = await fetch("https://digimon-api.vercel.app/api/digimon");

const digiDataJson = await digiData.json();

digimonListRef.innerHTML = "";

for (let i = 0; i < digiDataJson.length; i++) {
    const currentDigimon = digiDataJson[i];
    
    const newCard = document.createElement("div");
    newCard.classList.add("digimon-card");
    newCard.innerHTML +=`
    <img src="${currentDigimon.img}"  alt="${currentDigimon.name}" />
    <h4>${currentDigimon.name}</h4>
    button class="like-button">Like</button>`

    digimonListRef.appendChild(newCard);

}
} catch (err) {
    console.warn(err);
}

console.log("End of Function");
}

function likeDigimon() {
    console.log("Tee-hee, you clicked me. NOW YOU ARE CURSED FOR A 1000 YEARS");
}
function likeDigimon(e) {
    const digimonName = e.currentTarget.
}

if (isDigmonLiked) {
    localStorage.removeItem(digimonName);
}
getDigimons();
