const quizes = [
  {
    id: 1,
    question: "1 + 1 = ?",
    answers: [1, 2, 3, 4],
  },
  {
    id: 2,
    question: "2 + 2 = ?",
    answers: [2, 3, 4, 5],
  },
  {
    id: 3,
    question: "3 + 3 = ?",
    answers: [3, 4, 5, 6],
  },
];

const randomButton = document.getElementById("btn");
const quizContainer = document.querySelector(".quiz-container");

const renderQuestion = (arr) => {
  quizContainer.innerHTML = "";

  arr.forEach((quiz) => {
    const quizItem = document.createElement("div");
    quizItem.classList.add("quiz-item");

    const h3Ele = document.createElement("h3");
    h3Ele.innerText = quiz.question;

    const quizAnswer = document.createElement("div");
    quizAnswer.classList.add("quiz-answer");

    // Randomly select one answer
    const randomIndex = Math.floor(Math.random() * quiz.answers.length);

    quiz.answers.forEach((answer, index) => {
      const answerItem = document.createElement("div");
      answerItem.classList.add("quiz-answer-item");

      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = quiz.id;

      if (index === randomIndex) {
        radioInput.checked = true;
      }

      const label = document.createElement("label");
      label.textContent = answer;

      answerItem.appendChild(radioInput);
      answerItem.appendChild(label);
      quizAnswer.appendChild(answerItem);
    });

    quizItem.appendChild(h3Ele);
    quizItem.appendChild(quizAnswer);
    quizContainer.appendChild(quizItem);
  });
};

randomButton.addEventListener("click", () => {
  window.location.reload();
});
renderQuestion(quizes);
