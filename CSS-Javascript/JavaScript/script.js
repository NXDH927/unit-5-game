var questionsTrue= [" The Sky is blue.","We live on the Planet Earth.","We are capable of space travel.","Neil Armstrong was an awesome Astronaut.", "Earth is in a new Space age."];
var questionsFalse= ["No one has been to Space.","We are in contact with space aliens.","Space is dumb.","Space is not the final frontier.","Super Man can't go into Space."]
var correct = 0;
var incorrect = 0;
var trueChosenQuestion = "";
var falseChosenQuestion = "";
var truthChecker = 0;
var truthValue = 0;
var countdownTimer = 10;
var count;

$("#Start").click(function(){

    chooseQuestion();
    Timer();

});

$("#True").click(function(){

    truthChecker = 1;
    factchecker();


});

$("#False").click(function(){

    truthChecker = 2;
    factchecker();

});

function reset() {

    clearInterval(count);

  }

function Timer(){

    count = setInterval(checkCount ,1000);
}

function checkCount(){

    countdownTimer--;
    $("#Timer").text(countdownTimer)

    if(countdownTimer===0){

        incorrect++;
        $("#Incorrect").html(incorrect);
        countdownTimer=10;
        chooseQuestion();

    }



}

function chooseQuestion(){

        var questionRandom = Math.floor(Math.random() * 2);

        console.log(questionRandom);

    if(questionRandom === 0){

        function trueQuestion(){

            trueChosenQuestion = questionsTrue[Math.floor(Math.random() * questionsTrue.length)];

            $("#Questions").html("True or False: " + trueChosenQuestion)

            truthValue = 1;

        }

    trueQuestion();

    }

    if (questionRandom === 1){

        function falseQuestion(){

            falseChosenQuestion = questionsFalse[Math.floor(Math.random() * questionsFalse.length)];
        
            $("#Questions").html("True or False: " + falseChosenQuestion)
        
            truthValue = 2;
        
        }

        falseQuestion();

    }

}

function factchecker(){

    if(truthChecker === truthValue){

        alert("Correct!");
        correct++;
        $("#Correct").html(correct);
        rewriteStats();
        chooseQuestion();
        questionRandom = 0;
        reset();
        countdownTimer = 10;
        Timer();


    }

    else{

        alert("Incorrect!")+
        incorrect++;
        $("#Incorrect").html(incorrect);
        rewriteStats();
        chooseQuestion();
        questionRandom = 0;
        reset();
        countdownTimer = 10;
        Timer();

    }
}

function rewriteStats(){

    console.log(correct);
    console.log(incorrect);
    console.log(trueChosenQuestion);
    console.log(falseChosenQuestion);

}

