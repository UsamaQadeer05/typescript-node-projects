// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
// for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var vitals = {
    "Body temperature": 104,
    "Pulse rate": 35,
    "Respiratory rate": 8,
    "Blood pressure": "120/80",
    "Oxygen level": 32 // 100%
};
console.log("Does person has temperature? ".concat((vitals["Body temperature"] > 98)));
console.log("Does person has severe temperature? ".concat((vitals["Body temperature"] > 102)));
console.log("Does person immediate attention? ".concat((vitals["Body temperature"] >= 103)));
console.log("Will cold sponging helpfule? ".concat((vitals["Body temperature"] >= 103)));
console.log("Is person pulse rate is low? ".concat((vitals["Pulse rate"] < 60 || vitals["Pulse rate"] > 100)));
console.log("Is person pulse rate is normal? ".concat((vitals["Pulse rate"] >= 60 && vitals["Pulse rate"] <= 100)));
console.log("Is pacemaker will require? ".concat((vitals["Pulse rate"] >= 60 && vitals["Pulse rate"] <= 100)));
console.log("Person respiratory rate is normal ".concat(vitals["Respiratory rate"] >= 12 && vitals["Respiratory rate"] <= 18));
console.log("Person oxygen level is normal ".concat(vitals["Oxygen level"] >= 80));
console.log("Person is able to discharge from hospital ".concat(vitals["Oxygen level"] >= 50));
