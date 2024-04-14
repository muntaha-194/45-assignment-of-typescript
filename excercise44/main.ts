// defining a function with a rest parameter that accept items arguments representing our sandwich
function make_sandwich(...items: string[]) {

  console.log("Making a Sandwich with the following items:\n");

  items.forEach((singleItem) => console.log("-" + singleItem));

  console.log("\nNow Enjoy Your Sandwich\n");
}

// Calling the function 3 times with 3 different arguments
make_sandwich("Bread", "Chicken", "Cheese", "Mayo");

make_sandwich("Bread", "Cheese");

make_sandwich("Bread", "Lettuce", "Mayo", "Yogurt", "Ketchup", "Chicken")
