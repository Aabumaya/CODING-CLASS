const itemUlRef = document.querySelector("#items");
const cartUlRef = document.querySelector("#cart");
const removeBtnRef = document.querySelector("#remove-item");

const items = [ "Apple", "Orange", "Plum", "Pear", "Hairy Potato"];
const cart = [];

function removeItemFromCart() {
    cart.shift();
    showCart();
}
function showCart() {
    cartUlRef.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        cartUlRef.innerHTML += "<li>" + cart[i] + "</li>";
    }
}
function addItemToCart(e) {
    cart.push(e.target.dataset.name);
showCart();
}

for(let i = 0; i < items.length; i++){
    const newLi = document.createElement("li");
    newLi.innerHTML = items[i];
    // itemUlRef.innerHTML += "<li>";
    // itemUlRef.innerHTML += items[i];

    const newBtn = document.createElement("button");
    newBtn.innerHTML = "+";   
    newBtn.dataset.name = items[i];
    newBtn.onclick = addItemToCart;
    newLi.appendChild(newBtn);

itemUlRef.appendChild(newLi);
    // itemUlRef.innerHTML += "</li>";
}

removeBtnRef.onclick = removeItemFromCart;