// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
// The function should always receive a manufacturer and a model name. 
var createCar = function (manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    extras.forEach(function (extra) {
        var key = Object.keys(extra)[0];
        var value = extra[key];
        car[key] = value;
    });
    return car;
};
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
var myCar = createCar("Toyota", "Camry", { color: "Blue" }, { features: ["Sunroof", "Leather Seats"] });
console.log(myCar);
