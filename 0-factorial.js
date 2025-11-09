// Get the first argument and convert to integer
const num = parseInt(process.argv[2], 10);

// Recursive factorial function
function factorial(n) {
    if (isNaN(n) || n <= 0) return 1; // Factorial of NaN or non-positive numbers is 1
    return n * factorial(n - 1);
}

// Print the factorial
console.log(factorial(num));
