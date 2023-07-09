// 11. Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.

let names: string[] = ["Haris Khan", "Haroon Sadaat", "Jawad Ahmed", "Nouman Iqbal"];

names.forEach((element: string, index: number) => {
    console.log(element);
});