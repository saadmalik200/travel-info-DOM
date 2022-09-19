let headingH1 = document.querySelector(".heading");
let header = headingH1.closest("header");
// console.log(header);
header.style.border = "5px solid black";

///////////////

let infoSection = document.querySelector(".info");

let result = infoSection.children;
console.log(result);
Array.from(result).forEach((item) => {
  console.log(item);
  if (item.matches(".info-package")) {
    let title = document.querySelectorAll(".package-title").forEach((el) => {
      const previous = el.previousElementSibling;
      previous.style.border = "5px solid red";
      //   console.log(item);
    });
  }
});
// //task -2
// const infoSection = document.querySelector(".info");
// const packages = document.querySelector(".info-package");
// const packageTitles = document.querySelectorAll(".package-title");
// //console.log(packageTitles);
// if (infoSection.contains(packages)) {
//   packageTitles.forEach((title) => {
//     title.previousElementSibling.style.border = "2px solid black";
//   });
// }

/////////////////

const label = document.querySelectorAll("label");
// console.log(label);
label.forEach((item) => {
  if (item.matches(".mild")) {
    item.style.border = "solid 2px yellow";
  } else if (item.matches(".intense")) {
    item.style.border = "2px solid orange";
  } else {
    item.style.border = "solid 2px red";
  }
});

// /////////////
// const navList = document.querySelector(".nav-list");
// const siteMap = document.querySelector(".site-map");

// // console.log(navList.children);
// Array.from(navList.children).forEach((item) => {
//   siteMap.appendChild(item);
// });

//task -4
const navList = document.querySelector(".nav-list");
const navListClone = navList.cloneNode(true);
const siteMap = document.querySelector(".site-map");
Array.from(navListClone.children).forEach((element) => {
  siteMap.appendChild(element);
});
