let headingH1 = document.querySelector(".heading");
let header = headingH1.closest("header");
// console.log(header);
header.style.border = "5px solid black";

///////////////

let infoSection = document.querySelector(".info");

let result = infoSection.children;

Array.from(result).forEach((item) => {
  //   console.log(item);
  if (item.matches(".info-package")) {
    let title = document.querySelectorAll(".package-title").forEach((el) => {
      const previous = el.previousElementSibling;
      previous.style.border = "5px solid red";
      //   console.log(item);
    });
  }
});

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
