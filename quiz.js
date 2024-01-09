const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const funfact = document.getElementById('fact')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct

    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which species of bear is native to North America?',
    answers: [
      { text: 'Polar bear', correct: false},
      { text: 'Panda bear', correct: false },
      { text: 'Grizzly bear', correct: true },
      { text: 'Sloth bear', correct: false },
    ]
  },
  {
    question: 'What is the scientific name for the brown bear?',
    answers: [
      { text: 'Ursus americanus', correct: false },
      { text: 'Ursus arctos', correct: true },
      { text: 'Ursus maritimus', correct: false },
      { text: 'Ursus malayanus', correct: false }
    ]
  },
  {
    question: ' bears were often used for entertainment in the arena. What was these events?',
    answers: [
      { text: 'Bear Jousting', correct: false },
      { text: 'Bear Circus', correct: false },
      { text: 'Bear Gladiators', correct: true },
      { text: 'Bear Spectacles', correct: false }
    ]
  },
  {
    question: 'Which bear species is primarily inhabits the Arctic region?',
    answers: [
      { text: 'Kodiak bear', correct: false },
      { text: 'Sun bear', correct: false },
      { text: 'Polar bear', correct: true },
      { text: 'Andean bear', correct: false }
    ]
  },
  {
    question: 'The teddy bear got its name from an incident involving which U.S. president?',
    answers: [
      { text: 'Abraham Lincoln', correct: false },
      { text: 'Theodore Roosevelt', correct: true },
      { text: 'Franklin D. Roosevelt', correct: false },
      { text: 'John F. Kennedy', correct: false }
    ]
  }
];
