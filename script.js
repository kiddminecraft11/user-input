// get references
let textInput = document.getElementById('boxtext');
let clickButton = document.querySelector('button');
let screenDiv = document.querySelector('div');
let bodyRef = document.querySelector('body');

// set up onclick for clickButton
clickButton.onclick = function(event) {
// prevent the page from reloading
event.preventDefault();
// capture user input
let userInput = textInput.value;
console.log(userInput);
// change backgroundColor based on userInput
bodyRef.style.backgroundColor = userInput;
// show userInput on the screen
screenDiv.textContent = userInput;
// Clear input
}