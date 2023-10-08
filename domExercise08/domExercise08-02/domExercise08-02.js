const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
   button.addEventListener("click", () => {
      const p = button.nextElementSibling;
      p.classList.toggle("hidden");

      if (button.innerText === "Open tab") {
         button.innerText = "Close tab";
      } else {
         button.innerText = "Open tab";
      }
   });
});
