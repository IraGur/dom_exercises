/*  OPTION 1

const buttonHello = document.querySelectorAll("button")[0];
const buttonGoodbuy = document.querySelectorAll("button")[1];

buttonHello.addEventListener("click", () => {
   alert("Oh my God ! You again !!!");
});
buttonGoodbuy.addEventListener("click", () => {
   alert("Thank God ! I thought you'd' never leave !");
});

---------------------------------------------------------------
  OPTION 2
  
const buttons = document.querySelectorAll("button");
const onClick = (event) => {
    if (text === "Hello") {
      alert("Oh my God ! You again !!!");
   } else {
      alert("Thank God ! I thought you'd' never leave !");
   } 
};
buttons.forEach((button) => {
   button.addEventListener("click", onClick);
});

*/
// OPTION 3

const buttons = document.querySelectorAll("button");
const onClick = (event) => {
   alert(
      event.target.innerHTML === "Hello"
         ? "Oh my God ! You again !!!"
         : "Thank God ! I thought you'd' never leave !"
   );
};

buttons.forEach((button) => {
   button.addEventListener("click", onClick);
});
