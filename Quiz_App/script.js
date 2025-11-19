var questions=[
    {
        question:"Which is largest animal in the world",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is largest derset in the world",
        answers:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antartica",correct:true},
        ]
    },
    {
        question:"Which is the smallest continent in the world",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},
        ]
    },
    {
        question:"Which is smallest country in the world",
        answers:[
            {text:"Vatican",correct:true},
            {text:"Turkey",correct:false},
            {text:"France",correct:false},
            {text:"Mali",correct:false},
        ]
    }
];
var questionElement=document.querySelector('.question');
var reponseBoutton=document.querySelector('.answer');
var nextBoutton=document.querySelector('.next_btn');
let currentQuestionIndex=0;
let score=0;

function startQuiz() {
    currentQuestionIndex=0
    score=0;
    nextBoutton.innerHTML="Next"
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;


    currentQuestion.answers.forEach(answers=>{
        const button=document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("btn");
        reponseBoutton.appendChild(button);
        if (answers.correct) {
            button.dataset.correct=answers.correct;  //sert à stocker la réponse correcte dans l'élément HTML du bouton lui-même en utilisant un attribut de données personnalisé (data-*).
        }
        button.addEventListener("click",selectAnswer)
    });
}

function resetState(){
    nextBoutton.style.display="none";
    while (reponseBoutton.firstChild){
        reponseBoutton.removeChild(reponseBoutton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const iscorrect=selectedBtn.dataset.correct==="true"
    if (iscorrect) {
        selectedBtn.classList.add("Correct");
        score++;
    }
    else{
        selectedBtn.classList.add("Incorrect");
    }
    Array.from(reponseBoutton.children).forEach(button=>{
        if (button.dataset.correct==="true"){
            button.classList.add("Correct");
        }
        button.disabled=true;
    });
    nextBoutton.style.display="block";
    
}
nextBoutton.addEventListener("click",()=>{
    if (currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz()
    }
})
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex<questions.length) {
        showQuestion();
    }
    else{
        showscore();
    }
}
function showscore(){
    resetState();
    questionElement.innerHTML=`You scrored ${score} out of ${questions.length}!`;
    nextBoutton.innerHTML="Play Again";
    nextBoutton.style.display="block"
    
}
startQuiz();


