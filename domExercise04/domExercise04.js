/*
const mainHeading = document.getElementById("main-heading");
mainHeading.style.color = "red";

const myList = document.querySelector("ul");
const myItem = document.createElement("li");
";
console.log(myList);

myList.querySelectorAll("li")[3].innerHTML = ""; */

/* 
============================  04  ===============================
 */
const listText = document.querySelector("li").innerText;
const myList = document.querySelector("ul");
myList.innerHTML += '<li class="list-item"></li>';
document.querySelector("li:last-child").innerHTML = listText;
myList.style.color = "purple";
myList.querySelector("li:nth-child(4)").innerHTML = "Annie <span> Hall</span>";
myList.querySelector("li span").style.color = "red";
document.querySelector("li:last-child").style.color = "gold";
