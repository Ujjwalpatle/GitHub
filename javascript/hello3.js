/*
console.log("ujjwal Patel");
alert("hello");
var myname=prompt("what is your namr");


x=null;
y=undefined;
Name='ujjwalpatle';
stander = 12;
console.log('name',Name);
console.log("class",stander);
console.log('age',x);
console.log('gender',y);
console.log('gender',y);



var a="hello";
var b=" ujjwal patle"
alert(a+b)


var twit=prompt("anything");
var teit_length= twit.length;
alert("you have write"+ teit_length +"charecter yo have left"+(20-teit_length)+"characters left" )



var twit=prompt("anything");
var teit_length= twit.slice(0,20);
alert("you have write"+ teit_length +"charecter yo have left"+(20-teit_length)+"characters left" )


var Name=prompt("ujjwal bhuwan patle")
alert(Name.slice(0,1).toLocaleUpperCase() + Name.slice(1,Name.length).toLocaleLowerCase());


var human= prompt("Enter your Dog age ");
alert("your age now is "+ (((human-2)*4)+21) +"years");


function lifeInWeeks(age) {
    

        var x=((90-age)*365);
        var y=((90-age)*52);
        var z=((90-age)*12);
        console.log("You have "+x +" days, "+y +" weeks, and "+z+" months left.");
        

    }


var boy = prompt("Enter boy name");
var girl = prompt("Enter girl name");
var love = Math.random();
love=Math.floor(love*100);
if(love<50){
    alert("nat best match love score is less then 50%");
}
if(49<love<100){
    alert("good match love score is less then 99%");
}
else{
    alert("perfect match love score is less then 100%");
}

var fizz=[];
var buzz=1;
function fizzbuzz(){
    if(buzz % 3 === 0){
        fizz.push("fizz");
    }
    else if(buzz % 5 === 0){
        fizz.push("buzz");
    }
    else{
        fizz.push(buzz);
    }
    buzz++;
    alert(fizz);

}  
for(i=0;i<100;i++){
    fizzbuzz();
}


function fibonacciGenerator (n) {
        var fabo = [];
        var h1=0;
        var h2=1;
        if(n==0){
            fabo.push(h1);
        }
        else if(n==1){
            fabo.push(h1,h2);
        }
        else{
            fabo.push(h1,h2);
            for(i=2;i<n;i++){
                temp=h1;
                h1=h2;
                h2=temp+h2;
                fabo.push(h2);
            }
        }

        alert(fabo);
    }
    fibonacciGenerator (15);



document.getElementsByTagName("li")[0].style.color="red";// to select tags
document.getElementsByClassName("button")[0].style.color="red";// to select items
document.querySelectorAll("ul .list")[0].style.backgroundColor="green";// to select the query
document.querySelector("button").classList.toggle("button1");// to click for on/off
*/


