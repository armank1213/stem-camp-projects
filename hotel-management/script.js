var roomsAvailable = 0;
var pizzasAvailable = 0;
var burgersAvailable = 0;
var noodlesAvailable = 0;
var shakesAvailable = 0;
var cakesAvailable = 0;


var roomsSold = 0;
var pizzasSold = 0;
var burgersSold = 0;
var noodlesSold = 0;
var shakesSold = 0;
var cakesSold = 0;


var moneyFromRooms = 0;
var moneyFromPizzas = 0;
var moneyFromBurgers = 0;
var moneyFromNoodles = 0;
var moneyFromShakes = 0;
var moneyFromCakes = 0;


var roomPrice = 999;
var pizzaPrice = 20;
var burgerPrice = 15;
var noodlePrice = 12;
var shakePrice = 7;
var cakePrice = 5;


function getInput(message) {
    var input = prompt(message);
    var number = parseInt(input) || 0;
    console.log("You entered: " + number);
    return number;
}


function display(message) {
    console.log(message);
}


function setupInventory() {
    display("=== SETTING UP INVENTORY ===");
    
    roomsAvailable = getInput("How many rooms do we have available?");
    pizzasAvailable = getInput("How many pizzas do we have available?");
    burgersAvailable = getInput("How many burgers do we have available?");
    noodlesAvailable = getInput("How many noodles do we have available?");
    shakesAvailable = getInput("How many milk shakes do we have available?");
    cakesAvailable = getInput("How many chocolate cakes do we have available?");
    
    display(" Inventory setup complete!");
    display(" Summary: " + roomsAvailable + " rooms, " + pizzasAvailable + " pizzas, " + 
            burgersAvailable + " burgers, " + noodlesAvailable + " noodles, " + 
            shakesAvailable + " shakes, " + cakesAvailable + " cakes");
}


function showMenu() {
    display("\n=== HOTEL RESTAURANT MENU ===");
    display("1. Book Room/s ($" + roomPrice + " each)");
    display("2. Order Pizza/s ($" + pizzaPrice + " each)");
    display("3. Order Burger/s ($" + burgerPrice + " each)");
    display("4. Order Noodles ($" + noodlePrice + " each)");
    display("5. Order Milk Shake/s ($" + shakePrice + " each)");
    display("6. Order Chocolate Cake/s ($" + cakePrice + " each)");
    display("7. Show Sales Report");
    display("8. Exit");
    display("=============================");
}


function bookRooms() {
    display("\n BOOKING ROOMS");
    var roomsWanted = getInput("How many rooms do you want to book?");
    var roomsLeft = roomsAvailable - roomsSold;
    
    if (roomsLeft >= roomsWanted) {
        roomsSold = roomsSold + roomsWanted;
        var cost = roomsWanted * roomPrice;
        moneyFromRooms = moneyFromRooms + cost;
        display(" SUCCESS: " + roomsWanted + " room(s) booked!");
        display(" Cost: $" + cost);
        display(" Rooms left: " + (roomsLeft - roomsWanted));
    } else {
        display(" SORRY: Only " + roomsLeft + " room(s) available!");
    }
}


function orderPizzas() {
    display("\n ORDERING PIZZAS");
    var pizzasWanted = getInput("How many pizzas do you want to order?");
    var pizzasLeft = pizzasAvailable - pizzasSold;
    
    if (pizzasLeft >= pizzasWanted) {
        pizzasSold = pizzasSold + pizzasWanted;
        var cost = pizzasWanted * pizzaPrice;
        moneyFromPizzas = moneyFromPizzas + cost;
        display(" SUCCESS: " + pizzasWanted + " pizza(s) ordered!");
        display(" Cost: $" + cost);
        display(" Pizzas left: " + (pizzasLeft - pizzasWanted));
    } else {
        display(" SORRY: Only " + pizzasLeft + " pizza(s) available!");
    }
}


function orderBurgers() {
    display("\n ORDERING BURGERS");
    var burgersWanted = getInput("How many burgers do you want to order?");
    var burgersLeft = burgersAvailable - burgersSold;
    
    if (burgersLeft >= burgersWanted) {
        burgersSold = burgersSold + burgersWanted;
        var cost = burgersWanted * burgerPrice;
        moneyFromBurgers = moneyFromBurgers + cost;
        display(" SUCCESS: " + burgersWanted + " burger(s) ordered!");
        display(" Cost: $" + cost);
        display(" Burgers left: " + (burgersLeft - burgersWanted));
    } else {
        display(" SORRY: Only " + burgersLeft + " burger(s) available!");
    }
}


function orderNoodles() {
    display("\n ORDERING NOODLES");
    var noodlesWanted = getInput("How many noodles do you want to order?");
    var noodlesLeft = noodlesAvailable - noodlesSold;
    
    if (noodlesLeft >= noodlesWanted) {
        noodlesSold = noodlesSold + noodlesWanted;
        var cost = noodlesWanted * noodlePrice;
        moneyFromNoodles = moneyFromNoodles + cost;
        display(" SUCCESS: " + noodlesWanted + " noodle(s) ordered!");
        display(" Cost: $" + cost);
        display(" Noodles left: " + (noodlesLeft - noodlesWanted));
    } else {
        display(" SORRY: Only " + noodlesLeft + " noodle(s) available!");
    }
}


function orderShakes() {
    display("\n ORDERING MILK SHAKES");
    var shakesWanted = getInput("How many milk shakes do you want to order?");
    var shakesLeft = shakesAvailable - shakesSold;
    
    if (shakesLeft >= shakesWanted) {
        shakesSold = shakesSold + shakesWanted;
        var cost = shakesWanted * shakePrice;
        moneyFromShakes = moneyFromShakes + cost;
        display(" SUCCESS: " + shakesWanted + " milk shake(s) ordered!");
        display(" Cost: $" + cost);
        display(" Milk shakes left: " + (shakesLeft - shakesWanted));
    } else {
        display(" SORRY: Only " + shakesLeft + " milk shake(s) available!");
    }
}


function orderCakes() {
    display("\n ORDERING CHOCOLATE CAKES");
    var cakesWanted = getInput("How many chocolate cakes do you want to order?");
    var cakesLeft = cakesAvailable - cakesSold;
    
    if (cakesLeft >= cakesWanted) {
        cakesSold = cakesSold + cakesWanted;
        var cost = cakesWanted * cakePrice;
        moneyFromCakes = moneyFromCakes + cost;
        display(" SUCCESS: " + cakesWanted + " chocolate cake(s) ordered!");
        display(" Cost: $" + cost);
        display(" Chocolate cakes left: " + (cakesLeft - cakesWanted));
    } else {
        display(" SORRY: Only " + cakesLeft + " chocolate cake(s) available!");
    }
}


function showSalesReport() {
    display("\n === SALES REPORT ===");
    
    display("\n ROOMS:");
    display("   • Started with: " + roomsAvailable);
    display("   • Sold: " + roomsSold);
    display("   • Remaining: " + (roomsAvailable - roomsSold));
    display("   • Money earned: $" + moneyFromRooms);
    
    display("\n PIZZAS:");
    display("   • Started with: " + pizzasAvailable);
    display("   • Sold: " + pizzasSold);
    display("   • Remaining: " + (pizzasAvailable - pizzasSold));
    display("   • Money earned: $" + moneyFromPizzas);
    
    display("\n BURGERS:");
    display("   • Started with: " + burgersAvailable);
    display("   • Sold: " + burgersSold);
    display("   • Remaining: " + (burgersAvailable - burgersSold));
    display("   • Money earned: $" + moneyFromBurgers);
    
    display("\n NOODLES:");
    display("   • Started with: " + noodlesAvailable);
    display("   • Sold: " + noodlesSold);
    display("   • Remaining: " + (noodlesAvailable - noodlesSold));
    display("   • Money earned: $" + moneyFromNoodles);
    
    display("\n MILK SHAKES:");
    display("   • Started with: " + shakesAvailable);
    display("   • Sold: " + shakesSold);
    display("   • Remaining: " + (shakesAvailable - shakesSold));
    display("   • Money earned: $" + moneyFromShakes);
    
    display("\n CHOCOLATE CAKES:");
    display("   • Started with: " + cakesAvailable);
    display("   • Sold: " + cakesSold);
    display("   • Remaining: " + (cakesAvailable - cakesSold));
    display("   • Money earned: $" + moneyFromCakes);
    
    var totalMoney = moneyFromRooms + moneyFromPizzas + moneyFromBurgers + 
                     moneyFromNoodles + moneyFromShakes + moneyFromCakes;
    
    display("\n TOTAL MONEY EARNED TODAY: $" + totalMoney);
    display("========================");
}


function runHotelSystem() {
    display("Welcome to Hotel Restaurant Management System!");
    
    
    setupInventory();
    
    
    var keepRunning = true;
    
    while (keepRunning) {
        showMenu();
        var choice = getInput("Enter your choice (1-8):");
        
        if (choice == 1) {
            bookRooms();
        } else if (choice == 2) {
            orderPizzas();
        } else if (choice == 3) {
            orderBurgers();
        } else if (choice == 4) {
            orderNoodles();
        } else if (choice == 5) {
            orderShakes();
        } else if (choice == 6) {
            orderCakes();
        } else if (choice == 7) {
            showSalesReport();
        } else if (choice == 8) {
            display(" Thank you for using our system! Goodbye! ");
            keepRunning = false;
        } else {
            display(" Please choose a number between 1 and 8!");
        }
    }
}


display("Starting Hotel Management System...");
runHotelSystem();