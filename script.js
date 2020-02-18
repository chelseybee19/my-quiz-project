const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const questionContainer = document.getElementById('question-cntr');
const questionElement = document.getElementById('questions');
const answerButtonElement = document.getElementById('answer-btn');

startButton.addEventListener('click', startGame);

let shuffleQuestions,currentQuestionIndex;

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
        {text: 'rose', correct:false},
        {text: 'tulip', correct:true},
        {text: 'lillies', correct:false},
        {text: 'dahliahs', correct: false},
    ] },
    {question: 'Which kind of flower can help in clearing radioactive waste?',
    answer: [
        {text: 'roses', correct:false},
        {text: 'tulips', correct:false},
        {text: 'daphodils', correct:false},
        {text: 'sunflower', correct: true},
    ] },
    {question: 'At birth how many bones does a baby have?',
    answer: [
        {text: '500', correct: false},
        {text: '250', correct: false},
        {text: '300', correct:true},
        {text: '175', correct:false},
    ] },
    {question: 'Which vegetable has more chromosomes than humans?',
    answers: [
        {text: 'squash', correct: false},
        {text: 'potato', correct: true},
        {text: 'eggplant', correct:false},
        {text: 'lettuce', correct:false},
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
        {text: 'nut', correct: false},
        {text: 'bastet', correct: true},
        {text: 'anubis', correct:false},
        {text: 'isis', correct:false},
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
    startButton.classList.add('hide');
    shuffleQuestions = quizQuestions.sort((a , b) => Math.floor(Math.random()*10));
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    console.log(shuffleQuestions[currentQuestionIndex]);
    nextQuestion();
}

function nextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionIndex]);
    reset();
}

//displayed questions

function showQuestion(question) {
    //console.log(question)
    questionElement.innerText = question.question;
    //questionContainer.classList.remove('hide');
    question.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', finalAnswer);  
        answerButtonElement.appendChild(button);     
    });
}

function reset() {
    nextButton.classList.remove('hide');
    // while (answerButtonElement.firstChild) {
    //     answerButtonElement.removeChild
    //     (answerButtonElement.firstChild);
    // }
}
// selected answer
function finalAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
}

/*function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}*/