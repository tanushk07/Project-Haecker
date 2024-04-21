"use strict";
//---------------------------------------------------------------
let images = [];
images.push("banner1.png");
images.push("banner2.jpg");
images.push("banner3.jpg");
console.log(images);

console.log(images.length);
let index = 0;

let banner = document.querySelector(".banner");
banner.style.backgroundImage = `url(${images[index]})`;
function changeslide(bool) {
  if (bool == true) {
    index = (index + 1) % images.length;
  } else {
    index = (index - 1 + images.length) % images.length;
  }
  banner.style.backgroundImage = `url(${images[index]})`;
  console.log(index);
}
let nextslide = document.getElementById("next_banner");
let prevslide = document.getElementById("previous_banner");

nextslide.addEventListener("click", function () {
  changeslide(true);
});
prevslide.addEventListener("click", function () {
  changeslide(false);
});
//---------------------------------------------------------
const nextprotbutton = document.getElementById("next_product_protection");
const prevprotbutton = document.getElementById("previous_product_protection");
const nextseedbutton = document.getElementById("next_product_seeds");
const prevseedbutton = document.getElementById("previous_product_seeds");
const protectionboxes = document.querySelectorAll(".protectionbox");
const seedboxes = document.querySelectorAll(".seedbox");

prevprotbutton.style.display = "none";
prevseedbutton.style.display = "none";
let counter = 0;
nextprotbutton.addEventListener("click", () => {
  if (counter < 6) {
    prevprotbutton.style.display = "block";
    protectionboxes.forEach((element) => {
      element.style.transform += `translateX(-100%)`;
    });
    counter++;
    console.log(counter);
  }
  if (counter == 6) {
    nextprotbutton.style.display = "none";
  }
});
prevprotbutton.addEventListener("click", () => {
  if (counter > 0) {
    nextprotbutton.style.display = "block";
    protectionboxes.forEach((element) => {
      element.style.transform += `translateX(100%)`;
    });
    counter--;
    console.log(counter);
  }
  if (counter == 0) {
    prevprotbutton.style.display = "none";
  }
});
///////////////////////////////////////////////////////
let counter2 = 0;

nextseedbutton.addEventListener("click", () => {
  if (counter2 < 6) {
    prevseedbutton.style.display = "block";
    seedboxes.forEach((element) => {
      element.style.transform += `translateX(-100%)`;
    });
    counter2++;
    console.log(counter);
  }
  if (counter2 == 6) {
    nextseedbutton.style.display = "none";
  }
});
prevseedbutton.addEventListener("click", () => {
  if (counter2 > 0) {
    nextseedbutton.style.display = "block";
    seedboxes.forEach((element) => {
      element.style.transform += `translateX(100%)`;
    });
    counter2--;
    console.log(counter);
  }
  if (counter2 == 0) {
    prevseedbutton.style.display = "none";
  }
});
//////////////////////////////////////////////////
protectionboxes.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.style.transform = "";
    element.classList.add("hover");
  });
  element.addEventListener("mouseleave", () => {
    element.style.transform = "";
    element.classList.remove("hover");
  });
});
