//document.querySelector("button").addEventListener("click", function(){ alert("hello"); });
var numberofbutton = document.querySelectorAll(".drum").length;

for(var i=0;i < numberofbutton ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function  (){
    //console.log(this);  this.style.color ="black"
    var audio=this.innerHTML;
    makesound(audio);
    buttonanimation(audio);

    
});
}

//Detecting key presses
document.addEventListener("keypress",function(event){makesound(event.key);buttonanimation(event.key);});

function makesound(key){
    switch (key){
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick=new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;   
        default:
    }
}

function buttonanimation(currently){
    var actively=document.querySelector("."+ currently);
    actively.classList.add("pressed");

    setTimeout(function(){actively.classList.remove("pressed")},150);
}




/*
function addition(a,b){
    return a+b;
}
function subraction(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function calculator(a,b,operator){
    return operator(a,b);
}


objects
var student ={ name:"ujjwal",class:"2year",branch:"AI"};

function student(name,class){
    this.name=name;
    this.class=class;
}

var student1= new student("ujjwal",["1yeargrauate","2year"])


methods
function student(name,class){
    this.name=name;
    this.class=class;
    this.branch=function (){
        content of the function

    }
}

var student1= new student("ujjwal",["1yeargrauate","2year"])

document.addEventListener("keypress",function(event){  content of function(callback function)});

call back function

function event(ev,callback){

    var stu={
        name="dj",
        class="kf"
    }

    if (stu.name===ev){
        callback(stu)
    }
}
anotherAddEventListener("keypress",function(event){console.log(event)});



*/



