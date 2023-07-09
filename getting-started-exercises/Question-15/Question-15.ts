// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest 
// who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guest_lists: string[] = [
    "Haris Khan", 
    "Haroon", 
    "Jawad Ahmed", 
    "Nouman Iqbal"
];

guest_lists.forEach((element: string) => {
    console.log(`Hi ${element}, Hope you are find this in good health. I am inviting you for dinner today. Let's meet at 8:00pm at my place`);
});

console.log("\nUnfortunately Jawad Ahmed will not able to come");

let guest_index: number = guest_lists.indexOf("Jawad Ahmed");
guest_lists[guest_index] = "Zia Khan";

guest_lists.forEach((element: string) => {
    console.log(`Hi ${element}, Hope you are find this in good health. I am inviting you for dinner today. Let's meet at 8:00pm at my place`);
});