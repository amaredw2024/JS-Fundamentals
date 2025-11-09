// Array of messages
const messages = ["C is fun", "Python is cool", "JavaScript is amazing"];

// Initialize an empty string
let output = "";

// Loop through the array and append each message with a newline
for (let i = 0; i < messages.length; i++) {
    output += messages[i] + "\n";
}

// Print all messages with a single console.log
console.log(output.trim());
