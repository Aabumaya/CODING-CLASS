const menuList = document.querySelector("#menu");

const cartTable = document.querySelector("#cart");

const noItemsRow = document.querySelector("#no-items");

const menuItems = [
    { name: "Hamburger", price: 2.99 },
    { name: "Cheeseburger", price: 3.99 },
    { name: "Cheese Pizza", price: 3.99 },
    { name: "Pepperoni Pizza", price: 4.99 },
    { name: "Sausage Pizza", price: 4.99 },
    { name: "Caesar Salad", price: 3.99 },
    { name: "Fries", price: 1.99 },
    { name: "Onion Rings", price: 2.49 }
];

let cart = [];

menuItems.forEach(item => {
    const li = document.createElement('li');

    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    const button = document.createElement('button');
    button.textContent = '+';
    button.addEventListener('click', () => addItemToCart(item));
    
    li.appendChild(button);
    menuList.appendChild(li);
});

function addItemToCart(item) {
    cart.push({ name: item.name, price: item.price, specialRequest: '' });
    updateCart();
}

function updateCart() {
    while (cartTable.rows.length > 2) {
        cartTable.deleteRow(1);
    }

    if (cart.length === 0) {
        noItemsRow.style.display = '';
        totalPriceCell.textContent = '$0.00';
    } else {
        noItemsRow.style.display = 'none';
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            
            const row = cartTable.insertRow(1);
            row.insertCell(0).textContent = item.name;
            row.insertCell(1).textContent = `$${item.price.toFixed(2)}`;

            const specialRequestCell = row.insertCell(2);
            const textarea = document.createElement('textarea');
            textarea.value = item.specialRequest;
            textarea.addEventListener('input', () => {
                cart[index].specialRequest = textarea.value;
            });
            specialRequestCell.appendChild(textarea);

            const actionCell = row.insertCell(3);
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => removeCartItem(index));
            actionCell.appendChild(removeBtn);
        });

        totalPriceCell.textContent = `$${total.toFixed(2)}`;
    }
}

function removeCartItem(index) {
    cart.splice(index, 1);
    updateCart();
}