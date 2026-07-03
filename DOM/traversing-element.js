// Example html
/*
<div id="container">
  <p id="first">First</p>
  <p id="second">Second</p>
</div>
*/

//parentElement
const second = document.getElementById("second");
console.log(second.parentElement);
// the output is
/*
<div id="container">
  <p id="first">First</p>
  <p id="second">Second</p>
</div>
*/ // entire html includes the second because the second is the child of container.


// children
console.log(container.children);
// First child
console.log(container.firstElementChild);
// Last child
console.log(container.lastElementChild);


// siblinds
// Previous sibling
console.log(second.previousElementSibling);

// Next sibling
console.log(second.nextElementSibling);