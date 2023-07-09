// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list 
// at the end of your program.
var invited_guests = [
    "Haris Khan",
    "Haroon",
    "Zia Khan",
    "Nouman Iqbal",
    "Zeeshan Hanif",
    "Aamir Pinger",
    "Adil Altaf"
];
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Unfortunately, I can invite only two people for dinner");
var guest_length = invited_guests.length;
while (invited_guests.length > 2) {
    console.log("Hi, I am really sorry I can\u2019t invite you for a dinner.");
    invited_guests.pop();
}
// Removing guests from invitation lists
// invited_guests.forEach((element: string, index: number) => {
//     console.log(guest_length);
//     console.log(index);
//     if(index <= (guest_length - 2)){
//         console.log(`Hi ${element}! I am really sorry I can’t invite you for a dinner.`);
//         invited_guests.pop();
// console.log(invited_guests);
//     }
// });
// console.log(guest_length);
// console.log(invited_guests);
// Invited remaining guets
invited_guests.forEach(function (guest) {
    console.log("Hi ".concat(guest, "! I have shrinkage my invitation list but still you are invited."));
});
// Removing remaining 2 guests
invited_guests = [];
// Printing guest lists
invited_guests.forEach(function (element) {
    console.log("Hi ".concat(element, "!"));
});
