const slide = document.querySelector(".slider-container");
const leftSlide = slide.querySelector(".left-slide");
const rightSlide = slide.querySelector(".right-slide");
const upButton = slide.querySelector(".up-button");
const downButton = slide.querySelector(".down-button");
const slidesLength = rightSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const slideHeight = rightSlide.clientHeight;

  if (direction === "up") {
    activeSlideIndex++;
    console.log("--------up--------");
    console.log(activeSlideIndex);
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
      console.log(activeSlideIndex);
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    console.log("----------down----------");
    console.log(activeSlideIndex);
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
      console.log(activeSlideIndex);
    }
  }
  rightSlide.style.transform = `translateY(${
    -activeSlideIndex * slideHeight
  }px)`;

  leftSlide.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`;
};
