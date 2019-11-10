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
    title: "Isbjörnar och valrossar ser väldigt olika ut, men båda kan överleva där det är mycket kallt.\n En isbjörn har en tjock päls som hjälper den att hålla sig varm. Valrossen har ingen tjock päls.\n Vad håller valrossen varm?",
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
    title: "Vetenskapsmän tror att haven en gång täckte mycket av det som nu är land.\n Vilken av dessa saker som hittades på land ledde till att vetenskapsmän tror det?",
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
      "32"
    ],
    correct: 0
  }
]


let totals = 0;
let activeQuestion = 0;
let randomQuestion = Math.floor(Math.random() * quizData.length); // Creates a randomiser based on the lenght of the array.

$(document).ready(function () {
  $('.start a').click(function (event) {
    event.preventDefault(); // Stops the href from loading a page
    $('.start').hide(); // Hides start button after click
    $('.quiz').show(); // shows quiz div with content
    displayQuestion(); // runs function for displaying questions
  });

  $('.quiz ul').on('click', 'li', function () { // On click on list, add .selected to ul for css padding
    $('.selected').removeClass('selected'); // If selected is active, remove it
    $(this).addClass('selected'); // just add class selected (css style)
    $('.quiz p').html(''); // Once something is selected, remove nothing selected prompt
  });
  $('.quiz a').click(function (event) {
    event.preventDefault();
    if ($('li.selected').length) {
      let guess = parseInt($('li.selected').attr("id")); // create a var that holds the id from the selected answer and convert it to Int.
      isAnswerCorrect(guess);
    } else {
      $('.quiz p').text("You need to select an answer"); // If nothing has been selected, prompt user
    }
  })
});


function displayQuestion() {
  let question = quizData[activeQuestion]; // Randomiser on the questions
  $('.quiz h2').text(question.title); // Adds title from array to h2
  $('.quiz ul').html(''); // clears ul from dummylists
  for (var i = 0; i < question.answer.length; i++) {
    $('.quiz ul').append("<li id='" + i + "'>" + question.answer[i] + "</li>"); // Appends a list with questions and adds index to each

  }
}

function isAnswerCorrect(guess) {
  let question = quizData[activeQuestion];
  let numberOfQuestions = quizData;
  if (question.correct === guess) {
    totals++;
  }
  activeQuestion++;
  if (activeQuestion >= numberOfQuestions.length) {
    showTotals();
  } else {
    displayQuestion();
  }
  console.log(activeQuestion);
  console.log(question.correct)
  console.log(numberOfQuestions.length);
  console.log(question);
}

function showTotals() {
  let question = quizData;
  $('.quiz').hide();
  $('.summary').show();
  $('.summary p').text("Congrats you scored " + totals + " out of " + question.length + " correct!");

}


