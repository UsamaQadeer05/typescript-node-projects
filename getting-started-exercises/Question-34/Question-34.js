// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
// and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
// The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
// such as I really love pizza!
// Store these pizza names in a array
var pizza_names = ["Pepperoni", "Cheeze", "BBQ"];
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
pizza_names.forEach(function (element) {
    console.log("I like ".concat(element, " pizza"));
});
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
// The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
// such as I really love pizza!
console.log("I absolutely love pizza! It's my all-time favorite food. Pizza is pure deliciousness in every bite. It brings me immense joy and satisfaction. I can't resist the temptation of pizza and always crave its cheesy goodness. It's simply irresistible!");
