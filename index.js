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
// banner.style.backgroundImage = `url(${images[index]})`;
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
