let username = null;
let defaultName = username ?? "Guest";

console.log(defaultName);

let score = 0;
console.log(score ?? 100); // 0 (0 is NOT null or undefined)