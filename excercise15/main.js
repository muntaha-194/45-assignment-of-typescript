// creating a guest list array
var guestList = ["Afifa", "Asra", "Sarah"];
// making a variable for those who can't come
var CantCome = guestList[0];
// printing the name of those who can't come
console.log(CantCome, "Can't Caome Today...");
// adding or removing values from guest list array
guestList.splice(0, 1, "Maheen");
// printing message for bigger table
console.log("Good news!! We have found a bigger table for Dinner.");
// adding a new value at starting of array
guestList.unshift("Lamees");
// adding a new value at ending of array
guestList.push("Neha");
// getting a midle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// adding a new value in between of array
guestList.splice(middleIndex, 0, "Fatima");
// printing message for updated list
console.log("Updated list of our guests");
// sending invitation message to our guests one by one
guestList.forEach(function (aguest) { return console.log("Hello!! ".concat(aguest, " would u like to Dinner with me?")); });
