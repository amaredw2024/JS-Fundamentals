// Get the first argument
const arg = process.argv[2];

// Convert to integer
const size = parseInt(arg, 10);

// Check if the size is a valid positive integer
if (isNaN(size) || size <= 0) {
    console.log("Missing size");
} else {
    // Loop to print the square
    for (let i = 0; i < size; i++) {
        console.log("X".repeat(size));
    }
}
