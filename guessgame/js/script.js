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
    title: "Vilken grupp här nedanför innehåller endast kräldjur?",
    answer: [
      "Ödla, sköldpadda, orm",
      "Ödla, krokodil, grävling",
      "Bläckfisk, snigel, sköldpadda",
      "Krabba, daggmask, orm"
    ],
    correct: 0
  }
]


let score = 0;
let currentQuestion = 0;


