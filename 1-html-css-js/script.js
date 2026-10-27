let count = 0;
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  count = count + 1;
  button.textContent = "Clicked " + count + " times";
});
