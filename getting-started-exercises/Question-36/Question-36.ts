// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


// Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
const make_shirt = (
    size: number,
    text: string
) => {
    console.log(`Size of a shirt should be ${size} & text should be printed on shirt are ${text}`);
}

// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
make_shirt(24, "Never stop learning because life never stops teaching!");
