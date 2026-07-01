// 1. Scope differences: let vs const vs var
let changeable = "I can change"; // block level scoping
const permanent = "I cannot change";
var oldSchool = "I am function-scoped"; // not recommended

// 2. Primitive Data Types (Stack memory)
const str = "Kamali";                  // String
const num = 2026;                      // Number
const isStudent = true;                // Boolean
const emptySpace = null;               // Null (Intentional absence)
let notDefined;                        // Undefined
const bigIntNum = 9007199254740991n;   // BigInt
const uniqueId = Symbol("id");         // Symbol - It creates a unique and immutable identifier.

// 3. Non-Primitive Data Types (Heap reference memory)

//OBJECT
const userProfile = {
  name: "Priyaddharshan",
  role: "Developer"
};

// ARRAY

const techStack = ["JavaScript", "Node.js", "MySQL"];

console.log(typeof str, typeof userProfile, typeof techStack); // Note: typeof array is 'object'