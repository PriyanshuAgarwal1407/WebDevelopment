console.log("Hello, World!");


// Variable ko kaise banate hai

let name = "Priyanshu";
let age = 21;
// let age = 22; // This will cause an error
age = 30;
console.log(name , age);


const accountNumber = 1234567890;
// accountNumber = 9876543210; // This will cause an error
console.log("Account Number:", accountNumber);



// Old way of declaring variables
// var a = 10;
// var a = 20;
// console.log(a);


// if(true){
//     var a = 20;
// }
// console.log(a); // var is function scoped


// function fun(){
//     var c = 20;
// }
// console.log(c); // Error: c is not defined


// ------------------------------------------------------------------------------------
// ✅ Default to const. Use let only when reassignment is needed. Never use var in new code.
// ------------------------------------------------------------------------------------


// Datatypes in JavaScript
// Primitive Datatypes (immutable, stored by value): String, Number, Boolean, Undefined, Null, Symbol, BigInt

const name = "Priyanshu Agarwal";   // String
const greeting = 'Hello';   // String

const age = 21;  // Number
const pi = 3.14; // Number

let isStudent = true;    // Boolean
let isEmployed = false;  // Boolean

let notSet;           // undefined
const empty = null;   // intentional absence of value
const sym = Symbol("unique");
const big = 9007199254740993n; // BigInt for numbers beyond Number.MAX_SAFE_INTEGER


// ------------------------------------------------------------------------------------
/*
💡 Note: 
undefined = variable declared but not assigned. 
null = intentional "no value" assigned explicitly by the developer.
*/
// ------------------------------------------------------------------------------------

// Non-Primitive Datatypes or reference types (objects, stored by reference): Object, Array, Function
let hobbies = ["reading", "coding", "gaming"]; // Array
let person = { // Object
    name: "Priyanshu",
    age: 21,
    isStudent: true
};
function greet(){ // Function
    console.log("Hello!");
}

// typeof (Non primitive datatypes) is "object".


// ------------------------------------------------------------------------------------
/*
Identifiers: Names for variables, functions, classes. Rules:
    Must start with a letter, _, or $.
    Can contain letters, digits, _, $ (not at the start with digits).
    Case-sensitive.
    Cannot be reserved words (class, function, return, etc.).

let $price = 10;
let _isValid = true;
let user1Name = "ok";
// let 1user = "invalid";  ❌ SyntaxError
*/
// ------------------------------------------------------------------------------------


// Type Checking: typeof
/*
typeof "hi";         // "string"
typeof 42;           // "number"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof null;         // "object"  ⚠️ known quirk/bug
typeof Symbol();     // "symbol"
typeof 10n;          // "bigint"
typeof {};           // "object"
typeof [];           // "object"
typeof function(){}; // "function"
*/


// Primitive vs Non-Primitive Datatypes
/*
Primitive Datatypes:
    - Immutable (cannot be changed)
    - Stored by value
    - Examples: String, Number, Boolean, Undefined, Null, Symbol, BigInt

Non-Primitive Datatypes:
    - Mutable (can be changed)
    - Stored by reference
    - Examples: Object, Array, Function
*/