var userNames = ["Muntaha", "Afifa", "Asra", "Admin", "Lamees"];
// using foreach loop
userNames.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("\nHello! ".concat(oneuser, " would you like to see a status report?"));
    }
    else {
        console.log("\nHello! ".concat(oneuser, " thank you for logging again."));
    }
});
