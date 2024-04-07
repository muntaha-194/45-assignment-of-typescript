// creating a guest list array
var guestList = ["Afifa", "Asra", "Sarah"];
// making variable for those who can't come
var CantCome = guestList[0];
// printing message for those who can't come
console.log(CantCome, "Can't Caome Today...");
// adding or removing values from guest list array
guestList.splice(0, 1, "Maheen");
// printing message for bigger table
console.log("Good new !! We have found a bigger table for the Dinner");
// adding a new guest at starting index of array
guestList.unshift("Lamees");
// adding a new guest at ending index of array
guestList.push("Neha");
// making a variable for storing a middle index to our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// adding a new guest in between of array
guestList.splice(middleIndex, 0, "Fatima");
// printing message of updated guest list
console.log(" Updated list of our Guests");
// sending invitation message to our guests one by one
guestList.forEach(function (guest) { return console.log("Hello!! ".concat(guest, " would u like to Dinner with me?")); });
