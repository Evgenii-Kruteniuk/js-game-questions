const listNode = document.querySelector(".js-list");

listNode.addEventListener("mouseover", (event) => {
  if (event.target.closest("li")) {
    event.target.style.color = "black";
  }
});

listNode.addEventListener("mouseout", (event) => {
  if (event.target.closest("li")) {
    event.target.style.color = "red";
  }
});
