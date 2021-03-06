const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');

nextButton.addEventListener('click',() => showQuestion(shuffleQuestions[currentQuestionIndex++]));
 
const score = document.getElementById('score');
const questionContainer = document.getElementById('question-cntr');
const questionElement = document.getElementById('questions');
const answerButtonElement = document.getElementById('answer-btn');
const title = document.getElementById('title');


startButton.addEventListener('click', () => startGame());
title.innerHTML = "Take This Amazing Quiz!";
title.classList.remove('hide');

let shuffleQuestions,currentQuestionIndex;
let counter = 0;
//let nextClickCount = 0;


// quiz questions

const quizQuestions = [
    {question: 'Where can you find the Sea of Tranquility?',
    answer: [
        {text:'The Moon', correct: true},
        {text:'Jupiter',correct: false},
        {text:'Earth',correct: false},
        {text:'Mars',correct: false},
    ] },
    {question: 'What is the diameter of the Earth?',
    answer: [
        {text: '7,000 miles', correct: false},
        {text: '5,000 miles', correct: false},
        {text: '8,000 miles', correct: true},
        {text: '10,000 miles', correct: false},
    ] }, 
    {question: 'Which kind of bulbs were once exchanged as a form of currency?',
    answer: [
        {text: 'Rose', correct:false},
        {text: 'Tulip', correct:true},
        {text: 'Lillies', correct:false},
        {text: 'Dahliahs', correct: false},
    ] },
    {question: 'Which kind of flower can help in clearing radioactive waste?',
    answer: [
        {text: 'Roses', correct:false},
        {text: 'Tulips', correct:false},
        {text: 'Daphodils', correct:false},
        {text: 'Sunflower', correct: true},
    ] },
    {question: 'At birth how many bones does a baby have?',
    answer: [
        {text: '500', correct: false},
        {text: '250', correct: false},
        {text: '300', correct:true},
        {text: '175', correct:false},
    ] },
    {question: 'Which vegetable has more chromosomes than humans?',
    answer: [
        {text: 'Squash', correct: false},
        {text: 'Potato', correct: true},
        {text: 'Eggplant', correct:false},
        {text: 'Lettuce', correct:false},
    ] },
    {question: 'In ancient Greece throwing an apple at someone was considered an decleration of what?',
    answer: [
        {text: 'Love', correct: true},
        {text: 'War', correct: false},
        {text: 'Friendship', correct: false},
        {text: 'Peace', correct: false},
    ] },
    {question: 'What writer famously said I can resist everything except temptation',
    answer: [
        {text: 'Alexander Dumas', correct: false},
        {text: 'J k Rowling', correct: false},
        {text: 'Shakespear', correct: false},
        {text: 'Oscar wilde', correct: true},
    ] },
    {question: 'Which egyptian goddess has the head of a cat and the body of a woman?',
    answer: [
        {text: 'Nut', correct: false},
        {text: 'Bastet', correct: true},
        {text: 'Anubis', correct:false},
        {text: 'Isis', correct:false},
    ] },
    {question: 'About how fast can a domestic cat run in short bursts?',
    answer: [
        {text: '30 mph', correct:true},
        {text: '25 mph', correct:false},
        {text: '15 mph', correct:false},
        {text: '40 mph', correct:false},
    ] },

];


//start Game

function startGame() {
    let audio = new Audio(`./Man-humming.mp3`);
    audio.play();

    console.log("start game called");
    currentQuestionIndex = 0;
    score.classList.add('hide');
    startButton.classList.add('hide');
    title.classList.add('hide');
    shuffleQuestions = quizQuestions.sort(() => Math.random() - .7);// generate random list of questions
    questionContainer.classList.remove('hide');
    
    nextQuestion();
}

function nextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionIndex]);
    reset();
}

function reset() {
    nextButton.classList.remove('hide');
  
}

//displayed questions

function showQuestion(question) {
    // debugger;
    if (question) {
    questionElement.innerText = question.question;
   
    answerButtonElement.innerHTML = "";
    question.answer.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', finalAnswer);  
        answerButtonElement.appendChild(button); 
       
    });
        console.log("hi", currentQuestionIndex );
        
        if (currentQuestionIndex === 10) {
            showResults();
            currentQuestionIndex = 0;      
        }
    }
}


// selected answer

function finalAnswer(e) {
    // check if this is true or false
  if(e.target.hasAttribute("data-correct")){
      counter ++;
      console.log(counter);
      e.target.classList.add('correct');
  }else{
      e.target.classList.add('wrong');
  }
}


function showResults () {
    let audio = new Audio(`./Oh-yeah-sound-effect.mp3`);
    audio.play();
    score.innerHTML = counter + " out of " + shuffleQuestions.length;
    questionContainer.classList.add('hide');
    nextButton.classList.add('hide');
    score.classList.remove('hide');
    startButton.classList.remove('hide');
}
