function letsGo() {
    console.log("Functions Time!");
}

letsGo();

function calculateTotal(itemPrice, taxRate) {
    const groupOfTwenty = math.floor(itemPrice / 20);
if (itemPrice > 100) {
    return itemPrice * (1 + taxRate) * (1 - discountRate * 2);
} else if (itemPrice > 50) {
    return itemPrice * (1 + taxRate) * (1 - discountRate);
}
}

console.log("Kidney = $20, Tax Rate = 40%:", calculateTotal(20, 0.4));

const items = [18, 24, 17, 3];

function showItems() {
    const newSection = document.createElement("section");
    newSection.innerHTML = "<h4>Items</h4>";

    let total = 0;
    for(let i = 0; i < items.length; i++){
        newSection.innerHTML += "<p>$" + items[i] + "</p>";
        total += items[i];
    }

    newSection.innerHTML += "<hr />";

    newSection.innerHTML += "<p>$" + calculateTotal(total, 0.07) + "</p>";

    document.body.appendChild(newSection);
}

showItems();