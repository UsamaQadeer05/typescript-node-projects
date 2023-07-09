// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

const make_Tshirt = (
    size: string = "Large",
    text: string = "I love TypeScript"
) => {
    console.log(`Size ${size}, text: ${text}`);
}

make_Tshirt();
make_Tshirt("Medium");
make_Tshirt("Small", "I love Next 13");