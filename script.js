const resultButtonNode = document.getElementById("resultButton");
const resultNode = document.querySelector(".result");
const questions = document.querySelectorAll(".question");
const allRadioNodes = document.querySelectorAll("input[type=radio]");

resultButtonNode.addEventListener("click", () => {
  let count = 0;
  allRadioNodes.forEach((el) => {
    if (el.checked && el.value === "true") {
      count++;
    }
  });
  resultNode.classList.add("resultVisible");
  resultNode.innerHTML = `Вы ответили правильно на ${count} вопросов из ${questions.length}`;
});
