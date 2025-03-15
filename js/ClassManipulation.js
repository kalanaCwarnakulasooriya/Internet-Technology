console.log("ClassManipulation.js is loaded...");

// 1. classList - Returns a DOMTokenList collection of the class attributes of the element
const heading = document.getElementById("heading");
console.log(heading.classList);

// 2. add() - Adds a class to an element
heading.classList.add("new-class");
console.log(heading.classList);

// 3. remove() - Removes a class from an element
heading.classList.remove("new-class");
console.log(heading.classList);

// 4. toggle() - Toggles between adding and removing a class from an element
heading.classList.toggle("active");
console.log(heading.classList);

heading.classList.toggle("active");
console.log(heading.classList);