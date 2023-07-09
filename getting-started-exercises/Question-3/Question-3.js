// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var _name = "Jack";
console.log("Lowercase: ".concat(_name.toLocaleLowerCase()));
console.log("Uppercase: ".concat(_name.toLocaleUpperCase()));
console.log("Titlecase: ".concat(_name.replace(_name.charAt(0), _name.charAt(0).toLocaleUpperCase())));
