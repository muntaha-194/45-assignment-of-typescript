let userName = ["Afifa", "Asra", "Lamees", "Admin", "Muntaha"];

userName = []

if(userName.length === 0){
    console.log("\nYour array is empty we need to find some users!")
}

else{
    userName.forEach(oneuser =>{
        if(oneuser === "Admin"){
            console.log(`\nHello! ${oneuser} would you like to see a status report?`)
        }
        else{
            console.log(`\nHello! ${oneuser} thank you for logging again.`)
        }
    })
}
