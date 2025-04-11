let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Ronaldo",
        "answer_2": "Tim Berners-Lee", 
        "answer_3": "Messi",
        "answer_4": "Bill Gates",
        "right_answer": 2,
    },
    {
        "question": "Was ist das Hauptziel von HTML?",
        "answer_1": "Datenbankabfragen",
        "answer_2": "Webseiten strukturieren", 
        "answer_3": "Server konfigurieren",
        "answer_4": "Betriebssysteme programmieren",
        "right_answer": 2,
    },
    {
        "question": "Was bedeutet CSS?",
        "answer_1": "Cascading Style Sheets",
        "answer_2": "Computer Style Sheets", 
        "answer_3": "Creative Style Sheets",
        "answer_4": "Colorful Style Sheets",
        "right_answer": 1,
    },
    {
        "question": "Was ist das Hauptziel von CSS?",
        "answer_1": "Webseiten strukturieren",
        "answer_2": "Webseiten gestalten", 
        "answer_3": "Webseiten programmieren",
        "answer_4": "Webseiten testen",
        "right_answer": 2,
    },
    {
        "question": "Was ist JavaScript?",
        "answer_1": "Eine Programmiersprache",
        "answer_2": "Ein Datenbankmanagementsystem", 
        "answer_3": "Ein Webserver",
        "answer_4": "Ein Betriebssystem",
        "right_answer": 1,
    },
]

let rigtOfQuestions = 0;
let currentQuestion = 0;


function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion(){
    
    if (currentQuestion >= questions.length){
        //show end screen
        document.getElementById('endScreen').style.display  = '';
        document.getElementById('questionBody').style.display  = 'none';
        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rigtOfQuestions;
        document.getElementById('header-img').src = 'img/trophy.jpg';
    } else { //show Question

        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);

        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style.width = `${percent}%`;
        console.log('Fortschritt :', percent);
        


        
    
    let question = questions[currentQuestion];

    document.getElementById('current-question').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
         }
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1); 
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    
    if(selectedQuestionNumber == question['right_answer']){
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rigtOfQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion(){
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function restartGame(){
    document.getElementById('header-img').src = 'img/quiz.png';
    document.getElementById('endScreen').style.display  = 'none';
    document.getElementById('questionBody').style.display  = '';
    rigtOfQuestions = 0;
    currentQuestion = 0;
    init();
}