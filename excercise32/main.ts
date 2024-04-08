// array of current users
let currentUsers = ["Muntaha", "Afifa", "Asra", "Lamees", "Maheen"];

// array of new users
let new_users = ["Mahnoor", "Muntaha", "Waniya","Afifa", "Neha"];

// loop through new users to check usernames similarities
new_users.forEach(new_one_user =>{

    // making condition for exsisting usernames
    let our_condition = currentUsers.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(our_condition){
       console.log(`\nSorry ${new_one_user} is taken.`)
    }
    else{
        console.log(`\nThis username ${new_one_user} is available`)
    }
})