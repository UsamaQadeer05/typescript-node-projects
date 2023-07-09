// 41. Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


// Make a array of magician’s names.
let magician_names: string[] = [
    "David Copperfield",
    "Penn Jillette and Teller (Penn & Teller)",
    "Criss Angel",
    "Dynamo",
    "Derren Brown"
];

// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
const show_magicians = (magician_names: string[]) => {
    magician_names.forEach(name => {
        console.log(name);
    });
}

show_magicians(magician_names);