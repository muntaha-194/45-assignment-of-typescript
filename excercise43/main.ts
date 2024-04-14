// defining the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`)
}

// defining an array of magician name
let magician_name = ["Harry Potter", "Muntaha", "Afifa", "Asra"]

// making a copy of original array through .slice() function
let copy_magician_names = magician_name.slice()

// modifying the copied array to include "The Great" with their names
let  copy_great_magicians = make_great(copy_magician_names);

// show both arrays original and copied
// original
console.log("\nOriginal array:\n");
show_magicians(magician_name);
// copied
console.log("\nCopied array:\n");
show_magicians(copy_great_magicians);

