var pizza = ["Chicken Tikka", "Malai Cheese", "Fajita"];
//using for-loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("\nI love ".concat(onePizza, " pizza"));
}
// printing a message outside for-loop
console.log("\nPizza is love");
console.log("I love to eat pizza");
