// making array for countries in original order
let countriesToVisit: string[] = ["China", "Denmark","Brazil","Argentina"];
console.log("Original Order:", countriesToVisit);

// printing the array in alphabetical order with modifying the real list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// showing te array is in it's original order
console.log("Still in original order:", countriesToVisit);

// printing the array in reverse order with modifying the real list
console.log("Reverse Order:", [...countriesToVisit].reverse());

// showing te array is in it's original order
console.log("Still in original order:", countriesToVisit);

// reversing the original array
console.log("Original Array reversed:", countriesToVisit.reverse());

// printing to show that it's back to it's original order
console.log("Back to original order:", countriesToVisit.reverse());

// // printing to show that it's back in alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// reversing the original array (again)
console.log("Original Array reversed again:", countriesToVisit.reverse());



