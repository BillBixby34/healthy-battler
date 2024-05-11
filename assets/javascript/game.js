$(document).ready(function(){


//will create boxes
//let charBox = $(".box");
//characters object
let characters = {
    "snake" : {
        name: "snake",
        offense: 10,
        defense: 90,
        picSrc: "assets/images/youngSnake.jpg",
        revenge: 15
    },

    "ray" : {
        name: "ray",
        offense: 9,
        defense: 100,
        picSrc: "assets/images/MGRay.jpeg",
        revenge: 11
    },

    "otacon" : {
        name: "otacon",
        offense: 12,
        defense: 85,
        picSrc: "assets/images/Otacon.webp",
        revenge: 3
    },

    "solidus" : {
        name: "solidus",
        offense: 14,
        defense: 89,
        picSrc: "assets/images/solidusSnake.jpg",
        revenge: 13
    }
};

//create variables
//chosen character
var attacker;
//enemy chosen
var defender;
//all characters not selected
let combatants = [];
//is enemy chosen?
let enemyChoice = false;
//setup to multiply for attack power
let turnCounter = 1;

let charRow = $(".character-row");

//functions
//create and sets each character into arena
function createChar (character, arena ){
    //may change figure back to div
    let charDiv = $("<div class='character' data-name='" + character.name + "'>");
    console.log(charDiv);
    let charName= $("<div class='character-name'>").text(character.name);
    let charImage= $("<img alt='image' class='character-image'>").attr("src", character.picSrc);
    let charHealth = $("<div class='character-health'>").text(character.defense);
    charDiv.append(charName).append(charImage).append(charHealth);
    $(arena).append(charDiv);
}

//function to fix scope problems
function updateChar(charOb, arena){
    $(arena).empty();
    createChar(charOb, arena);
};

//start game
function startGame(){
    for (var key in characters){
        createChar(characters[key], ".character-row");
    }
};

startGame();
//click function

$(".character-row").on("click", ".character", function(){
    var yourPick = $(this).attr("data-name");
    //if attacker not chosen
    if (!attacker) {
        attacker = characters[yourPick];
        alert("You chose " + attacker);
        for (var key in characters){

            if (key !== yourPick){
                combatants.push(characters[key]);
            }
        }

        //hide characters in character-row
        //either make new row for selected or re-render yourPick
        $(".character-row").hide();
        updateChar(attacker, ".player-row");  
        enemyLoop(combatants);
    }
            
});

//log function *Not working with object*
function logFunction (item){
    console.log("We have logged " + item);
};
let enemyLoop = function(arr){
    for (let i = 0; i < arr.length; i++) {
        createChar(arr[i], ".enemies-row");
    }
}

//logic

//once enemy is selected,
$(".enemies-row").on("click", ".character", function(){
    var enemyPick = $(this).attr("data-name");
        //no children of element
    if ($(".defender-row").children().length === 0){
        defender = characters[enemyPick];
        alert(defender + " should be moved");
        updateChar(defender, ".defender-row");
        $(this).remove();
    }
    
    //$(".enemies-row").hide(defender);
} ); //.enemies-row on "click"


//the battle can begin!

//the character you choose has health, and attack strength
//the enemy has health and "counter" attack strength
//when you attack, your attack power amount is the number subtracted from your opponents health,
//after each attack, the enemy counters with their attack to player's health

//Whichever gets to 0 health first, loses

//background colors of each character will change depending on their location as default, player choice, and enemy

}); //end of document

