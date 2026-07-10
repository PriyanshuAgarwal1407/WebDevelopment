// An operator is a special symbol or keyword that performs an operation on one or more values (operands).

// ------------------------------------------------------------------------------------------------
/*
Assignment operators are used to assign values to variables. The most common assignment operator is the equal sign (=), which assigns the value on the right to the variable on the left.

let score = 100; // Basic Assignment

// Compound Assignment
score += 10; // Add and Assign
score -= 5;  // Subtract and Assign
score *= 2;  // Multiply and Assign
score /= 2;  // Divide and Assign
score %= 3;  // Modulus and Assign
score **= 2; // Exponentiation and Assign

*/

// ------------------------------------------------------------------------------------------------
/* 
Arithmetic operators are used to perform mathematical operations on numbers.

let a = 10;
let b = 5;

let sum = a + b;        // Addition
let difference = a - b; // Subtraction
let product = a * b;    // Multiplication
let quotient = a / b;   // Division
let remainder = a % b;  // Modulus
let power = a ** b;     // Exponentiation

// Increment & Decrement
a++;  // Post-increment
b--;  // Post-decrement
++c;  // Pre-increment
--d;  // Pre-decrement

let x = 10;
console.log(x++); // Post-increment: prints 10, then x becomes 11
console.log(x);   // prints 11 


let y = 5;
console.log(++y); // Pre-increment: y becomes 6, then prints 6
console.log(y);   // prints 6
*/

// ------------------------------------------------------------------------------------------------
/* 
Comparison operators are used to compare two values and return a boolean value (true or false).

let x = 10;
let y = 5;

let isEqual = x == y;               // Equal to Performs type coercion
let isNotEqual = x != y;            // Not equal to Performs type coercion
let isStrictEqual = x === y;        // Strict equal to (checks value and type)
let isStrictNotEqual = x !== y;     // Strict not equal to (checks value and type)
let isGreaterThan = x > y;          // Greater than
let isLessThan = x < y;             // Less than
let isGreaterThanOrEqual = x >= y;  // Greater than or equal to
let isLessThanOrEqual = x <= y;     // Less than or equal to
*/

// ------------------------------------------------------------------------------------------------
/* 
Logical operators are used to combine multiple boolean expressions.

let a = true;
let b = false;

let andResult = a && b; // Logical AND
let orResult = a || b;  // Logical OR
let notResult = !a;     // Logical NOT

// Truthy & Falsy Values
// In JavaScript, values can be "truthy" or "falsy". Falsy values include false, 0, "", null, undefined, and NaN. All other values are considered truthy.

let value1 = 0;       // Falsy
let value2 = "Hello"; // Truthy

if (value1 && value2) {
    console.log("Both are truthy");
} else {
    console.log("At least one is falsy"); // This will be printed
}

*/

// ------------------------------------------------------------------------------------------------
/* 
Bitwise operators are used to perform operations on the binary representations of numbers.

let a = 5;  // Binary: 0101
let b = 3;  // Binary: 0011

let andResult = a & b;    // Bitwise AND: 0001 (1)
let orResult = a | b;     // Bitwise OR: 0111 (7)
let xorResult = a ^ b;    // Bitwise XOR: 0110 (6)
let notResult = ~a;       // Bitwise NOT: 1010 (-6)
let leftShift = a << 1;   // Left shift: 1010 (10)
let rightShift = a >> 1;  // Right shift: 0010 (2)
let unsignedRightShift = a >>> 1; // Unsigned right shift: 0010 (2)
*/

// ------------------------------------------------------------------------------------------------
/* 
Ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, a value if the condition is true, and a value if the condition is false.

Syntax: condition ? valueIfTrue : valueIfFalse;

let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.
*/

// ------------------------------------------------------------------------------------------------
/* 
Type operators are used to check the type of a variable or value.

let num = 42;
let str = "Hello";
let bool = true;

console.log(typeof num);  // Output: "number"
console.log(typeof str);  // Output: "string"
console.log(typeof bool); // Output: "boolean"

// instanceof operator checks if an object is an instance of a specific class or constructor function.

class Person {}
let person = new Person();

console.log(person instanceof Person); // Output: true
*/

// ------------------------------------------------------------------------------------------------
/* 
Comma operator allows you to evaluate multiple expressions and return the value of the last expression.

let x = (1, 2, 3); // x will be assigned the value 3
console.log(x);    // Output: 3

let y = (console.log("Hello"), console.log("World"), 42); // y will be assigned the value 42
console.log(y);    // Output: 42
*/

// ------------------------------------------------------------------------------------------------
/* 
Unary operators operate on a single operand. They can be used to perform various operations, such as negation, incrementing, or type conversion.

let num = 5;

let negation = -num; // Negation: -5
let increment = ++num; // Pre-increment: 6
let decrement = --num; // Pre-decrement: 5

// Unary plus operator converts its operand to a number.
let strNum = "42";
let convertedNum = +strNum; // convertedNum will be 42 (number)
*/  

// ------------------------------------------------------------------------------------------------
/* 
Operator Precedence determines the order in which operators are evaluated in an expression. Operators with higher precedence are evaluated before operators with lower precedence.

let result = 3 + 4 * 2; // Multiplication has higher precedence than addition
console.log(result);    // Output: 11

let resultWithParentheses = (3 + 4) * 2; // Parentheses change the order of evaluation
console.log(resultWithParentheses);      // Output: 14

// Order of Precedence (from highest to lowest):
// 1. Parentheses ()
// 2. Exponentiation (**)
// 3. Multiplication (*), Division (/), Modulus (%)
// 4. Addition (+), Subtraction (-)
// 5. Relational operators (<, <=, >, >=)
// 6. Equality operators (==, !=, ===, !==)
// 7. Logical AND (&&)
// 8. Logical OR (||)
// 9. Assignment (=, +=, -=, *=, /=, %=, **=)
*/

// ------------------------------------------------------------------------------------------------
// Floating Point Precision

let a = 0.1;
let b = 0.2;
let sum = a + b;
console.log(sum); // Output: 0.30000000000000004 (due to floating-point precision issues)

/*
Reason: JavaScript uses the IEEE 754 standard for representing floating-point numbers, which can lead to precision issues when performing arithmetic operations with decimal numbers.

Solution: To mitigate floating-point precision issues, you can use techniques such as rounding the result to a fixed number of decimal places or using libraries that handle decimal arithmetic more accurately.

Example:
let preciseSum = parseFloat((a + b).toFixed(2));
console.log(preciseSum); // Output: 0.3
*/


// ------------------------------------------------------------------------------------------------
/*
Type Coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another. JavaScript is a loosely typed language, which means that variables can hold values of any type, and the language will attempt to convert values as needed during operations.

Types of Type Coercion:
1. Implicit Coercion: This occurs when JavaScript automatically converts a value to a different type during an operation. For example, when using the + operator with a number and a string, JavaScript will convert the number to a string and concatenate them.

Example:
let num = 5;
let str = "10";
let result = num + str; // Implicit coercion: num is converted to a string
console.log(result);    // Output: "510"

2. Explicit Coercion: This occurs when you manually convert a value from one type to another using functions or methods. For example, you can use the Number() function to convert a string to a number.

Example:
let strNum = "42";
let convertedNum = Number(strNum);  // Explicit coercion
console.log(convertedNum);          // Output: 42


// Convert to number using Number()
// Convert to string using String()
// Convert to boolean using Boolean()
// parseInt() and parseFloat() for converting strings to integers and floating-point numbers, respectively.
    parseInt("100px") // Output: 100
    parseFloat("3.14abc") // Output: 3.14
// Unary + operator can also be used for explicit coercion to number:
    let str = "123";
    let num = +str; // Explicit coercion to number
    console.log(num); // Output: 123
*/