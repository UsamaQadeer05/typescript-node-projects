// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

let guests: string[] = [
    "Haris Khan", 
    "Haroon", 
    "Jawad Ahmed", 
    "Nouman Iqbal"
];

guests.forEach((element: string) => {
    console.log(`Hi ${element}, Hope you are find this in good health. I am inviting you for dinner today. Let's meet at 8:00pm at my place`);
});