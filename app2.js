let remainChars = document.querySelector(".remainChars");
let char = document.querySelector("input");

function handleCountChar(event) {
  let numChars = event.target.value.length;
  remainChars.textContent = 60 - numChars;
  if (numChars >= 10) {
    remainChars.style.color = "red";
  }
}

char.addEventListener("input", handleCountChar);
