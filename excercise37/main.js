// making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("\nCreating a ".concat(size, " size shirt with the ").concat(printMessage, " text on shirt"));
}
// calling function with default values
make_shirt();
// calling a function now with medium size
make_shirt("Medium");
// calling a function now with small size and different message
make_shirt("Small", "I Love JavaScript");
