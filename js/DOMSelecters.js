console.log("DOMSelecters.js is loaded...");
console.log(document);

// 1. Selects using element ID
const heading = document.getElementById("heading");
console.log(heading);

// 2. Selects elements by class name
const paragraph = document.getElementsByClassName("paragraph");
console.log(paragraph);

// 3. Selects elements by tag name
const div = document.getElementsByTagName("div");
console.log(div);

// 4. Selects the first element that matches the query
const query = document.querySelector("p");
console.log(query);

// 5. Selects all elements that match the query
const queryAll = document.querySelectorAll(".paragraph");
console.log(queryAll);
