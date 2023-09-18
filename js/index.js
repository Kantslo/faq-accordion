const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const answer = question.nextElementSibling;
  const arrow = question.querySelector(".arrow");
  question.addEventListener("click", function () {
    answer.classList.toggle("visible");
    question.classList.toggle("bold")
    arrow.classList.toggle("rotate")
  });
});
