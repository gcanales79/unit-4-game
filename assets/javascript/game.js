$(document).ready(function(){

var randomNumber;
var wins=0;
var losses=0;
var score=0;
var blueNumber = 0;
var greenNumber = 0;
var pinkNumber= 0;
var yellowNumber = 0;



//Creates Random Number to Match
function RandomCreator(){
    randomNumber=Math.floor((Math.random() * 120) + 19);
    console.log(randomNumber);
};

//Creates the random number of each crystal
function RandomCrystal(){
    return Math.floor((Math.random() * 12) + 1);
};


//Load Inital score to the page
$(".wins").append("Wins: " +wins);
$(".loss").append("Looses: " +losses);

//Initial Conditions of the Game
function InitialConditions(){
RandomCreator();
score=0;
$(".randomNumber").empty();
$(".randomNumber").append(randomNumber);
blueNumber = RandomCrystal();
greenNumber = RandomCrystal();
pinkNumber= RandomCrystal();
yellowNumber = RandomCrystal();
console.log(blueNumber);
console.log(greenNumber);
console.log(pinkNumber);
console.log(yellowNumber);
$(".score").empty();
$(".score").append(score);
}

//First Load of the page
InitialConditions();

//Compare the random Number to the score
function Compare(){
    if (score>randomNumber){
        $("#message").empty();
       $("#message").append("You loss");
        losses=losses+1;
        $(".loss").empty();
        $(".loss").append("Losses: " + losses);
        InitialConditions();
    }
    if (score==randomNumber){
        $("#message").empty();
       $("#message").append("You WIN!!!");
        wins=wins+1;
        $(".wins").empty();
        $(".wins").append("Wins: " + wins);
        InitialConditions();
    }
    
    
}


//This will add when the blue crystal is click
$("#blue").on("click",function(){
    $("#message").empty();
    score=score+blueNumber;
    $(".score").empty();
    $(".score").append(score);
    Compare();
})

//This will add when the green crystal is click
$("#green").on("click",function(){
    $("#message").empty();
    score=score+greenNumber;
    $(".score").empty();
    $(".score").append(score);
    Compare();
})

//This will add when the pink crystal is click
$("#pink").on("click",function(){
    $("#message").empty();
    score=score+pinkNumber;
    $(".score").empty();
    $(".score").append(score);
    Compare();
})

//This will add when the yellow crystal is click
$("#yellow").on("click",function(){
    $("#message").empty();
    score=score+yellowNumber;
    $(".score").empty();
    $(".score").append(score);
    Compare();
})

})