console.log("ContentModification.js is loaded...");


// 1. Text Content - Gets or sets the text content of an element
const heading = document.getElementById("heading");
console.log(heading);
console.log(heading.textContent);
// Change the text content of the heading
heading.textContent = "Hello World";


//2. Inner HTML - Gets or sets the HTML content of an element
const card = document.querySelector(".card");
// Get the inner HTML of the card
card.innerHTML = "<h2>My Card</h2><p>meka nm ftt kammali</p>";


//3. Inner Text - Gets or sets the text content of an element
console.log(card.innerHTML);
card.innerText = "just the text";

//4. Value - Gets or sets the value of an input element
const input = document.getElementById("input");
input.value = "Hello World";
