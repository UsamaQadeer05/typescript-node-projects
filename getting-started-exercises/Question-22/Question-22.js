// 21. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var cities = [
    "Islamabad",
    "Lahore",
    "Peshawer",
    "Quetta",
    "Karachi",
];
// Accessing an element at an invalid index
console.log(cities[5]);
console.log(cities[cities.length - 1]);
