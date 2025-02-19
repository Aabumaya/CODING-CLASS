// test scores 
const scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38]

const list = document.getElementById("scores-list");
const avgScore = document.getElementById("average-score");

//add scores to the list
let total = 0;
for(let i = 0; i < scores.length; i++) {
    let item = document.createElement("li");
    item.textContent = scores[i];
    list.appendChild(item);
    total += scores[i];
}

let average = total / scores.length;
avgScore.textContent = "Average Score:" + average.toFixed(2);