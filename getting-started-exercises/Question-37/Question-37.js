// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
var make_Tshirt = function (size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("Size ".concat(size, ", text: ").concat(text));
};
make_Tshirt();
make_Tshirt("Medium");
make_Tshirt("Small", "I love Next 13");
