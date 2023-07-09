// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let _name: string = "Jack";
console.log(`Lowercase: ${_name.toLocaleLowerCase()}`);
console.log(`Uppercase: ${_name.toLocaleUpperCase()}`);
console.log(`Titlecase: ${_name.replace(_name.charAt(0), _name.charAt(0).toLocaleUpperCase())}`);
