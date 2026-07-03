// 1. getElementByID() - Selecting element using its unique id.
const heading = document.getElementById("title");
console.log(heading); // Prints the selected element


// getElementByClassName()
const items = document.getElementsByClassName("menu-item");


// getElementByTagName() - Selects all elements with the given tag name.
const divs = document.getElementsByTagName("div");


// querySelector() - elects the FIRST element that matches the CSS selector
const heading = document.querySelector("#title"); // By id
const paragraph = document.querySelector(".text"); // By class
const button = document.querySelector("button"); // By tag
console.log(heading);
console.log(paragraph);
console.log(button);


// querySelectorAll() -  ALL matching elements and  Returns a NodeList(similar to an array)
const paragraphs = document.querySelectorAll(".text");
console.log(paragraphs);
// Loop through all selected elements
paragraphs.forEach((item) => {
    console.log(item.textContent);
});
