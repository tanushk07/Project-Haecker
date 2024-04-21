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

const protectionslides = document.querySelectorAll(".protectionimages");
// const visibleslides = Array.from(protectionslides).slice(0, 6);
// const hiddenSlides = Array.from(protectionslides).slice(6);
const nextprotbutton = document.getElementById("next_product_protection");
const prevprotbutton = document.getElementById("previous_product_protection");
const nextseedbutton = document.getElementById("next_product_seeds");
const prevseedbutton = document.getElementById("previous_product_seeds");
let protimg = [
  "protectionimage2.jpg",
  "pesticidesimage.jpg",
  "protectionimage2.jpg",
  "pesticidesimage.jpg",
  "protectionimage2.jpg",
  "pesticidesimage.jpg",
  "protectionimage2.jpg",
  "pesticidesimage.jpg",
  "protectionimage2.jpg",
  "pesticidesimage.jpg",
  "protectionimage2.jpg",
  "pesticidesimage.jpg",
];
let lastslideindex = protectionslides.length - 1;
nextprotbutton.addEventListener("click", () => {
  let i = -6;
  let imageindex = 6;
  protectionslides[
    lastslideindex - (i % 6)
  ].style.backgroundImage = `url(${protimg[imageindex]})`;
  i++;
  imageindex++;
});

prevprotbutton.addEventListener("click", () => {});
