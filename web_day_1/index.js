// const bd = document.getElementById("bd");
// const raj = document.getElementById("raj");
// const ranju = document.getElementById("ranju");

// const p = document.querySelector("p");
// const ul = document.querySelector("ul");

// console.log(ul);
// const li = document.getElementsByClassName("li");

// for (let i of li) {
//   console.log(i.innerText);
// }

// console.log(li);

// const sameElements = document.querySelectorAll(".inside-div ul li");

// // for (let i of sameElements) {
// //   console.log(i.innerText);
// // }

// sameElements.forEach((element) => {
//   console.log(
//     (element.style = {
//       color: "red",
//       // font-size: 20px;
//     })
//   );
// });
// console.log(sameElements);

// const bd = document.getElementById("bd");

// bd.style.color = "red";
// console.log();
// const section = document.getElementById("section-last");
const section = document.querySelectorAll("section");
const btn = document.getElementById("btn");
const div = document.querySelector("#div ul");
// console.log(section);

// btn.addEventListener("click", function () {
//   btn.innerText = "Remove Css";
//   btn.classList.add("btn");
//   for (se of section) {
//     se.style.border = "2px solid red";
//     se.style.margin = "20px";
//     se.style.padding = "20px";
//     se.style.borderRadius = "20px";
//     se.style.backgroundColor = "lightgrey";
//   }
// });

// console.log(div);

const li = document.createElement("li");
li.innerText = "This is Salbon, Katabon";
div.appendChild(li);

console.log(li);

const li2 = document.createElement("li");
li2.innerText = "This is Salbon, Katabon";
div.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "This is Salbon, Katabon";
div.appendChild(li2);
