console.log("Let's talk arrays");

const zodiacSigns = [
    "Libra",
    "Cancer",
    "Leo",
    "Scorpio",
    "Aquarius",
    "Gemini",
    "Virgo",
    "Pisaces",
    "Aries",
    "Sagittarius",
    "Capricorn",
];

console.log("zodiacSigns", zodiacSigns);

console.log(zodiacSigns);

console.log("2nd Zodiac:" , zodiacSigns[1]);

console.log("# of Zodiacs:", zodiacSigns.length);

const zodiacSignsUlRef = document.getElementById("zodiac-signs");

for (let i= 0; i < zodiacSigns.length; i++){
console.log("For Loop:", zodiacSigns[i]);
zodiacSignsUlRef.innerHTML += "<li>" + zodiacSigns[i] + "</li>";
}

let whileI = 0;
while (whileI < zodiacSigns.length){
    console.log("While Loop:", zodiacSigns[whileI]);
    whileI++;
}

let whileDoI = 0;
do {
whileDoI++;
} while (whileDoI < zodiacSigns.length);

const gradStatsSectionRef = document.querySelector("#grade-stats");

const grades = [21, 6, 79, 8, 86, 4, 2, 84, 57, 10];

for (let i = 0; i < grades.length; i++){
    const grade = grades[i];
    sum0Grades += grade;
}

gradStatsSectionRef.innerHTML +=
"<h4>Avg:" + sum0Grades / grades.length + "</h4>"; 