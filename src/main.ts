import Timer from "easytimer.js";
import { quizData } from "./data/quizData";
import { getSeconds } from "./utils";

import {
  quizHeader,
  questionChoices,
  questionTitle,
  formBtn,
  question,
  introForm,
  formInput,
  candidateName,
  timer,
  timerMinutes,
  timerSeconds,
  currentQuestionNumber,
  totalQuestionsNumber,
  nextQuestionBtn,
  resultCard,
  totalQuestionsTd,
  attemptedQuestionsTd,
  correctQuestionsTd,
  wrongQuestionsTd,
  percentageQuestionsTd,
  tryAgainBtn,
  goHomeBtn,
  remarks,
} from "./selectors";

const quizTimer = new Timer();

const quizTimerSetting = {
  minutes: 2,
};

let selectedQuestionIndex = 0;
let totalQuestions = quizData.length;
let name: string | null = null;
let correctAnswers: number = 0;
let incorrectAnswers: number = 0;
let attemptedQuestion: number = 0;

function renderQuestion() {
  questionChoices.innerHTML = "";

  currentQuestionNumber.textContent = String(selectedQuestionIndex + 1);
  questionTitle.textContent = quizData[selectedQuestionIndex].question;

  quizData[selectedQuestionIndex].choices.forEach((choice) => {
    const li = document.createElement("li");
    li.classList.add("question__choice");
    li.textContent = choice;
    questionChoices.appendChild(li);
  });
  nextQuestionBtn.textContent = isLastQuestion() ? `Submit` : `Next`;
  nextQuestionBtn.disabled = true;
}

function removePreviousSelected() {
  for (const choice of document.querySelectorAll(".question__choice")) {
    if (choice.classList.contains("question__choice--select")) {
      choice.classList.remove("question__choice--select");
      break;
    }
  }
}

function showQuiz() {
  introForm.style.display = "none";
  question.style.display = "flex";
  nextQuestionBtn.style.display = "inline-block";
  candidateName.style.display = "block";

  candidateName.textContent = name;
  totalQuestionsNumber.textContent = String(totalQuestions);
}

function updateTimeDisplay() {
  const time = quizTimer.getTimeValues();
  timerMinutes.textContent = String(time.minutes).padStart(2, "0");
  timerSeconds.textContent = String(time.seconds).padStart(2, "0");
}

function startQuizTimer() {
  timer.style.display = "flex";
  timerMinutes.textContent = String(quizTimerSetting.minutes).padStart(2, "0");
  timerSeconds.textContent = "00";

  updateConicGradient(getSeconds(quizTimerSetting.minutes));

  quizTimer.start({
    countdown: true,
    startValues: {
      minutes: quizTimerSetting.minutes,
    },
    precision: "seconds",
  });
}

function isLastQuestion() {
  return selectedQuestionIndex + 1 === quizData.length;
}

function checkAnswer() {
  const userSelectedAnswer = document.querySelector(
    ".question__choice--select"
  )?.textContent;

  ++attemptedQuestion;

  userSelectedAnswer === quizData[selectedQuestionIndex].answer
    ? ++correctAnswers
    : ++incorrectAnswers;
}

function nextQuestion() {
  selectedQuestionIndex += 1;
  renderQuestion();
}

function showResultCard() {
  question.style.display = "none";
  resultCard.style.display = "flex";
  nextQuestionBtn.style.display = "none";

  totalQuestionsTd.textContent = String(totalQuestions);
  attemptedQuestionsTd.textContent = String(attemptedQuestion);
  correctQuestionsTd.textContent = String(correctAnswers);
  wrongQuestionsTd.textContent = String(incorrectAnswers);

  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  percentageQuestionsTd.textContent = `${percentage}%`;

  let pass = percentage > 70;

  remarks.classList.add(pass ? "remarks--pass" : "remarks--fail");
  remarks.textContent = pass
    ? "Good And Keep It Up!"
    : "Bad Luck! Try Again ☹️";
}

function resetData() {
  quizTimer.stop();
  timer.style.setProperty("--color", "purple");
  resultCard.style.display = "none";
  selectedQuestionIndex =
    incorrectAnswers =
    correctAnswers =
    attemptedQuestion =
      0;
}

// Start Quiz
formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  name = formInput.value.trim();
  if (!name) return alert("please enter your name");
  quizHeader.style.display = "none";
  showQuiz();
  renderQuestion();
  startQuizTimer();
});

nextQuestionBtn.addEventListener("click", () => {
  checkAnswer();
  if (isLastQuestion()) {
    questionChoices.innerHTML = "";
    showResultCard();
    quizTimer.stop();
    timerMinutes.textContent = "";
    timerSeconds.textContent = "";
    return;
  }
  nextQuestion();
});

questionChoices.addEventListener("click", (e) => {
  const li = (e.target as HTMLLIElement).closest(".question__choice");
  if (!li) return;
  removePreviousSelected();
  li.classList.add("question__choice--select");
  nextQuestionBtn.disabled = false;
});

tryAgainBtn.addEventListener("click", () => {
  resetData();
  showQuiz();
  renderQuestion();
  startQuizTimer();
});


goHomeBtn.addEventListener("click", () => {
  resetData();
  name = null;
  formInput.value = "";

  quizHeader.style.display = "block";
  introForm.style.display = "block";
  candidateName.style.display = "none";
});

formInput.addEventListener("input", (e) => {
  console.log(e.target);
  const input = e.target as HTMLInputElement;
  input.value
    ? formBtn.classList.add("form__btn--active")
    : formBtn.classList.remove("form__btn--active");
});


function updateConicGradient(seconds: number) {
  if (seconds < 31) {
    timer.style.setProperty("--color", "red");
  }
  let angle = seconds * (360 / getSeconds(quizTimerSetting.minutes));
  timer.style.setProperty("--angle", `${angle}deg`);
}

quizTimer.addEventListener("secondsUpdated", () => {
  const totalSeconds = quizTimer.getTotalTimeValues().seconds;
  updateConicGradient(totalSeconds);
  updateTimeDisplay();
});

quizTimer.addEventListener("targetAchieved", () => {
  showResultCard();
});
