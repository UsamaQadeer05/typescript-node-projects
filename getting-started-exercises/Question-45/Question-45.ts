// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

// Write a function that stores information about a car in a Object.
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

// The function should always receive a manufacturer and a model name. 
const createCar = (
    manufacturer: string,
    model: string,
    ...extras: { [key: string]: any }[]
): Car => {
    const car: Car = {
        manufacturer,
        model,
    };

    extras.forEach((extra) => {
        const key = Object.keys(extra)[0];
        const value = extra[key];
        car[key] = value;
    });

    return car;
}

// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
const myCar = createCar(
    "Toyota",
    "Camry",
    { color: "Blue" },
    { features: ["Sunroof", "Leather Seats"] }
);

console.log(myCar);