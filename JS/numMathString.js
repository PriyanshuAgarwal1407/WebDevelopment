// -------------------------------------------------------------------------------------------------
/*
Number in JS is a primitive data type that represents numeric values. It can be used for mathematical operations, comparisons, and more. In JavaScript, numbers can be integers or floating-point values, and they can be represented in various formats such as decimal, hexadecimal, and exponential notation.

JavaScript has only one numeric type: number, which can represent both integer and floating-point values. The Number type has a range of approximately ±1.7976931348623157e+308 for positive numbers and ±5e-324 for negative numbers.
*/

let num1 = 42;   // Integer
let num2 = 3.45678900; // Floating-point number
console.log("num1:", num1); // Output: num1: 42
console.log("num2:", num2.toFixed(2)); // Output: num2: 3.46

let c = num2.toFixed(2); 
console.log(typeof c); // Output: string

console.log(num2.toPrecision(4));    // Output: 3.457
console.log(num2.toExponential(2));  // Output: 3.46e+0
console.log(num2.toString());        // Output: 3.456789
console.log(num2.toString(16));      // Output: 3.456789 in hexadecimal format


let a = new Number(10); // Creating a Number object
console.log(a);         // Output: [Number: 10]
console.log(typeof a);  // Output: object

let b = 20;             // Creating a primitive number
console.log(b);         // Output: 20
console.log(typeof b);  // Output: number

console.log(a == b);  // Output: true (value comparison)
console.log(a === b); // Output: false (type comparison)


// --------------------------------------------------------------------------------------------------

// Exponential notation is a way to represent numbers that are too large or too small to be conveniently written in decimal form. In JavaScript, you can use exponential notation by using the letter "e" or "E" followed by the exponent.

let largeNumber = 1.23e+6; // Represents 1.23 * 10^6
let smallNumber = 4.56e-3; // Represents 4.56 * 10^-3

console.log("Large Number:", largeNumber); // Output: Large Number: 1230000
console.log("Small Number:", smallNumber); // Output: Small Number: 0.00456

// You can also use exponential notation in calculations
let result = largeNumber * smallNumber;
console.log("Result of multiplication:", result); // Output: Result of multiplication: 5608.8   

// --------------------------------------------------------------------------------------------------

// Hexadecimal notation is a base-16 number system that uses the digits 0-9 and the letters A-F to represent values. In JavaScript, you can represent hexadecimal numbers by prefixing them with "0x" or "0X".

let hexNumber = 0x1A;      // Represents 26 in decimal
console.log("Hexadecimal Number:", hexNumber); // Output: Hexadecimal Number: 26

// You can also convert a decimal number to hexadecimal using the toString() method
let decimalNumber = 255;
let hexString = decimalNumber.toString(16); // Convert to hexadecimal
console.log("Decimal to Hexadecimal:", hexString); // Output: Decimal to Hexadecimal: ff

// You can convert a hexadecimal string back to a decimal number using parseInt()
let hexString2 = "1A";
let decimalFromHex = parseInt(hexString2, 16); // Convert from hexadecimal to decimal
console.log("Hexadecimal to Decimal:", decimalFromHex); // Output: Hexadecimal to Decimal: 26   

// --------------------------------------------------------------------------------------------------

// Number methods in JavaScript provide various functionalities to work with numbers. Some commonly used methods include:

let num = 123.456;

// toFixed() - Formats a number using fixed-point notation
console.log(num.toFixed(2)); // Output: 123.46

// toPrecision() - Formats a number to a specified length
console.log(num.toPrecision(4)); // Output: 123.5

// toExponential() - Returns a string representing the number in exponential notation
console.log(num.toExponential(2)); // Output: 1.23e+2

// toString() - Converts a number to a string
console.log(num.toString()); // Output: "123.456"

// parseInt() - Parses a string and returns an integer
let strNum = "42";
console.log(parseInt(strNum)); // Output: 42

// parseFloat() - Parses a string and returns a floating-point number
let strFloat = "3.14";
console.log(parseFloat(strFloat)); // Output: 3.14

// --------------------------------------------------------------------------------------------------
// Special Number Values:

// Infinity: Represents positive or negative infinity. It is returned when a number exceeds the maximum representable value or when dividing by zero.

// -Infinity: Represents negative infinity. It is returned when a number exceeds the minimum representable value or when dividing by zero in the negative direction.
console.log(1 / 0);  // Output: Infinity
console.log(typeof Infinity); // Output: "number"
console.log(-1 / 0); // Output: -Infinity

// NaN (Not-a-Number): Represents a value that is not a valid number. It is returned when an operation cannot produce a meaningful numeric result, such as dividing zero by zero or attempting to convert a non-numeric string to a number.
console.log(0 / 0); // Output: NaN
console.log(typeof NaN); // Output: "number"

// Interesting Fact: In JavaScript, NaN is the only value that is not equal to itself. This means that if you compare NaN with NaN using the equality operator (== or ===), it will return false.
console.log(NaN === NaN); // Output: false

// --------------------------------------------------------------------------------------------------
// Number properties in JavaScript provide information about the Number type. Some commonly used properties include:

console.log("Maximum Value:", Number.MAX_VALUE); // Output: Maximum Value: 1.7976931348623157e+308
console.log("Minimum Value:", Number.MIN_VALUE); // Output: Minimum Value: 5e-324
console.log("Positive Infinity:", Number.POSITIVE_INFINITY); // Output: Positive Infinity: Infinity
console.log("Negative Infinity:", Number.NEGATIVE_INFINITY); // Output: Negative Infinity: -Infinity
console.log("NaN (Not-a-Number):", Number.NaN); // Output: NaN (Not-a-Number): NaN

// --------------------------------------------------------------------------------------------------
// Checking numbers

// old method
isNaN(42);      // false
isNaN("Hello"); // true

// new method
Number.isNaN(42);      // false
Number.isNaN("Hello"); // false
Number.isNaN(NaN);     // true


// Checking if a value is finite

Number.isFinite(42);      // true
Number.isFinite("Hello"); // false
Number.isFinite(NaN);     // false
Number.isFinite(Infinity); // false

// Checking if a value is an integer

Number.isInteger(42);      // true
Number.isInteger(3.14);    // false
Number.isInteger("Hello"); // false
Number.isInteger(NaN);     // false
Number.isInteger(Infinity); // false

// --------------------------------------------------------------------------------------------------
// Math Object in JavaScript provides various mathematical functions and constants. Some commonly used methods include:

console.log("Math.sqrt(16):", Math.sqrt(16));   // Output: 4
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // Output: 8
console.log("Math.abs(-5):", Math.abs(-5));     // Output: 5
console.log("Math.PI:", Math.PI); // Output: Math.PI: 3.141592653589793
console.log("Math.E:", Math.E);   // Output: Math.E: 2.718281828459045
console.log("Math.max(10, 5, 20):", Math.max(10, 5, 20)); // Output: 20
console.log("Math.min(10, 5, 20):", Math.min(10, 5, 20)); // Output: 5

// Rounding methods
console.log("Math.round(3.7):", Math.round(3.7)); // Output: 4
console.log("Math.floor(3.7):", Math.floor(3.7)); // Output: 3
console.log("Math.ceil(3.2):", Math.ceil(3.2));   // Output: 4

// Random number generation
console.log("Random number between 0 and 1:", Math.random()); // Output: Random number between 0 and 1: <random_value>

// Math.floor(Math.random() * (max - min + 1)) + min is a common formula to generate a random integer between a specified range (inclusive of both min and max). Here's how it works:
console.log("Random number between 1 and 10:", Math.floor(Math.random() * 10) + 1); // Output: Random number between 1 and 10: <random_value>
console.log("Random number between 50 and 100:", Math.floor(Math.random() * (100 - 50 + 1)) + 50); // Output: Random number between 50 and 100: <random_value>
console.log("Random number between -10 and 10:", Math.floor(Math.random() * (10 - (-10) + 1)) + (-10)); // Output: Random number between -10 and 10: <random_value>


// Trigonometric functions
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // Output: 1
console.log("Math.cos(Math.PI):", Math.cos(Math.PI));         // Output: -1
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4)); // Output: 1

// Exponential and logarithmic functions
console.log("Math.exp(1):", Math.exp(1));           // Output: 2.718281828459045
console.log("Math.log(Math.E):", Math.log(Math.E)); // Output: 1
console.log("Math.log10(100):", Math.log10(100));   // Output: 2
console.log("Math.log2(8):", Math.log2(8));         // Output: 3
console.log("Math.LN10:", Math.LN10);               // Output: 2.302585092994046
console.log("Math.SQRT2:", Math.SQRT2);             // Output: 1.4142135623730951





// --------------------------------------------------------------------------------------------------

// String: A String is a sequence of characters used to represent text.
let name = "Priyanshu";         // String literal
let greeting = 'Hello, World!'; // String literal using single quotes
let message = `Welcome, ${name}!`; // Template literal using backticks
console.log(name);
console.log(greeting);
console.log(message); // Output: Welcome, Priyanshu!

// String methods in JavaScript provide various functionalities to work with strings. Some commonly used methods include:
let str = "Hello, JavaScript!";

// length - Returns the length of the string
console.log("Length:", str.length); // Output: Length: 18

// toUpperCase() - Converts the string to uppercase
console.log("Uppercase:", str.toUpperCase()); // Output: Uppercase: HELLO, JAVASCRIPT!

// toLowerCase() - Converts the string to lowercase
console.log("Lowercase:", str.toLowerCase()); // Output: Lowercase: hello, javascript!

// indexOf() - Returns the index of the first occurrence of a specified value
console.log("Index of 'JavaScript':", str.indexOf("JavaScript")); // Output: Index of 'JavaScript': 7

// lastIndexOf() - Returns the index of the last occurrence of a specified value
console.log("Last index of 'o':", str.lastIndexOf("o")); // Output: Last index of 'o': 4

// slice() - Extracts a section of the string and returns it as a new string
console.log("Slice (7, 17):", str.slice(7, 17)); // Output: Slice (7, 17): JavaScript

// substring() - Returns a part of the string between two specified indices
console.log("Substring (7, 17):", str.substring(7, 17)); // Output: Substring (7, 17): JavaScript

// replace() - Replaces a specified value with another value in the string
console.log("Replace 'JavaScript' with 'JS':", str.replace("JavaScript", "JS")); // Output: Replace 'JavaScript' with 'JS': Hello, JS!

// split() - Splits the string into an array of substrings based on a specified separator
console.log("Split by space:", str.split(" ")); // Output: Split by space: [ 'Hello,', 'JavaScript!' ]

// trim() - Removes whitespace from both ends of the string
let strWithSpaces = "   Hello, World!   ";
console.log("Trimmed string:", strWithSpaces.trim()); // Output: Trimmed string: Hello, World!

// charAt() - Returns the character at a specified index
console.log("Character at index 1:", str.charAt(1)); // Output: Character at index 1: e

// charCodeAt() - Returns the Unicode of the character at a specified index
console.log("Unicode of character at index 1:", str.charCodeAt(1)); // Output: Unicode of character at index 1: 101

// includes() - Checks if the string contains a specified value
console.log("Includes 'JavaScript':", str.includes("JavaScript")); // Output: Includes 'JavaScript': true

// startsWith() - Checks if the string starts with a specified value
console.log("Starts with 'Hello':", str.startsWith("Hello")); // Output: Starts with 'Hello': true

// endsWith() - Checks if the string ends with a specified value
console.log("Ends with '!':", str.endsWith("!")); // Output: Ends with '!': true

// repeat() - Returns a new string with a specified number of copies of the original string
console.log("Repeat 3 times:", str.repeat(3)); // Output: Repeat 3 times: Hello, JavaScript!Hello, JavaScript!Hello, JavaScript!


// --------------------------------------------------------------------------------------------------

// String concatenation in JavaScript is the process of combining two or more strings into a single string. You can concatenate strings using the + operator or the concat() method.

let str1 = "Hello, ";
let str2 = "World!";
let concatenatedString = str1 + str2; // Using + operator
console.log("Concatenated String:", concatenatedString); // Output: Concatenated String: Hello, World!

let concatenatedString2 = str1.concat(str2); // Using concat() method
console.log("Concatenated String using concat():", concatenatedString2); // Output: Concatenated String using concat(): Hello, World!

// Template literals (using backticks) also allow for string interpolation and multi-line strings
let name2 = "Alice";
let age = 30;
let templateLiteralString = `My name is ${name2} and I am ${age} years old.`;
console.log(templateLiteralString); // Output: My name is Alice and I am 30 years old.

// --------------------------------------------------------------------------------------------------

// String immutability in JavaScript means that once a string is created, it cannot be changed. Any operation that appears to modify a string actually creates a new string.

let originalString = "Hello";
let modifiedString = originalString.toUpperCase(); // Creates a new string
console.log("Original String:", originalString); // Output: Original String: Hello
console.log("Modified String:", modifiedString); // Output: Modified String: HELLO

// Even though we called toUpperCase() on originalString, it remains unchanged because strings are immutable in JavaScript.

// --------------------------------------------------------------------------------------------------
