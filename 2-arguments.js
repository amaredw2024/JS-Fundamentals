// Get the number of arguments passed (excluding 'node' and the script name)
const argsCount = process.argv.length - 2;

if (argsCount === 0) {
    console.log("No argument");
} else if (argsCount === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
