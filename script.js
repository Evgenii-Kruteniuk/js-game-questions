const buttonNode = document.querySelector(".js-batton");
const circle1Node = document.querySelector(".js-elem1");
const circle2Node = document.querySelector(".js-elem2");
const circle3Node = document.querySelector(".js-elem3");

buttonNode.addEventListener("click", color);

function color() {
  circle3Node.classList.remove("green");
  circle1Node.classList.add("red");
  buttonNode.removeEventListener("click", color);
  buttonNode.addEventListener("click", colorTwo);
}
function colorTwo() {
  circle1Node.classList.remove("red");
  circle2Node.classList.add("yellow");
  buttonNode.removeEventListener("click", colorTwo);
  buttonNode.addEventListener("click", colorThree);
}

function colorThree() {
  circle2Node.classList.remove("yellow");
  circle3Node.classList.add("green");
  buttonNode.removeEventListener("click", colorThree);
  buttonNode.addEventListener("click", color);
}
