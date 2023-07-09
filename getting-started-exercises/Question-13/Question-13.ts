// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples. Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”

// Suzuki Hayabusa

let examples: string[] = [
    "Exceptional Performance: The Suzuki Hayabusa is renowned for its exceptional performance. With its powerful engine and aerodynamic design, it offers unparalleled speed and acceleration. The Hayabusa can reach top speeds of over 186 mph (299 km/h), making it one of the fastest production motorcycles in the world.",
    "Iconic Styling: The Hayabusa boasts a striking and iconic design that turns heads wherever it goes. Its aggressive and sleek profile, coupled with its distinctive dual exhaust system, creates a visually captivating presence on the road. The Hayabusa's aesthetics make it an attractive choice for motorcycle enthusiasts seeking a bold and distinctive look.",
    "Advanced Technology: Suzuki has equipped the Hayabusa with advanced technology features to enhance both performance and safety. It includes features such as advanced traction control, multiple riding modes, ride-by-wire throttle system, and a high-performance braking system. These technologies contribute to a smoother and safer riding experience.",
    "Comfortable and Ergonomic: Despite its high-performance nature, the Hayabusa doesn't compromise on rider comfort. It offers a comfortable riding position with a well-padded seat, allowing for long rides without excessive fatigue. The motorcycle also features adjustable suspension, ensuring a smooth and stable ride on different terrains.",
    "Legendary Reputation: The Suzuki Hayabusa has gained a legendary reputation in the motorcycling community. It has become an icon and a symbol of speed, power, and dominance. Owning a Hayabusa represents being part of a prestigious heritage and showcases an affinity for high-performance motorcycles."
];

examples.forEach((element: string, index: number) => {
    console.log(`${index + 1}. ${element}`);
});