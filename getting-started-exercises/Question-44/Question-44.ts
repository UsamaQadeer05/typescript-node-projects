// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.


// Write a function that accepts a array of items a person wants on a sandwich.
const make_sanwich = (...items: string[]) => {
    // and it should print a summary of the sandwich that is being ordered. 
    items.forEach(item => {
        console.log(item);
    });
}

// Call the function three times, using a different number of arguments each time.
make_sanwich("Chicken");
make_sanwich("Chicken", "Mayoneese");
make_sanwich("Chicken", "Mayoneese", "Chick Spread");