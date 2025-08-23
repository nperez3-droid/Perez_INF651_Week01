// Get references to elements
let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

// Change heading text when button is clicked
myButton.onclick = function () {
  myHeading.textContent = "Hello world!";
};
