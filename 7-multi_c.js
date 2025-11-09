// Get the first argument
const arg = process.argv[2];

// Convert it to an integer
const count = parseInt(arg, 10);

// Check if the number is valid
if (isNaN(count) || count <= 0) {
    console.log("Missing number of occurrences");
} else {
    let i = 0;
    // Loop to print "C is fun" count times
    while (i < count) {
        console.log("C is fun");
        i++;
    }
}
