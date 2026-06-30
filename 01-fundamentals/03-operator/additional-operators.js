/*
1. typeof - returns the data type of a value.

2. instanceof - checks whether an object is created from a specific class or constructor.

3. delete - remvoes a property from an object.

4. in - checks whether a property/key exists in an object or index exists in an array.
*/

// ===========================
// typeof Operator
// ===========================

console.log(typeof 100);          // number
console.log(typeof "Hello");      // string
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object (JavaScript bug)
console.log(typeof {});           // object
console.log(typeof []);           // object
console.log(typeof function(){}); // function

// ===========================
// instanceof Operator
// ===========================

class Animal {}

const dog = new Animal();

console.log(dog instanceof Animal); // true
console.log([] instanceof Array);   // true
console.log({} instanceof Object);  // true

// ===========================
// delete Operator
// ===========================

const student = {
    name: "Rahul",
    age: 21
};

delete student.age;

console.log(student); // { name: "Rahul" }

// ===========================
// in Operator
// ===========================

const car = {
    brand: "Toyota",
    model: "Camry"
};

console.log("brand" in car); // true
console.log("price" in car); // false

const numbers = [10, 20, 30];

console.log(0 in numbers); // true
console.log(5 in numbers); // false