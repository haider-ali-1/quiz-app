import { qs } from "./utils";

const quizHeader = qs<HTMLHeadingElement>('main > h1')
const introForm = qs<HTMLFormElement>(".intro__form");
const formInput = qs<HTMLInputElement>(".form__input");
const formBtn = qs<HTMLButtonElement>(".form__btn");

const candidateName = qs<HTMLParagraphElement>(".candidate-name");
const timer = qs<HTMLDivElement>(".question__timer");
const timerMinutes = qs<HTMLParagraphElement>(".timer__minutes");
const timerSeconds = qs<HTMLParagraphElement>(".timer__seconds");

const currentQuestionNumber = qs<HTMLSpanElement>(".question__current");
const totalQuestionsNumber = qs<HTMLSpanElement>(".question__total");

const question = qs<HTMLElement>(".question");
const questionTitle = qs<HTMLParagraphElement>(".question__title");
const questionChoices = qs<HTMLUListElement>(".question__choices");

const resultCard = qs<HTMLElement>(".result");
const totalQuestionsTd = qs<HTMLTableRowElement>(".result__questions");
const attemptedQuestionsTd = qs<HTMLTableRowElement>(".result__attempted");
const correctQuestionsTd = qs<HTMLTableRowElement>(".result__correct");
const wrongQuestionsTd = qs<HTMLTableRowElement>(".result__wrong");
const percentageQuestionsTd = qs<HTMLTableRowElement>(".result__percentage");
const remarks = qs<HTMLParagraphElement>(".remarks");

const tryAgainBtn = qs<HTMLButtonElement>(".try-again__btn");
const goHomeBtn = qs<HTMLButtonElement>(".go-home__btn");

const nextQuestionBtn = qs<HTMLButtonElement>(".next-question__btn");

export {
  quizHeader,
  introForm,
  formInput,
  formBtn,
  candidateName,
  timer,
  timerMinutes,
  timerSeconds,
  currentQuestionNumber,
  totalQuestionsNumber,
  question,
  questionTitle,
  questionChoices,
  nextQuestionBtn,
  resultCard,
  totalQuestionsTd,
  attemptedQuestionsTd,
  correctQuestionsTd,
  wrongQuestionsTd,
  percentageQuestionsTd,
  tryAgainBtn,
  goHomeBtn,
  remarks
};
