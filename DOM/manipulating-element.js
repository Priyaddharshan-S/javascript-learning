// innerHTML - Returns or sets the HTML markup contained inside an element. It parses strings as actual HTML tags, allowing you to insert new elements directly.
const box = document.getElementById("box");
// Changes HTML inside the element
box.innerHTML = "<h2>New Heading</h2><p>New Paragraph</p>";


// textContent - Returns or sets the pure text content of an element and all of its descendants. It ignores all HTML tags and simply extracts the raw text.
const box = document.getElementById("box");
// Changes only the text
box.textContent = "<h2>Hello</h2>";
//-------------------------------------------------------------------------




// getAttribute()
const image = document.querySelector("img");
// Reads an attribute value
console.log(image.getAttribute("src")); //sample.png


// setAttribute()
image.setAttribute("src", "newImage.jpg");


// removeAttribute()
input.removeAttribute("disabled");


// hasAttribute() - heck attribute is present or not, returns boolean
console.log(input.hasAttribut("disabled")) // true or false
//-------------------------------------------------------------------------




//CLASS
// add() - a method that adds the specified class name into that list.
const box = document.getElementById("box");
// Adds a class
box.classList.add("active"); // now it has id-box and class-active


// remove()
remove("active");


//toggle() - Adds class if absent or Removes class if present
box.classList.toggle("dark");

// check()
console.log(box.classList.contains("dark")); // boolean
//-------------------------------------------------------------------------




// style - Change CSS directly
box.style.backgroundColor = "blue";
box.style.color = "white";
box.style.padding = "20px";
box.style.borderRadius = "10px";