// defining a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// defining an array containing magicians name
var magician_names = ["Harry Potter", "Asra", "Afifa", "Muntaha"];
// calling the function to print each name
show_magicians(magician_names);
