const container = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
   setTimeout(function () {
      const button = document.createElement("button");
      button.innerText = `I am button ${i}`;
      container.appendChild(button);

      if (i === 100) {
         document.getElementsByTagName("h1")[0].innerHTML =
            "There are a lot of buttons here !";
      }
   }, i * 50);
}
