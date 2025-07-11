import type { QuizQuestion } from "../types";

const quizData: QuizQuestion[] = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlink Text Module Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    choices: ["<style>", "<css>", "<script>", "<link>"],
    answer: "<style>",
  },
  {
    question: "What is the correct CSS syntax to make all <p> elements bold?",
    choices: [
      "p {text-weight: bold;}",
      "p {font-weight: bold;}",
      "<p style='bold'>",
      "p {font: bold;}",
    ],
    answer: "p {font-weight: bold;}",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    choices: ["text-color", "font-color", "color", "background-color"],
    answer: "color",
  },
  // {
  //   question: "Which HTML attribute is used to define inline styles?",
  //   choices: ["class", "style", "id", "css"],
  //   answer: "style",
  // },
  // {
  //   question: "How do you write a comment in JavaScript?",
  //   choices: ["<!-- comment -->", "// comment", "# comment", "** comment **"],
  //   answer: "// comment",
  // },
  // {
  //   question:
  //     "Which method adds an element to the end of an array in JavaScript?",
  //   choices: ["push()", "pop()", "shift()", "concat()"],
  //   answer: "push()",
  // },
  // {
  //   question: "How do you select an element with the ID 'main' in CSS?",
  //   choices: ["#main", ".main", "main", "$main"],
  //   answer: "#main",
  // },
  // {
  //   question: "What will `typeof null` return in JavaScript?",
  //   choices: ["object", "null", "undefined", "boolean"],
  //   answer: "object",
  // },
  // {
  //   question: "Which HTML tag is used to create a clickable link?",
  //   choices: ["<a>", "<link>", "<href>", "<nav>"],
  //   answer: "<a>",
  // },
];

export { quizData };
