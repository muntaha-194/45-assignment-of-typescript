function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("\n".concat(city, " is in ").concat(country, "."));
}
// calling a function
describe_city("Karachi");
describe_city("Lahore");
describe_city("London", "England");
