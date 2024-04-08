var apple = "apple";
var upperCaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["Apple", "Banana", "Orange"];
// test for equality and unequality for strings
console.log("\nIs apple equals to apple?");
console.log(apple == "apple");
console.log("\nIs apple not equals to apple?");
console.log(apple != "apple");
// test for lower case function
console.log("\nIs APPLE equals to apple after converting into lowercase?");
console.log(upperCaseApple.toLocaleLowerCase() == "apple");
console.log("\nIs APPLE not equals to apple after converting into lowercase?");
console.log(upperCaseApple.toLocaleLowerCase() != "apple");
// numerical tests
console.log("\nIs ten not equals to twenty?");
console.log(ten != twenty);
console.log("\nIs ten equals to twenty?");
console.log(ten == twenty);
// < >
console.log("\nIs ten greater than 0?");
console.log(ten > 0);
console.log("\nIs twenty less than 10?");
console.log(twenty < 10);
// greater than and equal to
console.log("\nIs ten greater than and equals to 8?");
console.log(ten >= 8);
// less than and equal to
console.log("\nIs twenty less than and equals to 8?");
console.log(twenty <= 8);
// using "&&"
console.log("\nTwenty not equals to 10 and Twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\nTwenty not equals to 10 and Twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
//using "||"
console.log("\ntwenty is greater than 50 OR twenty is equals to 20");
console.log(twenty > 50 || 20 == 20);
console.log("\ntwenty is greater than 50 OR twenty is not equals to 20");
console.log(twenty > 50 || 20 != 20);
// test whether item is included in array
console.log("\nIs orange included in my Array?");
console.log(fruits.includes("Orange"));
// not included
console.log("\nIs orange not included in my Array?");
console.log(!fruits.includes("Orange"));
