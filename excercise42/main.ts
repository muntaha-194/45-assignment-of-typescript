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

// calling make_great function to modify magicians name
let great_magicians = make_great(magician_name);

// calling show_magicians that show modified list of magicians
show_magicians(great_magicians);