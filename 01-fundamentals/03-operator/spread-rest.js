/*
1. spread - Expands elements of an array/object into individual items.

2. rest - Collects multiple values into an array.
*/


// ===========================
// Spread Operator (...)
// ===========================

// Array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);

// Object
const person = {
    name: "Alice",
    age: 22
};

const newPerson = {
    ...person,
    city: "Delhi"
};

console.log(newPerson);

// ===========================
// Rest Operator (...)
// ===========================

// Function
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));

// Array Destructuring
const [first, ...others] = [10, 20, 30, 40];

console.log(first);   // 10
console.log(others);  // [20, 30, 40]
