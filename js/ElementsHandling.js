console.log("ElementsHandling.js is loaded...");

const newDiv = document.createElement("div");
console.log(newDiv);


//1. createElement() - Creates a new element
newDiv.id = "alert-message";
newDiv.className = "alert";
newDiv.textContent = "This is an alert message";
newDiv.style.backgroundColor = "green";
newDiv.style.color = "white";
newDiv.style.borderRadius = "12px";
newDiv.style.margin = "10px 200px 0 0px";
newDiv.style.padding = "8px";
console.log(newDiv);

const card = document.querySelector(".card");


//2. append() - Adds an element as the last child of the parent element
card.append(newDiv);

//remove element
// card.remove();

card.removeChild(newDiv);


//danger message
const dangerDiv = document.createElement("div");
dangerDiv.id = "danger-message";
dangerDiv.className = "error";
dangerDiv.textContent = "This is a error message";
dangerDiv.style.backgroundColor = "red";
dangerDiv.style.color = "white";
dangerDiv.style.borderRadius = "12px";
dangerDiv.style.margin = "10px 200px 0 0px";
dangerDiv.style.padding = "8px";
console.log(dangerDiv);

card.append(dangerDiv);


//3. cloneNode() - Clones an element
const cloneDiv = dangerDiv.cloneNode(true);
card.append(cloneDiv);


