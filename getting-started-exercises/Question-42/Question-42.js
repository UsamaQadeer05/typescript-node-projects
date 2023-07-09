// 42. Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
// Make a array of magician’s names.
var magicianNames = [
    "David Copperfield",
    "Penn Jillette and Teller (Penn & Teller)",
    "Criss Angel",
    "Dynamo",
    "Derren Brown"
];
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
var make_great = function () {
    magicianNames.forEach(function (name, index) {
        magicianNames[index] = "Great ".concat(name);
    });
};
// Pass the array to a function called show_best_magicians(), which prints the name of each magician in the array.
var show_best_magicians = function (magicianNames) {
    magicianNames.forEach(function (name) {
        console.log(name);
    });
};
// Call make_great() to modify the original list
make_great();
// Call show_magicians() to see that the list has actually been modified.
show_best_magicians(magicianNames);
