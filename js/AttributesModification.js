console.log("AttributesModification.js is loaded...");

//1.getAttribute() - Gets the value of an attribute on an element
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

//2.setAttribute() - Sets the value of an attribute on an element
link.setAttribute('href', 'https://www.facebook.com');
console.log(link.getAttribute('href'));

link.setAttribute('target', '_blank');
console.log(link.getAttribute('target'));

//3.removeAttribute() - Removes an attribute from an element
link.removeAttribute('target');
console.log(link.getAttribute('target'));