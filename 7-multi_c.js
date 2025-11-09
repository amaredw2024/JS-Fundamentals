// Get the first argument
const arg = process.argv[2];

// Convert to integer
const count = parseInt(arg, 10);

// Check if the number is valid
if (isNaN(count) || count <= 0) {
    console.log("Missing number of occurrences");
} else {
    // Loop to print "C is fun" count times
    let i = 0;
    while (i < count) {
        console.log("C is fun");
        i++;
    }
}
