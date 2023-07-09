// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger 
// dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var all_guests = [
    "Haris Khan",
    "Haroon",
    "Zia Khan",
    "Nouman Iqbal"
];
all_guests.forEach(function (element) {
    console.log("Hi ".concat(element, ", Hope you are find this in good health. I just found out that a bigger dinner table so I am inviting 3 more guests."));
});
// • Add one new guest to the beginning of your array.
all_guests = __spreadArray(["Zeeshan Hanif"], all_guests, true);
// • Add one new guest to the middle of your array. 
var middleIndex = Math.floor(all_guests.length / 2);
all_guests = __spreadArray(__spreadArray(__spreadArray([], all_guests.slice(0, middleIndex), true), [
    "Aamir Pinger"
], false), all_guests.slice(middleIndex), true);
// • Use append() to add one new guest to the end of your list. 
all_guests.push("Adil Altaf");
// • Print a new set of invitation messages, one for each person in your list.
all_guests.forEach(function (element) {
    console.log("Hi ".concat(element, ", Hope you are find this in good health. I am inviting you for dinner today. Let's meet at 8:00pm at my place"));
});
