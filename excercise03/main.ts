let personName = "Muntaha Siddiqui";
console.log("Main",(personName));

// Lower Case
console.log(personName.toLowerCase());

// Upper Case
console.log(personName.toUpperCase());

// Title Case
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));