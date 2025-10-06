const quiz = document.querySelector("#quiz");
const score = document.querySelector("#score");
let scoreCounter = 0;
fetch("questions.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(({ id, question, options, correctAnswer }) => {
      const quizQuestion = document.createElement("article");
      quizQuestion.classList.add("quiz-question");
      const h2 = document.createElement("h2");
      h2.textContent = question;
      const ul = document.createElement("ul");
      const li1 = document.createElement("li");
      const li2 = document.createElement("li");
      const li3 = document.createElement("li");
      const li4 = document.createElement("li");
      const hr = document.createElement("hr");
      const lis = [li1, li2, li3, li4];

      options.forEach((option, index) => {
        lis[index].textContent = option;
        if (option.includes(correctAnswer)) {
          lis[index].classList.add("correct");
        }
      });
      const handleClick = (event) => {
        if (event.target.tagName === "LI") {
          if (event.target.classList.contains("correct")) {
            event.target.style.backgroundColor = "green";
            scoreCounter++;
            score.textContent = `Score: ${scoreCounter}`;
          } else {
            event.target.style.backgroundColor = "red";
          }
          quizQuestion.removeEventListener("click", handleClick);
        }
      };
      quizQuestion.addEventListener("click", handleClick);
      ul.append(li1, li2, li3, li4);
      quizQuestion.append(h2, ul, hr);
      quiz.append(quizQuestion);
    });
  });
