/* ------------------------
   ABOUT ME – AUTO SLIDESHOW
------------------------- */
let index = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  index++;
  if (index > slides.length) { index = 1; }

  slides[index - 1].style.display = "block";

  setTimeout(showSlides, 2000); // Change every 2 seconds
}



/* -----------------------------
   CAFE HUNTING – 4 CORNER SLIDESHOWS
------------------------------ */
let cafeIndex = [1, 1, 1, 1];
let cafeId = ["cafe1", "cafe2", "cafe3", "cafe4"];

// Change slide when clicking next/prev
function moveCafeSlide(n, no) {
  showCafeSlides(cafeIndex[no] += n, no);
}

function showCafeSlides(n, no) {
  let slides = document.querySelectorAll(`#${cafeId[no]} .cafe-slide`);

  if (n > slides.length) { cafeIndex[no] = 1; }
  if (n < 1) { cafeIndex[no] = slides.length; }

  slides.forEach(slide => slide.style.display = "none");

  slides[cafeIndex[no] - 1].style.display = "block";
}

// Initialize all 4 slideshows
showCafeSlides(1, 0);
showCafeSlides(1, 1);
showCafeSlides(1, 2);
showCafeSlides(1, 3);
