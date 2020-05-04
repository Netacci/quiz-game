let nextbtn = document.getElementById("next-btn");
const question = document.getElementById("question");
let btn1 = document.getElementById("q1a1-btn");
let btn2 = document.getElementById("q1a2-btn");
let btn3 = document.getElementById("q1a3-btn");
let btn4 = document.getElementById("q1a4-btn");
let sucessmsg = document.getElementById("sucess");
let failmsg = document.getElementById("fail");
let mediummsg = document.getElementById("medium");
let restartbutton = document.getElementById("restart");
let restartbutton2 = document.getElementById("restart2");
let trybutton = document.getElementById("try-btn");
let quizWrap = document.getElementById("quizzy");
//Array.from converts the html collection to an array
const answers = Array.from(document.getElementsByClassName("q1a1"));
let finishbtn = document.getElementById("finish-btn");
let scorevalue = document.getElementById("score");
let questionCounter = 0;
let score = 0;
let currentQuestion = {};
//array of objects to hold the questions
let questionsHolder = [
  {
    question: "What is the name of Harry Potter's father?",
    answer1: "James Potter",
    answer2: "Snape Potter",
    answer3: "Padfoot potter",
    answer4: "Lupin Potter",
    correctanswer: 1,
  },
  {
    question: "Who Killed Dumbledore?",
    answer1: "Voldemort",
    answer2: "Severus Snape",
    answer3: "Bellatrix",
    answer4: "Malfoy",
    correctanswer: 2,
  },
  {
    question: "What are the prison guards of Azkaban called?",
    answer1: "Security Guards",
    answer2: "Denotor",
    answer3: "Dementors",
    answer4: "Egungus",
    correctanswer: 3,
  },
  {
    question: "Who are Harry's Best friends?",
    answer1: "Fred and George",
    answer2: "Hermoine and Ron",
    answer3: "Ginny and Dean",
    answer4: "Cho and Dudley",
    correctanswer: 2,
  },
  {
    question: "What are Lord Voldemort's followers called?",
    answer1: "Dark fighters",
    answer2: "Shape eaters",
    answer3: "Dark Eaters",
    answer4: "Death Eaters",
    correctanswer: 4,
  },
];
let correct_score = 20;
let totalQuestions = 5;
//function to load new questions randomly
getNewquestions = () => {
  if (questionsHolder.length === 1 || questionCounter > totalQuestions) {
    nextbtn.style.display = "none";
    finishbtn.style.display = "block";
  }
  questionCounter++;
  //Math.random picks a random question, math.floor converts math.random to integer
  let questionNumber = Math.floor(Math.random() * questionsHolder.length);
  currentQuestion = questionsHolder[questionNumber];
  question.innerText = currentQuestion.question;
  answers.forEach((answer) => {
    let num = answer.dataset["number"];
    answer.innerText = currentQuestion["answer" + num];
  });
  //deletes random question after it has been shown
  questionsHolder.splice(questionNumber, 1);
};
getNewquestions();
//event listener on each button
btn1.addEventListener("click", selectAnswer);
btn2.addEventListener("click", selectAnswer2);
btn3.addEventListener("click", selectAnswer3);
btn4.addEventListener("click", selectAnswer4);
// this is the function for btn1 event listener
// it checks if the dataset number(in html) is equal to the correct answer in the array of questions
//if its correct, it changes the class of the btn to "correct" else "incorrect"
// it then runs the correctAnswers function and disables all click event
//it also runs the incrementscore function
function selectAnswer() {
  let choice =
    btn1.dataset["number"] == currentQuestion.correctanswer
      ? "correct"
      : "incorrect";
  correctAnswers();
  disabledOptions();
  if (choice == "incorrect") {
    btn1.classList.add("incorrect");
  } else {
    btn1.classList.add("correct");
    increaseScore(correct_score);
  }
}

function selectAnswer2() {
  let choice =
    btn2.dataset["number"] == currentQuestion.correctanswer
      ? "correct"
      : "incorrect";
  correctAnswers();
  disabledOptions();
  if (choice == "incorrect") {
    btn2.classList.add("incorrect");
  } else {
    btn2.classList.add("correct");
    increaseScore(correct_score);
  }
}
function selectAnswer3() {
  let choice =
    btn3.dataset["number"] == currentQuestion.correctanswer
      ? "correct"
      : "incorrect";

  correctAnswers();
  disabledOptions();
  if (choice == "incorrect") {
    btn3.classList.add("incorrect");
  } else {
    btn3.classList.add("correct");
    increaseScore(correct_score);
  }
}
function selectAnswer4() {
  let choice =
    btn4.dataset["number"] == currentQuestion.correctanswer
      ? "correct"
      : "incorrect";
  correctAnswers();
  disabledOptions();
  if (choice == "incorrect") {
    btn4.classList.add("incorrect");
  } else {
    btn4.classList.add("correct");
    increaseScore(correct_score);
  }
}
//clears status of the buttons
function clearStatus() {
  btn1.classList.remove("disabled", "correct", "incorrect");
  btn2.classList.remove("disabled", "correct", "incorrect");
  btn3.classList.remove("disabled", "correct", "incorrect");
  btn4.classList.remove("disabled", "correct", "incorrect");
}
//sets point event to none
function disabledOptions() {
  btn1.classList.add("disabled");
  btn2.classList.add("disabled");
  btn3.classList.add("disabled");
  btn4.classList.add("disabled");
}
//makes correct answers show
function correctAnswers() {
  if (currentQuestion.correctanswer == 1) {
    btn1.classList.add("correct");
  } else if (currentQuestion.correctanswer == 2) {
    btn2.classList.add("correct");
  } else if (currentQuestion.correctanswer == 3) {
    btn3.classList.add("correct");
  } else if (currentQuestion.correctanswer == 4) {
    btn4.classList.add("correct");
  }
}

nextButton = () => {
  clearStatus();
  getNewquestions();
};
nextbtn.addEventListener("click", nextButton);
increaseScore = (num) => {
  score += num;
  scorevalue.innerText = score;
};

function finished() {
  if (score >= 80) {
    quizWrap.style.display = "none";
    sucessmsg.style.display = "block";
    finishbtn.style.display = "none";
  } else if (score >= 50 && score < 80) {
    quizWrap.style.display = "none";
    mediummsg.style.display = "block";
    finishbtn.style.display = "none";
  } else if (score < 50) {
    quizWrap.style.display = "none";
    failmsg.style.display = "block";
    finishbtn.style.display = "none";
  }
}
function restart() {
  window.location.reload();
}
function restart2() {
  window.location.reload();
}
function tryagain() {
  window.location.reload();
}

finishbtn.addEventListener("click", finished);
trybutton.addEventListener("click", tryagain);
restartbutton.addEventListener("click", restart);
restartbutton2.addEventListener("click", restart2);
