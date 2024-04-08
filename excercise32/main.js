// array of current users
var currentUsers = ["Muntaha", "Afifa", "Asra", "Lamees", "Maheen"];
// array of new users
var new_users = ["Mahnoor", "Muntaha", "Waniya", "Afifa", "Neha"];
// loop through new users to check usernames similarities
new_users.forEach(function (new_one_user) {
    // making condition for exsisting usernames
    var our_condition = currentUsers.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("\nSorry ".concat(new_one_user, " is taken."));
    }
    else {
        console.log("\nThis username ".concat(new_one_user, " is available"));
    }
});
