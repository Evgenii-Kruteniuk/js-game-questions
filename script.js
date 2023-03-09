const inputNode = document.querySelector(".js-input");
let regex = /[0-9]/g;

/*inputNode.oninput = function() {
  this.value = this.value.replace(regex, "")
}*/

inputNode.addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(regex, "");
  console.log(event.target.value);
});
