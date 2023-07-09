{// 43. Unchanged Magicians: Start with your work from Exercise 42.
    // Call the function make_great() with a copy of the array of magicians’ names. 
    // Because the original array will be unchanged, return the new array and store it in a separate array. 
    // Call show_magicians() with each array to show that you have one array of the original names 
    // and one array with the Great added to each magician’s name.


    // Unchanged Magicians: Start with your work from Exercise 40.
    let magician_names: string[] = [
        "David Copperfield",
        "Penn Jillette and Teller (Penn & Teller)",
        "Criss Angel",
        "Dynamo",
        "Derren Brown"
    ];

    // Pass the array to a function called show_best_magicians(), which prints the name of each magician in the array.
    const show_magicians = (magician_names: string[]) => {
        magician_names.forEach(name => {
            console.log(name);
        });
    }

    // Modifying the magician_names lists
    const make_great = (): string[] => {
        return magician_names.map((name: string, index: number) => `Great ${name}`)
    }

    const magician_names_copy: string[] = make_great();

    // Displaying original magician_names list
    show_magicians(magician_names);

    // Displaying modified magician_names list
    show_magicians(magician_names_copy);
}