// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list 
// at the end of your program.

let invited_guests: string[] = [
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

let guest_length = invited_guests.length;

// Removing guests from invitation lists
while (invited_guests.length > 2) {
    console.log(`Hi, I am really sorry I can’t invite you for a dinner.`);
    invited_guests.pop();
}

// Invited remaining guets
invited_guests.forEach((guest: string) => {
    console.log(`Hi ${guest}! I have shrinkage my invitation list but still you are invited.`);
});

// Removing remaining 2 guests
invited_guests = [];

// Printing guest lists
invited_guests.forEach((element: string) => {
    console.log(`Hi ${element}!`);
});