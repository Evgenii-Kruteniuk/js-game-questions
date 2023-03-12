/*const field = document.querySelector(".field");
const ball = document.querySelector(".ball");

field.addEventListener("click", (event) => {
  ball.style.top = `${event.offsetY}px`;
  ball.style.left = `${event.offsetX}px`;
  ball.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
});*/

//Допустим хотим отсотрировать наши input по name === "race"
//Array.from() обращение к HTML подобной коллекции
/*Array.from(document.forms[0].elements)
  .filter((el) => (el.name === "race"))
  .forEach((elem) => {
    console.log(elem);
  });*/

const button = document.getElementById("sendForm");
const content = document.getElementById("content");

button.addEventListener("click", (event) => {
  //Преостановка отправки формы
  event.preventDefault();
  Array.from(document.forms[0].elements).forEach((element) => {
    if (element.type === "radio") {
      if (element.checked) {
        let p = document.createElement("p");
        p.textContent = `Вы выбрали: ${element.value}`;
        content.appendChild(p);
      }
      //Если мы не хотим чтобы прописывались чекбоксы как on, то уберем их с вывода
    } else if (element.type !== "checkbox") {
      let p = document.createElement("p");
      p.textContent = element.value;
      content.appendChild(p);
    }
  });
});

const time = document.createElement("div");
const formNode = document.querySelector("form");
formNode.before(time);

let date = new Date();
//Нам нужно удалить запятую между датой и временем и потом поменять местами дату и время
let arr = date.toLocaleString().split("");
let a = arr.splice(10, 1);
let newDate = arr.join("").split(" ").reverse().join(" ");
time.innerHTML = newDate;
