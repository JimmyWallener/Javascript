// Questions from https://www.dn.se/nyheter/fragesport/ar-du-smartare-an-en-10-aring/

const quizData = [
  {
    title: "Ett rovdjur är ett djur som äter andra djur. Vilket av dessa är ett rovdjur?",
    answer: [
      "Rådjur",
      "Varg",
      "Ko",
      "Get"
    ],
    correct: 1
  },
  {
    title: "Vad kallades vikingarnas båtar?",
    answer: [
      "Träskepp",
      "Långskepp",
      "Roddskepp",
      "Vågskepp"
    ],
    correct: 1
  },
  {
    title: "Vad håller valrossen varm?",
    answer: [
      "Fettlager",
      "Betar",
      "Morrhår",
      "Simfötter"
    ],
    correct: 0
  },
  {
    title: "Hur många procent är en fjärdedel?",
    answer: [
      "20 procent",
      "33 procent",
      "25 procent",
      "40 procent"
    ],
    correct: 2
  },
  {
    title: "Detta är ett känt företag som har sitt ursprung i Danmark, vad heter det?",
    answer: [
      "Stena",
      "IBM",
      "Saab",
      "Mærsk"
    ],
    correct: 3
  },
  {
    title: "Vilken av dessa saker som hittades på land som fått vetenskapsmän att tro att land legat under havet en gång i tiden?",
    answer: [
      "Vattengrottor",
      "Sandig jord",
      "Saltvattensjöar",
      "Fossiler av fisk"
    ],
    correct: 3
  },
  {
    title: "Vilken är den största staden?",
    answer: [
      "Oslo",
      "Helsingfors",
      "Köpenhamn",
      "Reykjavik"
    ],
    correct: 2
  },
  {
    title: "Vilket är ett ryggradsdjur?",
    answer: [
      "Trollslända",
      "Vithaj",
      "Krabba",
      "Snigel"
    ],
    correct: 1
  },
  {
    title: "Vår kropp består till 50-65 procent av detta",
    answer: [
      "Kol",
      "Vatten",
      "Blod",
      "Ben"
    ],
    correct: 1
  },
  {
    title: "Hur många tänder har en vuxen människa om man inte räknar med visdomständerna?",
    answer: [
      "28",
      "23",
      "32",
      "27"
    ],
    correct: 0
  }
]
// Setting inital value 

let totals = 0;
let activeQuestion = 0;

// Javascript functions with Jquery

// Function that loops through the questions and appends the question answers in a list.

function displayQuestion() {
  let question = quizData[activeQuestion];
  let answers = question.answer;
  $('.quiz h2').text(question.title);
  $('.quiz ul').html(''); // clears the list before adding new <li> elements to <ul>
  for (var i = 0; i < answers.length; i++) {
    $('.quiz ul').append("<li id='" + i + "'>" + question.answer[i] + "</li>");

  }
}
// function that checks the answer and increments totals if correct, also increments activeQuestion for the quiz to move on to the next question.
// adds an if-statement that checks if activeQuestion index is equal or greater then quiz lenght and if so, stops quiz and shows stats, else it moves on to the next question.

function isAnswerCorrect(guess) {
  let question = quizData[activeQuestion];
  if (question.correct === guess) {
    totals++;
  }
  activeQuestion++;
  if (activeQuestion >= quizData.length) {
    showTotals();
  } else {
    displayQuestion();
  }
}
// Shows total score and switches from quiz div to summary div and displays different congratulatory statements depending on score
function showTotals() {
  let question = quizData;
  console.log(question);
  $('.quiz').hide();
  $('.summary').show();
  if (totals === question.length) {
    $('.summary p').addClass('result').text(`Gratulerar! Du är ett geni som klarade ${totals} av ${question.length} frågor.`);
  } else if (totals < 5) {
    $('.summary p').addClass('result').text(`Ojdå, kanske dags plugga igen? Du klarade ${totals} av ${question.length} frågor.`);
  } else {
    $('.summary p').addClass('result').text(`Gratulerar! Du klarade ${totals} av ${question.length} frågor.`);
  }
}

// Qjuery with eventlisteners

$(document).ready(function () {
  $('.start a').click(function (event) {
    event.preventDefault(); // Stops the href from loading a page
    $('.start').hide();
    $('.quiz').show();
    displayQuestion();
  });

  $('.quiz ul').on('click', 'li', function () { // Adding eventlistener that targets single elements (instead of .click).
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
    $('.quiz p').html(''); // removes the prompt sett below if user actually selects an element
  });

  $('.quiz a').click(function (event) { // Adding eventlistener that checks for the answer
    event.preventDefault();
    if ($('li.selected').length) { // Checks if the clickable is selected or not with .lenght
      let guess = parseInt($('li.selected').attr("id")); // convert string value to int for comparison
      isAnswerCorrect(guess);
    } else {
      $('.quiz p').text("Du måste ange ett svars alternativ"); // If nothing has been selected, prompt user
    }
  });
  $('.summary a').click(function (event) { // Adding eventlistener för restart of quiz
    event.preventDefault();
    $('.summary').hide();
    $('.start').show();
    totals = 0;
    activeQuestion = 0;
  });
});





