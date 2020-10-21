/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable strict */
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [{
      question: 'What kind of animal is a Tuna?',
      answers: [
        'Mammal',
        'Fish',
        'Bird',
        'Reptile'
      ],
      correctAnswer: 'Fish'
    },
    {
      question: 'What kind of animal is a Bear?',
      answers: [
        'Mammal',
        'Fish',
        'Bird',
        'Reptile'
      ],
      correctAnswer: 'Mammal'
    },
    {
      question: 'What kind of animal is a Lizard?',
      answers: [
        'Mammal',
        'Fish',
        'Bird',
        'Reptile'
      ],
      correctAnswer: 'Reptile'
    },
    {
      question: 'What kind of animal is a Parrot?',
      answers: [
        'Mammal',
        'Fish',
        'Bird',
        'Reptile'
      ],
      correctAnswer: 'Bird'
    },
    {
      question: 'What kind of animal is a Whale?',
      answers: [
        'Mammal',
        'Fish',
        'Bird',
        'Reptile'
      ],
      correctAnswer: 'Mammal'
    },

  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};


/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


function startPage() {
  let startPage = `
  <div class="card">
    <h2>Welcome to the Amazing Animal Quiz</h2>
    <p>How much do you think you know about Animals ?</p>
    <button id="start">Start Quiz</button>

  </div>`;
  return startPage;
}



function questionPage() {
  let question = store.questions[store.questionNumber];

  console.log(question);

  let questionPage = `
  <div class="card">
    <h2>${question.question}</h2>
   <form>
        <label> ${question.answers[0]}</label>
        <input type="radio" name="answer" value="${question.answers[0]}">
        <label> ${question.answers[1]}</label>
        <input type="radio" name="answer" value="${question.answers[1]}">
        <label> ${question.answers[2]}</label>
        <input type="radio" name="answer" value="${question.answers[2]}">
        <label> ${question.answers[3]}</label>
        <input type="radio" name="answer" value="${question.answers[3]}">
        <button type="submit">Submit your answer</button>
    </form>
  </div>
  <div>
  <p>Score: ${store.score} </p>
  </div>`;

  return questionPage;

}





function handleStartQuiz() {
  $('main').on('click', '#start', function () {
    store.quizStarted = true;
    render();

  })
}

function handleAnswerSubmit() {
  $("main").on("submit", "form", function (evt) {
    evt.preventDefault();
    AnswerBox();

    //render();

  })
}

function AnswerBox() {
  let correct = store.questions[store.questionNumber].correctAnswer;
  let userInput = $('[type="radio"]:checked').val()
  //console.log(correct)
  if (userInput === correct) {
    $('main').html(`<div class="correctBox">
<h2>GOT IT!!!</h2>
<p>Score: #</p>
<button class="continue">Continue Quiz</button>
</div>`)
  } else {
    $('main').html(`<div class="incorrectBox">
<h2>NOPE!!!</h2>
<p>Score: #</p>
<button class="continue">Continue Quiz</button>
</div>`)
  }
}


function handleContinue() {
  $('main').on('click', '.continue', function (e) {
    e.preventDefault();
    store.questionNumber++;
    render();
  })
}


function render() {
  if (store.quizStarted === false) {
    $('main').html(startPage());
  } else if (store.quizStarted) {
    $('main').html(questionPage());
  }
}

function main() {
  render();
  startPage();
  handleStartQuiz();
  handleAnswerSubmit();
  handleContinue();
}


$(main);