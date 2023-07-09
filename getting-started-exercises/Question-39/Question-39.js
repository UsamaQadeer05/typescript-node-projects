// 39. City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this: "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
// Write a function called city_country() that takes in the name of a city and its country.
var city_country = function (city, country) {
    // The function should return a string formatted like this: "Lahore, Pakistan"
    return "".concat(city, ", ").concat(country);
};
// Call your function with at least three city-country pairs, and print the value that’s returned.
console.log(city_country("Rawalpindi", "Pakistan"));
console.log(city_country("Shanghai", "China"));
console.log(city_country("Istanbul", "Turkiye"));
