// making a function

function make_shirt(size: string = "Large", printMessage: string = "I Love TypeScript"){
    console.log(`\nCreating a ${size} size shirt with the ${printMessage} text on shirt`)
}

// calling function with default values
make_shirt();

// calling a function now with medium size
make_shirt("Medium");

// calling a function now with small size and different message
make_shirt("Small", "I Love JavaScript");