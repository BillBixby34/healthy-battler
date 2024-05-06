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
let attacker;
//enemy chosen
let defender;
//all characters not selected
let combatants = [];
//is enemy chosen?
let enemyChoice = false;

//loop through array and create boxes
//drinkList
let charRow = $(".character-row");
//sets each character into arena
function createChar (character, arena ){
    //may change figure back to div
    let charDiv = $("<div class='character' data-name='" + character.name + "'>");
    console.log(charDiv);
    let charName= $("<div class='character-name'>").text(character.name);
    let charImage=$("<img alt='image' class='character-image'>").attr("src", character.picSrc);
    let charHealth = $("<div class='character-health'>").text(character.defense);
    charDiv.append(charName).append(charImage).append(charHealth);
    $(arena).append(charDiv);
}

//start game
function startGame(){
    for (var key in characters){
        createChar(characters[key], ".character-row");
    }
};

startGame();
// for (i = 0; i < characters.length; i++){
//     //let charBox = $("<figure>");
//     //will try to use figure first
//     charBox.addClass("box box-color");
//     charBox.attr({"data-name":characters[i].name,"data-offense":characters[i].offense, "data-health":characters[i].defense });
//     //will see ifother attributes can be added
//     charBox.text(characters[i].name);
//     console.log(characters[i].name + " has " + characters[i].defense + " health points");
//     if (playerChoice === false && enemyChoice === false) {
//         charRow.append(charBox);
//     } else if (playerChoice && enemyChoice === false){
        
//     }
    // charRow.append(charBox);

//}; //characterObjArray for-loop
//execute yell function NOT FIXED

//once character chosen, 
//character stays in chosen area,
//characters not chosen go to enemy select area
// $(".box").on("click", function(){
//     yourPick = $(this).attr("data-name");
//     alert("You have clicked " + yourPick)
//     for (let i = 0; i < characters.length; i++) {
//         if (characters[i].name !== yourPick) {
//             alert(characters[i].name + " isn't your pick")
//          }
//         //  else {
            
//         // }
//     }
// })
//logic

//once enemy is selected,
//and moved to selected enemy area,
//the enemy select area is locked,
//the battle can begin!

//the character you choose has health, and attack strength
//the enemy has health and "counter" attack strength
//when you attack, your attack power amount is the number subtracted from your opponents health,
//after each attack, the enemy counters with their attack to player's health
// CHALLENGE: Will try to use recursion to automate battles

//Whichever gets to 0 health first, loses

//background colors of each character will change depending on their location as default, player choice, and enemy

}); //end of document

