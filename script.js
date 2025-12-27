const innerContent = document.querySelectorAll(".innerContent");
const backwardButton = document.querySelector(".backwardButton");
const forwardButton = document.querySelector(".forwardButton");
const currentSlideButton = document.querySelectorAll(".currentSlideButton");
const navigationButtons = document.querySelector(".navigationButtons");

let currentIndex = 0;

function currentSlide(index) {
  innerContent.forEach((slide) => {
    slide.style.display = "none";
  });
  innerContent[index].style.display = "block";
}
currentSlide(currentIndex)

function nextSlide() {
  currentIndex++;

  if (currentIndex === innerContent.length) {
    currentIndex = 0;
  }

  currentSlide(currentIndex);
}

function previousSlide() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = innerContent.length - 1;
  }

  currentSlide(currentIndex);
}

backwardButton.addEventListener("click", previousSlide)

forwardButton.addEventListener("click", nextSlide)


currentSlideButton.forEach((dot, index) => {
  dot.addEventListener(('click'), function(event) {
    navigationButtons.classList.remove('active')
    event.target.classList.add('active')
    currentIndex = index
    currentSlide(currentIndex)
  })
})
