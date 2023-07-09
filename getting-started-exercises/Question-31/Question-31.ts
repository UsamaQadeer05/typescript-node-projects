// 31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let user_lists: string[] = ["admin", "taco", "raymond", "jos", "stiyn"];

// • Remove all of the usernames from your array, and make sure the correct message is printed.
while (user_lists.length > 0) {
    user_lists.pop();
}

// • If the list is empty, print the message We need to find some users!
if (user_lists.length == 0) {
    console.log("We need to find some users!");
}
