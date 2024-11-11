// Loading animation
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

// Typing effect
const texts = [
  "Welcome to Hack Zone!",
  "Get the best hacking tools!",
  "Your one-stop hacking resource!"
];
let index = 0;
let charIndex = 0;
let currentText = "";
let typingElement = document.getElementById("typing");

function type() {
  if (charIndex < texts[index].length) {
    currentText += texts[index].charAt(charIndex);
    typingElement.textContent = currentText;
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    currentText = texts[index].substring(0, charIndex - 1);
    typingElement.textContent = currentText;
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  type();
});