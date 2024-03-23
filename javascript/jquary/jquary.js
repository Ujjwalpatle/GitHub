
/*$(document).ready(function(){
    $("h1").css("color","red");
});
*/
$("h1").text("IT's ME")
$("h1").css("color","red").addClass("big-title margin-50");//adding multiple css classes to one query
$("button").css("color","red").css("height",'90px');
$(".big1").css("background-color","black").text("click me 2");
$("a").attr("href","https://www.youtube.com");
console.log($("button").attr("src"));//manipulate attributes


//event lister

$("h1").click(function(){
    $("h1").css("color","purple");
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});
/*
$("input").keypress(function(event){
    $("h1").text(event.key);
});
*/

$("button").click(function(){
    $(".big1").css("background-color","white");
    $(".big2").css("background-color","black");
});


$("button").on("mouseover",function(){
    $(".big1").css("background-color","white"),200;
    $(".big2").css("background-color","black"),200;
});

$("button").on("click",function(){
    //$("h1").fadeToggle();
    //$("h1").slideToggle();
    $("h1").slideToggle().animate({opacity:0.5});
});

//hide and show not have toggle option


//adding or remove using jquery
$("h1").before("<button>hello</button>");
$("h1").prepend("<button>hello</button>");
$("h1").after("<button>hello</button>");
$("h1").append("<button>hello</button>");

$("input").remove();
