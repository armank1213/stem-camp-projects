let currentOrder = [];
let orderTotal = 0;


function addToOrder(itemName, itemPrice) {
    const orderItem = {
        name: itemName,
        price: itemPrice
    };
    
    currentOrder.push(orderItem);
    
    orderTotal += itemPrice;
    
    console.log("Added:", itemName, "- $" + itemPrice.toFixed(2));
    console.log("Current order:", currentOrder);
    console.log("Total items:", currentOrder.length);
    console.log("Total price: $" + orderTotal.toFixed(2));
    console.log("---");
    
    updateOrderDisplay();
    
    alert("Added " + itemName + " to your order!");
}


function updateOrderDisplay() {
    const orderDiv = document.getElementById('orderItems');
    const totalDiv = document.getElementById('orderTotal');
    
    
    if (currentOrder.length === 0) {
        orderDiv.innerHTML = '<p>No items yet - click menu items to order!</p>';
        totalDiv.textContent = 'Total: $0.00';
        return;
    }
    
    
    let orderHTML = '';
    for (let i = 0; i < currentOrder.length; i++) {
        const item = currentOrder[i];
        orderHTML += '<div class="order-item">';
        orderHTML += '<span>' + item.name + '</span>';
        orderHTML += '<span>$' + item.price.toFixed(2) + '</span>';
        orderHTML += '</div>';
    }
    
    
    orderDiv.innerHTML = orderHTML;
    totalDiv.textContent = 'Total: $' + orderTotal.toFixed(2);
}


function showFullOrder() {
    console.log("COMPLETE ORDER SUMMARY:");
    console.log("Number of items:", currentOrder.length);
    
    for (let i = 0; i < currentOrder.length; i++) {
        const item = currentOrder[i];
        console.log((i + 1) + ". " + item.name + " - $" + item.price.toFixed(2));
    }
    
    console.log("Total: $" + orderTotal.toFixed(2));
}


function clearOrder() {
    currentOrder = [];
    orderTotal = 0;
    updateOrderDisplay();
    console.log("Order cleared!");
}


function countItems() {
    const count = currentOrder.length;
    console.log("You have " + count + " items in your order");
    return count;
}


function findMostExpensive() {
    if (currentOrder.length === 0) {
        console.log("No items in order!");
        return null;
    }
    
    let mostExpensive = currentOrder[0];
    for (let i = 1; i < currentOrder.length; i++) {
        if (currentOrder[i].price > mostExpensive.price) {
            mostExpensive = currentOrder[i];
        }
    }
    
    console.log("Most expensive item:", mostExpensive.name, "- $" + mostExpensive.price.toFixed(2));
    return mostExpensive;
}


function getAveragePrice() {
    if (currentOrder.length === 0) {
        console.log("No items in order!");
        return 0;
    }
    
    const average = orderTotal / currentOrder.length;
    console.log("Average item price: $" + average.toFixed(2));
    return average;
}

console.log("Welcome to The Hackathon Restaurant!");
console.log("Click menu items to add them to your order.");
console.log("");
console.log("Try these commands in the console:");
console.log("showFullOrder() - Display complete order");
console.log("clearOrder() - Remove all items");
console.log("countItems() - Count items in order");
console.log("findMostExpensive() - Find priciest item");
console.log("getAveragePrice() - Calculate average price");
console.log("currentOrder - View the order array directly");
console.log("");
console.log("Happy ordering!");