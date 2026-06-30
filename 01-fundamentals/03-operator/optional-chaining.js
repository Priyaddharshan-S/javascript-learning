const user = {
    name: "John",
    address: {
        city: "Mumbai"
    }
};

console.log(user.address?.city); // Mumbai
console.log(user.contact?.phone); // undefined