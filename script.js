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

let currentQuestion = 0;


function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion(){
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){
    let question = questions[currentQuestion];

    console.log('slected number is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selected question number is', selectedQuestionNumber);
    console.log('right answer is', question['right_answer']);
    
    if(selectedQuestionNumber == question['right_answer']){
        console.log('Richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('Falsche Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
    }
}