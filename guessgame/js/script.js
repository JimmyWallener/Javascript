const quizData = [
  ["What is one quarter of 1,000?", "250"],
  ["Which planet shares its name with a dog?", "Pluto"],
  ["What is the name of Europe's most northern town?", "Hammerfest"],
  ["What did the crocodile swallow in Peter Pan?", "alarm clock"],
  ["When did the First World War start?", 1914],
  ["Which is the only mammal that can’t jump?", "Elephant"],
  ["Who said E=mc2", "Einstein"],
  ["Which planet is nearest the sun?", "Mercury"],
  ["Who said, “I think, therefore I am”?", "Descartes"],
  ["Who invented the electric light bulb?", "Thomas Edison"]
];

const question = document.getElementById("question");
const submit = document.getElementById("Submit");

let tries = 3;
let score = 0;
let setQuestions = quizData.length;

for (let i = 0; i < setQuestions; i++) {
  console.log(quizData[i]);
  question.innerHTML = quizData[i][0];
  for (let j = 0; j < setQuestions[i]; j++) {
    console.log(quizData[i][j]);
    let answer = quizData[i][j];
    if (submit === answer) {
      score++;
    } else {
      while (tries > 0) {
        alert("Try again!" + "" + tries + " Left");
        tries--;
        if (tries === 3) {
          alert("No more guesses!");
        }
      }
    }
  }
}
