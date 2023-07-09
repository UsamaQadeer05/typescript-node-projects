// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alien_Color: string[] = ["green", "yellow", "red"];


// • If the alien is green, print a message that the player earned 5 points.
if (alien_Color[0] == "green") {
    console.log("You have earned 5 points");
} else {
    console.log("No points were earned");
}

// • If the alien is yellow, print a message that the player earned 10 points.
if (alien_Color[1] == "yellow") {
    console.log("You have earned 10 points");
} else {
    console.log("No points were earned");
}

// • If the alien is red, print a message that the player earned 15 points.
if (alien_Color[2] == "red") {
    console.log("You have earned 15 points");
} else {
    console.log("No points were earned");
}