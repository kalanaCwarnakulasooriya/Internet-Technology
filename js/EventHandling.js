console.log("EventHandling.js is loaded...");

const saveBtn = document.getElementById("btn-save");


// 1. addEventListener() - Attaches an event handler to the specified element
saveBtn.addEventListener("click", function () {
    console.log("Save button clicked...");
});


// 2. removeEventListener() - Removes an event handler that has been attached with the addEventListener() method
function handleClick() {
    console.log("Save button clicked...");
}
saveBtn.removeEventListener("click", handleClick);