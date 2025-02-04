// Declare Variables
const salesTax = 0.07; // I use const because that's the given sales tax
const discountRate = 0.10; // I use const because that's the given discount rate
const itemPrice = 40.99; // I use const because that's the given item price

// Calculate the price after tax
const priceAfterTax = itemPrice + (itemPrice * salesTax); // I use const because this is calculated once and won't change

// Boolean showing if the item qualifies for the discount
const EligibleForDiscount = itemPrice > 50;

let discountedPriceAfterTax = priceAfterTax; // I use let because the price may change if discount is applied

//If the item is eligible for discount, apply the discount
if (EligibleForDiscount === true) {
    discountedPriceAfterTax = priceAfterTax - (priceAfterTax * discountRate);
}

// messsage to the console
console.log("Price after tax: $" + priceAfterTax);

console.log("Is the item eligible for discount? " + EligibleForDiscount); // This will print true or false

console.log("Final price after tax (with discount if it is eligible): $" + discountedPriceAfterTax);