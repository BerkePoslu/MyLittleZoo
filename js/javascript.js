let bg = document.getElementById("bg");
let forest = document.getElementById("forest");
let grass = document.getElementById("grass");
let animal = document.getElementById("animal");
let birds = document.getElementById("bird");
let text = document.getElementById("text");

window.addEventListener("scroll", function () {
  var value = window.scrollY;

  bg.style.top = value * 0.8 + "px";
  forest.style.top = value * 0.6 + "px";
  birds.style.left = -value * 0.15 + "px";
  birds.style.top = value * 0.3 + "px";
  grass.style.top = value * 0.05 + "px";
  animal.style.top = value * 0.5 + "px";
  text.style.top = value * 1 + "px";
});

AOS.init();

const photoCarousel = document.querySelector("#photoCarousel");
const carousel = new bootstrap.Carousel(photoCarousel, {
  interval: 4000,
  touch: true,
});
