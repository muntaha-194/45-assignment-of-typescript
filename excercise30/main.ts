let userNames = ["Muntaha", "Afifa", "Asra", "Admin", "Lamees"];

// using foreach loop
userNames.forEach(oneuser =>{
    if(oneuser === "Admin"){
        console.log(`\nHello! ${oneuser} would you like to see a status report?`)
    }
    else{
        console.log(`\nHello! ${oneuser} thank you for logging again.`)
    }
})