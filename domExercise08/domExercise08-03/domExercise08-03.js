const button = document.querySelector("button");

const rn = () => Math.floor(Math.random() * 255);

button.addEventListener("click", () => {
   document.body.style.background = `rgb(${rn()},${rn()},${rn()})`;
});
