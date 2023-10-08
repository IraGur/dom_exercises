const bold = document.querySelector("b");
bold.style.color = "red";
const body = bold.parentElement.parentElement.parentElement.parentElement;
body.style.background = "beige";
const part2 = bold.parentElement.parentElement.parentElement;
part2.style.background = "darkblue";
part2.style.color = "white ";
const anchor = bold.parentElement.nextElementSibling;
anchor.style.color = "pink";
const allLi =
   bold.parentElement.parentElement.parentElement.previousElementSibling.querySelectorAll(
      "li"
   );
allLi.forEach((li) => {
   li.style.color = "orange";
});
const allA =
   bold.parentElement.parentElement.parentElement.previousElementSibling.querySelectorAll(
      "a"
   );
allA.forEach((a) => {
   a.style.color = "green";
});
const h1 =
   bold.parentElement.parentElement.parentElement.previousElementSibling.querySelector(
      "h1"
   );
h1.style.textTransform = "uppercase";
