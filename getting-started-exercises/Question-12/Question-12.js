// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, but each message should be personalized with the person’s name.
var best_friends = ["Haris Khan", "Haroon Sadaat", "Jawad Ahmed", "Nouman Iqbal"];
best_friends.forEach(function (element) {
    console.log("Greetings ".concat(element, "! Hope you are well today."));
});
