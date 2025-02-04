// Declare Variables
const password = "d0nteatTheScript"; // I use const because the password is a fixed value

const startsWithSpace = password[0] === " "; // I use const because this is a fixed check

const atLeast8 = password.length >= 8; // I use const because this is a fixed check

const containsEat = password.includes("eat"); // I use const because this is a fixed check

// messsage to the console
console.log("Does the password starts with a space? " + startsWithSpace);

console.log("Is the password at least 8 characters long? " + atLeast8);

console.log("Does the password contain 'eat' " + containsEat);