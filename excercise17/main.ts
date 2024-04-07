// creating a guest list array
let guestList = ["Afifa", "Asra", "Mahnoor", "Waniya"];

// making variable for those who can't come
let CantCome = guestList [0];

// printing message for those who can't come
console.log (CantCome, "Can't Caome Today...");

// adding or removing values from guest list array
guestList.splice(0, 1, "Maheen");

// printing message for bigger table
console.log("Good new !! We have found a bigger table for the Dinner");

// adding a new guest at starting index of array
guestList.unshift("Lamees");

// adding a new guest at ending index of array
guestList.push("Neha");

// making a variable for storing a middle index to our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// adding a new guest in between of array
guestList.splice(middleIndex, 0, "Fatima");

// printing message of updated guest list
console.log(" Updated list of our Guests");

// sending invitation message to our guests one by one
guestList.forEach(guest => console.log(`Hello!! ${guest} would u like to Dinner with me?`));

// informing that only two guests can come
console.log("Unfortunatelty! the new dinner table wouldn't arrive on time, so I can only invite two guest to Dinner with me. ");

// using while loop to remove guest from array untile 2 names remains
while(guestList.length > 2){
    let removedGuests = guestList.pop();
    console.log(`Sorry ${removedGuests} I can't you to Dinner!!`)
}

console.log("Invitation to the last 2 Guests");

guestList.forEach(lastTwo => console.log(`Lucily! ${lastTwo} you are still invited to Dinner`));

// removing remaining guests
guestList.pop();
guestList.pop();

console.log("Empty List", guestList);