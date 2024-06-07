// Access toggle switch HTML element
const modeSwitcher = document.querySelector("#mode-switcher");
const container = document.querySelector(".container");

// Set default mode to light
let mode = "light";

// Listen for a click event on toggle switch
modeSwitcher.addEventListener("click", function () {
  // If mode is light, apply dark background
  if (mode === "light") {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
  // If mode is dark, apply light background
  else {
    mode = "light";
    container.setAttribute("class", "light");
  }
});
