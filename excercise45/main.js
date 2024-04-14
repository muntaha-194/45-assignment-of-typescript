// defining a function to create a car object with optional options...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // initializing a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // adding options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// calling function to create a car object
var my_car = create_car("Toyota", "Corolla", "Color: White", "Sunroof: True", "Year: 2022");
// printing varaiable to ensure all the information is correct in the car object
console.log(my_car);
