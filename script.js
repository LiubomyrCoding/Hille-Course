const textOnSlides = document.querySelectorAll(".textOnSlides");
const backwardButton = document.querySelector(".backwardButton");
const forwardButton = document.querySelector(".forwardButton");
const currentSlideButtons = document.querySelectorAll(".currentSlideButtons");
const navigationButtons = document.querySelector(".navigationButtons");

let currentIndex = 0;

function currentSlide(index) {
  textOnSlides.forEach((slide) => {
    slide.style.display = "none";
  });
  textOnSlides[index].style.display = "block";
}
currentSlide(currentIndex)

function nextSlide() {
  currentIndex++;

  if (currentIndex === textOnSlides.length) {
    currentIndex = 0;
  }

  currentSlide(currentIndex);
}

function previousSlide() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = textOnSlides.length - 1;
  }

  currentSlide(currentIndex);
}

backwardButton.addEventListener("click", previousSlide)

forwardButton.addEventListener("click", nextSlide)


currentSlideButtons.forEach((dot, index) => {
  dot.addEventListener(('click'), function(event) {
    navigationButtons.classList.remove('active')
    event.target.classList.add('active')
    currentIndex = index
    currentSlide(currentIndex)
  })
})
