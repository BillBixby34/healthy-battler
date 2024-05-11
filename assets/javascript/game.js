$(document).ready(function() {

    var characters = {
        "snake": {
            name: "snake",
            offense: 10,
            defense: 90,
            picSrc: "assets/images/youngSnake.jpg",
            revenge: 15
        },
        "ray": {
            name: "ray",
            offense: 9,
            defense: 100,
            picSrc: "assets/images/MGRay.jpeg",
            revenge: 11
        },
        "otacon": {
            name: "otacon",
            offense: 12,
            defense: 85,
            picSrc: "assets/images/Otacon.webp",
            revenge: 3
        },
        "solidus": {
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
    var combatants = [];
    //is enemy chosen?
    // var enemyChoice = false;
    //setup to multiply for attack power
    var turnCounter = 1;

    // var charRow = $(".character-row");

    //functions
    //create and sets each character into arena
    var createChar = function (character, arena) {
        //may change figure back to div
        var charDiv = $("<div class='character' data-name='" + character.name + "'>");
        console.log(charDiv);
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.picSrc);
        var charHealth = $("<div class='character-health'>").text(character.defense);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(arena).append(charDiv);
    };

    //start game
    function startGame(){
        for (var key in characters){
            createChar(characters[key], ".character-row");
        }
    };

    startGame();

    //function to fix scope problems
    function updateChar(charOb, arena){
        $(arena).empty();
        createChar(charOb, arena);
    };

    var enemyLoop = function(arr){
        for (var i = 0; i < arr.length; i++) {
            createChar(arr[i], "#enemy");
        }
    };

    //click function

    $(".character-row").on("click", ".character", function(){
        var yourPick = $(this).attr("data-name");
        //if attacker not chosen
        if (!attacker) {
            attacker = characters[yourPick];
            console.log("You chose " + attacker);
            for (var key in characters){

                if (key !== yourPick){
                    combatants.push(characters[key]);
                }
            }

            //hide characters in character-row
            $(".character-row").hide();
            updateChar(attacker, "#player");  
            enemyLoop(combatants);
        };
                
    });




    //logic

    //once enemy is selected,
    $("#enemy").on("click", ".character", function(){
        var yourPick = $(this).attr("data-name");
            //no children of element
        if ($("#defender").children().length === 0){
            defender = characters[yourPick];
            //console.log(defender + " should be moved");
            updateChar(defender, "#defender");
            $(this).remove();
        }
        
        // $("#enemy").hide(defender);
    } ); //.enemies-row on "click"


    //the battle can begin!
    $("#attack-button").on("click", function(){
        console.log("defender starts with " + defender.defense);
        defender.defense -= attacker.offense * turnCounter;
        console.log("the defender has " + defender.defense + " health left");
    })
    //the character you choose has health, and attack strength
    //the enemy has health and "counter" attack strength
    //when you attack, your attack power amount is the number subtracted from your opponents health,
    //after each attack, the enemy counters with their attack to player's health

    //Whichever gets to 0 health first, loses

    //background colors of each character will change depending on their location as default, player choice, and enemy

}) //end of document

