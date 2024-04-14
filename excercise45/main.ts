// defining a function to create a car object with optional options...
function create_car(manufacturer, model, ...options){
    // initializing a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // adding options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":")
        car [key.trim()] = value.trim();
    })

    return car;

}

// calling function to create a car object
let my_car = create_car("Toyota", "Corolla", "Color: White", "Sunroof: True", "Year: 2022")

// printing varaiable to ensure all the information is correct in the car object
console.log(my_car)