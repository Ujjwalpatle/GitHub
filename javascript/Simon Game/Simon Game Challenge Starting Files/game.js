var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern=[];
var userClickedPattern=[];

var started=false;
var level=0;



$(document).keypress(function (){
    if(!started){
        $("#level-title").text("Level "+ level);
        nextSequance();
        started = true;
    }
});

$(".btn").click(function (){

    var userChosenColor= $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
  });

  function checkAnswer(currentLevel){

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function (){
                nextSequance();
            },1000);
        } 
    }else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("game over,press any key to Restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        startOver();
    }
  }

  


function nextSequance(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+ level);
    var randomnumber=Math.floor(Math.random()*4);
    var randomchosencolor = buttonColours[randomnumber];
    gamePattern.push(randomchosencolor);
    $("#"+randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomchosencolor);
}

function playSound(name){
    var audio = new Audio("sound/"+name+".mp3");
    audio.play();
}


function animatePress(currentcolor){
    $("#"+ currentcolor).addClass("pressed");
    setTimeout(function(){
        $("#"+ currentcolor).removeClass("pressed");
    },100);
    
}


function startOver(){
    level=0;
    gamePattern=[];
    started=false;

  }

/*
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 500);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    for (var i = 0; i < level; i++) {
        setTimeout(function () {
            var randomColor = buttonColors[Math.floor(Math.random() * 4)];
            gamePattern.push(randomColor);
            $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
            playSound(randomColor);
        }, 1000 * i); // Change the delay as needed
    }
}

function playSound(name) {
    var audio = new Audio("sound/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

a*/