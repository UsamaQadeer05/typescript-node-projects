// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
// Call your function for three different cities, at least one of which is not in the default country.
// Write a function called describe_city() that accepts the name of a city and its country. 
var describe_city = function (city_name, country_name) {
    if (city_name === void 0) { city_name = "Karachi"; }
    if (country_name === void 0) { country_name = "Pakistan"; }
    console.log("".concat(city_name, " is in ").concat(country_name));
};
// Call your function for three different cities, at least one of which is not in the default country.
describe_city();
describe_city("Lahore");
describe_city("Shanghai", "China");
