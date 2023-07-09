// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
// write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let user_password: string = "Unique@321";
let entered_password: string = "Unique@321";

// • Tests for equality and inequality with strings
console.log(user_password == entered_password);

// • Tests using the lower case function
console.log(user_password.toLocaleLowerCase() === entered_password);

let person1_age: number = 24;
let person2_age: number = 40;

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// Equality
console.log(person1_age === person2_age);

// Inequality
console.log(person1_age !== person2_age);

// Greater than
console.log(person1_age > person2_age);

// Less than
console.log(person1_age < person2_age);

// Greater than or equal to
console.log(person1_age >= person2_age);

// Less than or equal to
console.log(person1_age <= person2_age);

let person3_age: number = 40;

// • Tests using "and" and "or" operators

// "And" operator (&&)
console.log(person1_age > person2_age && person1_age < person3_age);

// "Or" operator (||)
console.log(person1_age > person2_age || person1_age > person2_age);


let users: string[] = [ "Zia Khan", "Zeeshan Hanif", "Aamir Pinger", "Adil Altaf" ];

// • Test whether an item is in a array
console.log(users.indexOf("Zia Khan") != -1 ? "User is exist" : "No user found");

// • Test whether an item is not in a array
console.log(users.indexOf("Kamran") != -1 ? "User is exist" : "No user found");