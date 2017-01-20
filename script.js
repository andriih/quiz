 var i = 0;
 var j = 1;
 var msg = "";
 var answer = "";
////////////
var QuestionProfile = [
    {
        question: "Name",
        answers: ["Valera","Gena","Homer"],
        correctAnswerIndex: 2,
        userAnswerIndex: null
    },

    {
        question: "Surname",
        answers: ["Pushkin","Petrov","Simpson"],
        correctAnswerIndex: 2,
        userAnswerIndex: null
    },

    {
        question: "Year",
        answers: ["1997","1998","1992"],
        correctAnswerIndex: 2,
        userAnswerIndex: null
    }
];
function start(questions){
    document.getElementById('question').innerHTML = questions[0].question;
    document.getElementById('variants').innerHTML = questions[0].answers.join(";");

    

    document.getElementById('submit').disabled = false;
    document.getElementById('answerField').disabled = false;
    document.getElementById('start').disabled = true;    
}

function Quiz (questions){
        
        if(j>=questions.length){
            j=questions.length-1;
        }
        console.log(j);
        document.getElementById('question').innerHTML = questions[j].question;
        document.getElementById('variants').innerHTML = questions[j].answers.join(";");
        answer =  document.getElementById('answerField').value;
        
        questions[j].userAnswerIndex = questions[i].answers.indexOf(answer);

        if(questions[j].userAnswerIndex === questions[i].correctAnswerIndex){
            
            msg += "In Question <br/>\" "+questions[i].question+
            " \" you give answer: <br/>"+answer+" Correct answer <br/>"+questions[i].answers[questions[j].userAnswerIndex]+
            "<br /> this is <strong>TRUE</strong> Answer<br/><br/>";
            

        }else{
             msg += "In Question <br/>\" "+questions[i].question+
            " \" you give answer: <br/>"+answer+" Correct answer <br/>"+questions[i].answers[questions[i].userAnswerIndex]+
            "<br /> this is <strong>FALSE</strong> Answer<br/><br/>";

        }
        
        if(i>=questions.length-1){
            document.write(msg);
        }

        document.getElementById('answerField').value = "";
    j++;
    i++;

}



